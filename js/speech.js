/* Puhesynteesi: amerikanenglanti (en-US) selaimen Web Speech API:lla.
   - Valitsee vain en-US-äänet; brittiläistä ääntä ei käytetä amerikkalaisena.
   - Yksi ääni kerrallaan: uusi toisto pysäyttää edellisen.
   - Suomenkielisiä tekstejä ei koskaan lähetetä englanninkieliselle äänelle. */
(function () {
  'use strict';
  var synth = window.speechSynthesis || null;
  var supported = !!(synth && window.SpeechSynthesisUtterance);
  var voices = [];       // en-US voices only
  var status = supported ? 'loading' : 'unsupported'; // loading | ready | nolist | unsupported
  var listeners = [];
  var queue = [];
  var activeBtn = null;
  var token = 0;

  function isUS(v) {
    var l = (v.lang || '').replace('_', '-').toLowerCase();
    return l === 'en-us';
  }

  // Äänten pisteytys: luonnolliset (neuroverkko) naisäänet ensin.
  var FEMALE = /\b(aria|jenny|ava|emma|michelle|ana|sara|zira|samantha|allison|susan|ava|joanna|salli|kendra|kimberly|ivy|nicky|nora|serena|evelyn|amber|ashley|cora|elizabeth|jane|nancy|female|woman|google us english)\b|x-(sfg|iob|iog|tpc|tpf)/i;
  var MALE = /\b(david|mark|guy|andrew|brian|christopher|eric|roger|steffan|alex|fred|tom|aaron|evan|nathan|davis|jason|tony|male|man)\b|x-(iol|iom|tpd)/i;
  var NATURAL = /natural|neural|online|premium|enhanced|network|wavenet|siri/i;
  function score(v) {
    var n = (v.name || '') + ' ' + (v.voiceURI || '');
    var s = 0;
    if (NATURAL.test(n)) s += 10;
    if (FEMALE.test(n)) s += 6;
    else if (MALE.test(n)) s -= 6;
    if (/compact|eloquence|novelty|whisper|bad news|bells|bubbles|cellos|jester|organ|trinoids|zarvox|boing|albert|fred|junior|ralph|kathy|superstar|grandma|grandpa|rocko|shelley|flo|reed|sandy/i.test(n)) s -= 20;
    if (v.localService) s += 1;
    return s;
  }
  function voiceInfo(v) {
    var n = (v.name || '') + ' ' + (v.voiceURI || '');
    return { female: FEMALE.test(n) && !MALE.test(v.name || ''), natural: NATURAL.test(n) };
  }

  function refresh() {
    if (!supported) return;
    var all = synth.getVoices() || [];
    var us = all.filter(isUS);
    us.sort(function (a, b) { return score(b) - score(a); });
    voices = us;
    if (all.length === 0) status = 'loading';
    else status = us.length ? 'ready' : 'novoice';
    listeners.forEach(function (fn) { try { fn(); } catch (e) {} });
  }

  if (supported) {
    refresh();
    if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', refresh);
    else synth.onvoiceschanged = refresh;
    // Osa Android-selaimista ei laukaise voiceschanged-tapahtumaa luotettavasti
    var tries = 0;
    var poll = setInterval(function () {
      tries++;
      if (status !== 'loading') { clearInterval(poll); return; }
      refresh();
      if (tries > 12 && status === 'loading') {
        // Äänilistaa ei saatu. Pyydetään silti en-US-kieltä; selain valitsee sen moottorin.
        status = 'nolist';
        listeners.forEach(function (fn) { try { fn(); } catch (e) {} });
        clearInterval(poll);
      }
    }, 250);
  }

  function preferredVoice() {
    var uri = window.Store && Store.data.audio.voiceURI;
    if (uri) for (var i = 0; i < voices.length; i++) if (voices[i].voiceURI === uri) return voices[i];
    return voices[0] || null;
  }
  function secondaryVoice() {
    var p = preferredVoice();
    // Toiselle puhujalle luonnollisin muu ääni (sukupuolella ei väliä)
    var best = null, bs = -1e9;
    voices.forEach(function (v) {
      if (v === p) return;
      var n = (v.name || '') + ' ' + (v.voiceURI || ''), sc = score(v);
      if (sc <= -10) return;
      var s2 = (NATURAL.test(n) ? 10 : 0) + (v.localService ? 1 : 0);
      if (s2 > bs) { bs = s2; best = v; }
    });
    return best || p;
  }

  // Nimi Sadan on suomalainen ja lausutaan "SAH-dahn". Englanninkielinen ääni
  // saa kirjoitusasun, joka tuottaa tämän ääntämyksen. Näytöllä nimi pysyy muodossa Sadan.
  var NAME_SPOKEN = 'Sah-dahn';
  function forSpeech(t) { return t.replace(/\bSadan\b/g, NAME_SPOKEN); }

  // "Sadan: Hello. Patient: Hi." -> [{role:'Sadan', text:'Hello.'}, ...]
  var ROLE_RE = /(?:^|\s)((?:The patient says)|(?:Sadan says)|Sadan|Patient|Supervisor|Nurse):\s/g;
  function splitScript(text) {
    var out = [], m, last = 0, role = null;
    ROLE_RE.lastIndex = 0;
    while ((m = ROLE_RE.exec(text))) {
      var chunk = text.slice(last, m.index).trim();
      if (chunk) out.push({ role: role, text: chunk });
      role = /sadan/i.test(m[1]) ? 'Sadan' : 'Other';
      last = m.index + m[0].length;
    }
    var tail = text.slice(last).trim();
    if (tail) out.push({ role: role, text: tail });
    return out;
  }

  function setBtn(btn, on) {
    if (!btn) return;
    btn.classList.toggle('playing', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function stop() {
    token++;
    queue = [];
    if (supported) { try { synth.cancel(); } catch (e) {} }
    setBtn(activeBtn, false);
    activeBtn = null;
  }

  function canSpeak() { return supported && (status === 'ready' || status === 'nolist'); }

  function speakNext(myToken, rate) {
    if (myToken !== token) return;
    var seg = queue.shift();
    if (!seg) { setBtn(activeBtn, false); activeBtn = null; return; }
    var u = new SpeechSynthesisUtterance(forSpeech(seg.text));
    u.lang = 'en-US';
    var v = seg.role === 'Other' ? secondaryVoice() : preferredVoice();
    if (v) u.voice = v;
    u.rate = rate;
    u.pitch = seg.role === 'Other' && secondaryVoice() === preferredVoice() ? 0.9 : 1;
    u.onend = function () { setTimeout(function () { speakNext(myToken, rate); }, 260); };
    u.onerror = function () { if (myToken === token) { setBtn(activeBtn, false); activeBtn = null; } };
    synth.speak(u);
  }

  /** text: English only. opts: { slow, script, btn } */
  function say(text, opts) {
    opts = opts || {};
    if (!canSpeak()) return false;
    var wasSame = activeBtn && opts.btn === activeBtn;
    stop();
    if (wasSame) return true; // toinen painallus pysäyttää
    var myToken = token;
    var base = (window.Store && Store.data.audio.rate) || 0.9;
    var rate = opts.slow ? Math.max(0.55, base - 0.3) : base;
    var segs = opts.script ? splitScript(text) : [{ role: null, text: text }];
    // Pitkät tekstit lauseittain (Chrome katkaisee joskus pitkät äänitteet)
    queue = [];
    segs.forEach(function (s) {
      var parts = s.text.match(/[^.?!]+[.?!]*/g) || [s.text];
      var buf = '';
      parts.forEach(function (p) {
        if ((buf + p).length > 160 && buf) { queue.push({ role: s.role, text: buf.trim() }); buf = ''; }
        buf += p;
      });
      if (buf.trim()) queue.push({ role: s.role, text: buf.trim() });
    });
    activeBtn = opts.btn || null;
    setBtn(activeBtn, true);
    // Pieni viive cancel()-kutsun jälkeen: Chrome voi muuten pudottaa ensimmäisen lauseen
    setTimeout(function () { speakNext(myToken, rate); }, 60);
    return true;
  }

  window.Speech = {
    supported: supported,
    get status() { return status; },
    get voices() { return voices; },
    canSpeak: canSpeak,
    say: say,
    stop: stop,
    splitScript: splitScript,
    voiceInfo: voiceInfo,
    forSpeech: forSpeech,
    onChange: function (fn) { listeners.push(fn); },
    currentVoiceName: function () { var v = preferredVoice(); return v ? v.name + ' (' + v.lang + ')' : null; }
  };
})();
