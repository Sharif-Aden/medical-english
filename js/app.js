/* Sadan's Medical English – sovelluslogiikka (vanilla JS, ei rakennusvaihetta). */
(function () {
  'use strict';
  var C = window.COURSE;
  var S = window.Store;
  var SP = window.Speech;
  var main = document.getElementById('main');
  var LESSONS = C.lessons;

  /* ================= Apufunktiot ================= */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function lessonById(id) { return LESSONS[id - 1]; }
  function vkey(lid, i) { return lid + '-' + i; }
  function vocabByKey(key) {
    var p = key.split('-'); var L = lessonById(+p[0]);
    return L ? { L: L, v: L.vocab[+p[1]], key: key } : null;
  }
  function allVocab() {
    var out = [];
    LESSONS.forEach(function (L) { L.vocab.forEach(function (v, i) { out.push({ L: L, v: v, key: vkey(L.id, i) }); }); });
    return out;
  }
  function fold(s) {
    return String(s).toLocaleLowerCase('fi').normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function norm(s) {
    return String(s || '').toLocaleLowerCase('fi')
      .replace(/[’‘`´]/g, "'").replace(/\.\.\.|…/g, ' ')
      .replace(/[.,!?;:"“”()]/g, ' ').replace(/\s+/g, ' ').trim()
      .replace(/\bi'm\b/g, 'i am').replace(/\bi'll\b/g, 'i will').replace(/\byou're\b/g, 'you are')
      .replace(/\bwe'll\b/g, 'we will').replace(/\bit's\b/g, 'it is').replace(/\blet's\b/g, 'let us')
      .replace(/\bdon't\b/g, 'do not');
  }
  function matches(input, keys) {
    var n = norm(input);
    if (!n) return false;
    return keys.some(function (k) { return norm(k) === n; });
  }
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }
  function announce(msg) {
    var r = document.getElementById('live');
    r.textContent = ''; setTimeout(function () { r.textContent = msg; }, 50);
  }
  // Merkitsee lainausmerkeissä olevan englannin lang="en" -merkinnällä
  var EN_WORDS = (function () {
    var set = {};
    function add(t) { String(t).toLowerCase().replace(/[^a-z' ]/g, ' ').split(/\s+/).forEach(function (w) { if (w) set[w] = 1; }); }
    LESSONS.forEach(function (L) {
      L.vocab.forEach(function (v) { add(v.en); add(v.ex); });
      L.dialogue.forEach(function (d) { add(d.en); });
      L.quiz.forEach(function (q) { if (q.ol === 'en') q.o.forEach(add); });
    });
    return set;
  })();
  function looksEnglish(t) {
    if (/[äöå]/i.test(t)) return false;
    var ws = t.toLowerCase().replace(/[^a-z' ]/g, ' ').split(/\s+/).filter(Boolean);
    if (!ws.length) return false;
    var hit = ws.filter(function (w) { return EN_WORDS[w]; }).length;
    return hit / ws.length >= 0.6;
  }
  function richFi(text) {
    // Teksti on suomea; lainatut englanninkieliset jaksot merkitään lang="en"
    var re = /"([^"]+)"|(^|[^A-Za-z])'([^']+)'(?![A-Za-z])/g, out = '', last = 0, m;
    text = String(text);
    while ((m = re.exec(text))) {
      var pre = m[2] || '', inner = m[1] != null ? m[1] : m[3], q = m[1] != null ? '"' : "'";
      out += esc(text.slice(last, m.index)) + esc(pre);
      out += looksEnglish(inner) ? q + '<span lang="en">' + esc(inner) + '</span>' + q : q + esc(inner) + q;
      last = m.index + m[0].length;
    }
    return out + esc(text.slice(last));
  }

  /* ================= Kuvakkeet ================= */
  var I = {
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><path d="M9 7h6"/>',
    abc: '<path d="M4 7h16"/><path d="M4 12h10"/><path d="M4 17h13"/><circle cx="19" cy="17" r="0"/>',
    loop: '<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
    chart: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
    speaker: '<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
    arrowR: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    arrowL: '<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>',
    check: '<path d="M4 12l5 5L20 6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><path d="M12 7.5v.5"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + I[name] + '</svg>';
  }
  function sayBtn(text, label, opts) {
    opts = opts || {};
    var cls = 'btn speak-btn ' + (opts.wide ? 'sm' : 'icon');
    return '<button type="button" class="' + cls + '" data-say="' + esc(text) + '"' + (opts.script ? ' data-script="1"' : '') + (opts.slow ? ' data-slow="1"' : '') +
      ' aria-pressed="false" aria-label="' + esc(label) + '">' + icon('speaker') + (opts.wide ? '<span>' + esc(opts.wide) + '</span>' : '') + '</button>';
  }
  function audioNotice() {
    if (!SP.supported) return '<div class="notice" role="note"><strong>Ääni ei ole käytettävissä.</strong> Tämä selain ei tue puhesynteesiä. Voit silti opiskella: avaa tekstit painikkeella <em>Näytä käsikirjoitus</em> ja lue mallit ääneen. Kokeile esimerkiksi Chromea Androidilla.</div>';
    if (SP.status === 'novoice') return '<div class="notice" role="note"><strong>Amerikanenglannin ääntä ei löytynyt.</strong> Laitteessasi ei ole en-US-puheääntä, joten ääntä ei toisteta (brittiläistä ääntä ei käytetä). Asenna Android-asetuksista <em>Tekstistä puheeksi</em> → englanti (Yhdysvallat), tai käytä tekstivaihtoehtoa.</div>';
    if (SP.status === 'nolist') return '<div class="notice info" role="note">Selain ei kertonut äänilistaansa. Ääni pyydetään amerikanenglanniksi (en-US), mutta murretta ei voitu tarkistaa. Varmista tarvittaessa laitteen asetuksista, että englannin kielenä on Yhdysvallat.</div>';
    return '';
  }

  /* ================= Navigointi ================= */
  var NAV = [
    { href: '#/', label: 'Etusivu', icon: 'home', match: /^\/$|^\/(alkutesti|lopputesti|tietoa)/ },
    { href: '#/oppitunnit', label: 'Oppitunnit', icon: 'book', match: /^\/oppitun/ },
    { href: '#/sanasto', label: 'Sanasto', icon: 'abc', match: /^\/sanasto/ },
    { href: '#/harjoittelu', label: 'Harjoittelu', icon: 'loop', match: /^\/harjoittelu/ },
    { href: '#/edistyminen', label: 'Edistyminen', icon: 'chart', match: /^\/edistyminen/ }
  ];
  function renderNav(path) {
    $('#bottomnav').innerHTML = NAV.map(function (n) {
      var cur = n.match.test(path);
      return '<a href="' + n.href + '"' + (cur ? ' aria-current="page"' : '') + '>' + icon(n.icon) + '<span>' + n.label + '</span></a>';
    }).join('');
  }
  function updateSpeedBtn() {
    var r = S.data.audio.rate;
    var b = $('#speed');
    var label = r <= 0.75 ? 'Hidas' : (r >= 1 ? 'Nopea' : 'Normaali');
    b.textContent = '🔊 ' + label;
    b.setAttribute('aria-label', 'Puhenopeus: ' + label + '. Vaihda nopeutta.');
  }

  /* ================= Edistymislaskenta ================= */
  var STEPS = [
    { id: 'aloitus', label: 'Aloitus' },
    { id: 'sanasto', label: 'Sanasto' },
    { id: 'aantaminen', label: 'Ääntäminen' },
    { id: 'keskustelu', label: 'Keskustelu' },
    { id: 'kuuntelu', label: 'Kuuntelu' },
    { id: 'puhuminen', label: 'Puhuminen' },
    { id: 'harjoitukset', label: 'Harjoitukset' },
    { id: 'testi', label: 'Testi' },
    { id: 'yhteenveto', label: 'Yhteenveto' }
  ];
  function lessonStatus(id) {
    var p = S.data.lessons[String(id)];
    if (!p) return 'new';
    if (p.done) return 'done';
    return p.steps.length ? 'part' : 'new';
  }
  function statusPill(id) {
    var st = lessonStatus(id);
    if (st === 'done') return '<span class="pill done">' + icon('check').replace('<svg', '<svg width="14" height="14"') + 'Suoritettu</span>';
    if (st === 'part') return '<span class="pill part">Kesken</span>';
    return '<span class="pill">Ei aloitettu</span>';
  }
  function doneCount() { return LESSONS.filter(function (L) { return lessonStatus(L.id) === 'done'; }).length; }
  function continueTarget() {
    var last = S.data.last;
    if (last && lessonStatus(last.lesson) !== 'done') return { lesson: last.lesson, step: last.step };
    for (var i = 0; i < LESSONS.length; i++) if (lessonStatus(LESSONS[i].id) !== 'done') {
      var p = S.data.lessons[String(LESSONS[i].id)];
      return { lesson: LESSONS[i].id, step: p && p.steps.length ? STEPS[Math.min(p.steps.length, STEPS.length - 1)].id : 'aloitus' };
    }
    return null;
  }

  /* ================= Näkymät ================= */
  function viewHome() {
    var d = doneCount(), pct = Math.round(d / 12 * 100);
    var tgt = continueTarget();
    var cont = tgt ? '#/oppitunti/' + tgt.lesson + '/' + tgt.step : '#/lopputesti';
    var contLabel = !S.data.pretest ? 'Aloita alkutestillä' : (tgt ? (d === 0 && !S.data.last ? 'Aloita oppitunti 1' : 'Jatka opiskelua') : 'Tee lopputesti');
    if (!S.data.pretest) cont = '#/alkutesti';
    var contSub = !S.data.pretest ? 'Lyhyt alkutesti (noin 5 min) näyttää lähtötasosi.' :
      (tgt ? 'Oppitunti ' + tgt.lesson + ': ' + esc(lessonById(tgt.lesson).title) : 'Kaikki oppitunnit on suoritettu – hienoa työtä!');
    var html = '';
    html += '<section class="hero" aria-labelledby="h-welcome">' +
      '<svg class="hero-deco" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="none" stroke="#fff" stroke-width="6"/><path d="M50 22v56M22 50h56" stroke="#fff" stroke-width="10" stroke-linecap="round"/></svg>' +
      '<h1 id="h-welcome">Tervetuloa, Sadan!</h1>' +
      '<p>Sairaalan englantia bioanalytiikan opiskelijalle · Metropolia ammattikorkeakoulu</p>' +
      '<div class="progress" role="progressbar" aria-label="Suoritetut oppitunnit" aria-valuemin="0" aria-valuemax="12" aria-valuenow="' + d + '"><div style="width:' + pct + '%"></div></div>' +
      '<p class="small" style="margin-bottom:16px">' + d + ' / 12 oppituntia suoritettu</p>' +
      '<a class="btn primary big" href="' + cont + '">' + contLabel + icon('arrowR') + '</a>' +
      '<p class="small" style="margin:10px 0 0">' + contSub + '</p></section>';
    html += audioNotice();
    html += '<h2>Oppitunnit</h2>' + lessonListHTML();
    html += '<div class="grid-2" style="margin-top:16px">' +
      '<a class="card lesson-card" href="#/alkutesti"><div class="lesson-num" aria-hidden="true">A</div><div><h3>Alkutesti</h3><div class="meta">' +
      (S.data.pretest ? 'Tehty: ' + S.data.pretest.score + ' / 10 pistettä' : 'Tee ennen ensimmäistä oppituntia') + '</div></div></a>' +
      '<a class="card lesson-card" href="#/lopputesti"><div class="lesson-num" aria-hidden="true">L</div><div><h3>Lopputesti</h3><div class="meta">' +
      (S.data.final ? 'Tehty: ' + S.data.final.total + ' / 100 pistettä' : 'Tee oppitunnin 12 jälkeen') + '</div></div></a></div>';
    html += '<p class="footer-note">Itsenäisen kielenopiskelun harjoitussivusto. Ei ole Metropolian tai HUSin virallinen palvelu eikä kliininen työohje. <a href="#/tietoa">Tietoa kurssista ja lähteet</a></p>';
    return html;
  }

  function lessonListHTML() {
    return '<ul class="lesson-list">' + LESSONS.map(function (L) {
      var p = S.data.lessons[String(L.id)];
      var best = p && p.quiz.best != null ? ' · Testi: ' + p.quiz.best + '/10' : '';
      return '<li><a class="lesson-card' + (lessonStatus(L.id) === 'done' ? ' is-done' : '') + '" href="#/oppitunti/' + L.id + '/aloitus">' +
        '<div class="lesson-num" aria-hidden="true">' + L.id + '</div><div><h3><span class="sr-only">Oppitunti ' + L.id + ': </span>' + esc(L.title) + '</h3>' +
        '<div class="meta"><span lang="en">' + esc(L.titleEn) + '</span> · 30 min' + best + '</div><div class="row">' + statusPill(L.id) + '</div></div></a></li>';
    }).join('') + '</ul>';
  }

  function viewLessons() {
    return '<h1>Oppitunnit</h1><p class="muted">12 oppituntia, kukin noin 30 minuuttia. Voit palata mihin tahansa oppituntiin milloin vain.</p>' + lessonListHTML();
  }

  /* ---------- Oppitunti ---------- */
  var ui = {}; // väliaikainen näkymäkohtainen tila

  function viewLesson(id, stepId) {
    var L = lessonById(id);
    if (!L) return viewNotFound();
    var si = Math.max(0, STEPS.findIndex(function (s) { return s.id === stepId; }));
    var step = STEPS[si];
    var p = S.lesson(id);
    if (p.steps.indexOf(step.id) < 0) { p.steps.push(step.id); }
    S.data.last = { lesson: id, step: step.id };
    S.save();

    var html = '<div class="lesson-head"><div class="kicker">Oppitunti ' + id + ' / 12</div><h1>' + esc(L.title) + '</h1><p class="muted" lang="en" style="margin:0">' + esc(L.titleEn) + '</p></div>';
    html += '<nav class="stepper" aria-label="Oppitunnin vaiheet"><div class="steps">' + STEPS.map(function (s, i) {
      var visited = p.steps.indexOf(s.id) >= 0 && i !== si;
      return '<button type="button" data-goto="' + s.id + '"' + (i === si ? ' aria-current="step"' : '') + '>' +
        (visited ? '<span class="tick" aria-hidden="true">✓</span>' : '') + esc(s.label) + (visited ? '<span class="sr-only"> (avattu)</span>' : '') + '</button>';
    }).join('') + '</div><div class="step-count" aria-live="polite">Vaihe ' + (si + 1) + ' / ' + STEPS.length + ': ' + esc(step.label) + '</div></nav>';
    html += '<section aria-labelledby="step-h">' + STEP_VIEWS[step.id](L, p) + '</section>';
    var prev = si > 0 ? '<a class="btn" href="#/oppitunti/' + id + '/' + STEPS[si - 1].id + '">' + icon('arrowL') + 'Edellinen</a>' :
      (id > 1 ? '<a class="btn" href="#/oppitunti/' + (id - 1) + '/yhteenveto">' + icon('arrowL') + 'Edellinen oppitunti</a>' : '<span></span>');
    var next = si < STEPS.length - 1 ? '<a class="btn primary" href="#/oppitunti/' + id + '/' + STEPS[si + 1].id + '">Seuraava' + icon('arrowR') + '</a>' :
      (id < 12 ? '<a class="btn primary" href="#/oppitunti/' + (id + 1) + '/aloitus">Seuraava oppitunti' + icon('arrowR') + '</a>' : '<a class="btn primary" href="#/lopputesti">Lopputestiin' + icon('arrowR') + '</a>');
    html += '<div class="step-nav">' + prev + next + '</div>';
    return html;
  }

  var STEP_VIEWS = {
    aloitus: function (L, p) {
      var h = '<h2 id="step-h">Aloitus ja kertaus</h2>';
      h += '<div class="card"><h3>Tämän oppitunnin tavoitteet</h3><ul>' + L.goals.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul>' +
        '<p class="small muted" style="margin:0">Kesto noin 30 min: sanasto 7 min · ääntäminen 4 min · keskustelu 5 min · kuuntelu ja puhuminen 6 min · harjoitukset ja testi 5 min.</p></div>';
      h += audioNotice();
      if (L.id === 1) {
        h += '<div class="card soft"><h3>Kertaus</h3><p>' + esc(C.reviewNote[1] || '') + '</p><p class="small" style="margin:0">Vinkki: tee ensin <a href="#/alkutesti">alkutesti</a>, jos et ole vielä tehnyt sitä.</p></div>';
      } else {
        var prevL = lessonById(L.id - 1);
        h += '<div class="card"><h3>Kertaus: oppitunnin ' + prevL.id + ' sanat (3 min)</h3><p class="small muted">Katso suomenkielinen sana ja sano englanninkielinen vastine ääneen. Näytä sitten vastaus.</p>' +
          flashHTML('review', prevL.vocab.map(function (v, i) { return vkey(prevL.id, i); }), 'fi') + '</div>';
      }
      h += '<div class="safety" role="note"><strong>Turvallisuus ja käytäntö:</strong> ' + esc(L.safety) + '</div>';
      return h;
    },

    sanasto: function (L) {
      var h = '<h2 id="step-h">Sanasto: ' + L.vocab.length + ' ilmausta</h2>';
      h += '<p>Kuuntele sana ja esimerkkilause amerikanenglanniksi, katso suomennos ja IPA-ääntämisohje. Lue esimerkkilause ääneen.</p>';
      h += '<div class="row" style="margin-bottom:12px"><button type="button" class="btn sm" data-action="toggle-tr" aria-pressed="false">Piilota suomennokset</button></div>';
      h += audioNotice();
      h += '<ul class="vocab-list" id="vocab-list">' + L.vocab.map(function (v, i) { return vocabItemHTML(L, v, i); }).join('') + '</ul>';
      return h;
    },

    aantaminen: function (L) {
      var h = '<h2 id="step-h">Ääntäminen (4 min)</h2>' + audioNotice();
      h += '<div class="card soft"><p style="margin:0">' + richPron(L.pron.text) + '</p></div>';
      h += '<div class="card"><h3>Toimi näin</h3><ol class="speak-steps"><li>Sano sana hitaasti (kuuntele hidas malli).</li><li>Toista normaalilla puhenopeudella.</li><li>Sano koko esimerkkilause.</li><li>Toista ilman tekstin tukea.</li></ol></div>';
      h += '<h3>Vaikeat äänteet ja painot</h3><ul class="vocab-list">' + L.pron.focus.map(function (f) {
        return '<li class="vocab-item"><div class="top"><div class="grow"><div class="term" lang="en">' + esc(f.en) + '</div>' +
          (f.ipa ? '<div class="ipa" lang="en-fonipa">' + esc(f.ipa) + '</div>' : '') + (f.tip ? '<div class="small">' + esc(f.tip) + '</div>' : '') + '</div>' +
          '<div class="row" style="flex:none">' + sayBtn(f.en, 'Kuuntele hitaasti: ' + f.en, { slow: true, wide: 'Hitaasti' }) + sayBtn(f.en, 'Kuuntele: ' + f.en) + '</div></div></li>';
      }).join('') + '</ul>';
      h += '<h3 style="margin-top:20px">Lauseharjoitus</h3><p class="small muted">Kuuntele, toista ja yritä sitten sanoa lause katsomatta tekstiä.</p><ul class="vocab-list">' + L.vocab.slice(0, 4).map(function (v) {
        return '<li class="vocab-item"><div class="top"><p class="grow en" lang="en" style="margin:0">' + esc(v.ex) + '</p><div class="row" style="flex:none">' +
          sayBtn(v.ex, 'Kuuntele hitaasti', { slow: true, wide: 'Hitaasti' }) + sayBtn(v.ex, 'Kuuntele lause') + '</div></div></li>';
      }).join('') + '</ul>';
      return h;
    },

    keskustelu: function (L) {
      var h = '<h2 id="step-h">Potilaskeskustelu (5 min)</h2>';
      h += '<div class="card soft"><p style="margin:0"><strong>Tilanne:</strong> ' + esc(L.scenario) + '</p></div>';
      h += '<p>Lue vuoropuhelu ääneen. Kuuntele ensin koko keskustelu, sitten harjoittele Sadanin vuorosanoja. Piilota suomennokset toisella lukukerralla. Potilaan ja ohjaajan nimet ovat kuvitteellisia.</p>';
      h += audioNotice();
      var full = L.dialogue.map(function (d) { return (d.s === 'Sadan' ? 'Sadan: ' : 'Patient: ') + d.en; }).join(' ');
      h += '<div class="row" style="margin-bottom:14px">' + sayBtn(full, 'Kuuntele koko keskustelu', { script: true, wide: 'Kuuntele koko keskustelu' }) +
        '<button type="button" class="btn sm" data-action="toggle-tr" aria-pressed="false">Piilota suomennokset</button></div>';
      h += '<ol class="dialogue" id="vocab-list">' + L.dialogue.map(function (d, i) {
        var me = d.s === 'Sadan';
        return '<li class="line' + (me ? ' me' : '') + '">' + sayBtn(d.en, 'Kuuntele repliikki ' + (i + 1)) +
          '<div class="bubble"><span class="who">' + esc(d.s) + '</span><span class="en" lang="en">' + esc(d.en) + '</span><span class="fi-tr">' + esc(d.fi) + '</span></div></li>';
      }).join('') + '</ol>';
      return h;
    },

    kuuntelu: function (L, p) {
      var h = '<h2 id="step-h">Kuullun ymmärtäminen (3 min)</h2>';
      h += '<p>Kuuntele englanninkielinen teksti ilman tekstiä. Vastaa sitten suomenkielisiin kysymyksiin. Voit kuunnella niin monta kertaa kuin haluat. Teksti näytetään vasta, kun tarkistat vastauksesi tai avaat käsikirjoituksen itse.</p>';
      h += audioNotice();
      L.listening.forEach(function (li, k) {
        h += listeningCardHTML('L' + L.id + '-' + k, 'Kuuntelu ' + (k + 1), li, p.listen[k]);
      });
      return h;
    },

    puhuminen: function (L, p) {
      var h = '<h2 id="step-h">Puhuminen (3 min)</h2>';
      h += '<p>Mikrofonia ei tarvita. Kuuntele malli, toista ääneen ja yritä lopuksi ilman tekstiä. Arvioi sitten itse, miten onnistuit.</p>' + audioNotice();
      L.speaking.forEach(function (t, k) {
        var saved = p.speak[k];
        h += '<div class="card" data-speak="' + k + '"><h3>Puheharjoitus ' + (k + 1) + '</h3><p>' + richFi(t.task) + '</p>' +
          '<ol class="speak-steps"><li>Kuuntele malli hitaasti.</li><li>Toista ääneen normaalilla nopeudella.</li><li>Piilota teksti ja sano vastaus itse.</li></ol>' +
          '<div class="row" style="margin-bottom:10px">' + sayBtn(t.model, 'Kuuntele mallivastaus hitaasti', { slow: true, wide: 'Hitaasti' }) + sayBtn(t.model, 'Kuuntele mallivastaus', { wide: 'Normaali' }) +
          '<button type="button" class="btn sm" data-action="toggle-model" aria-expanded="false" aria-controls="model-' + k + '">Näytä mallivastaus</button></div>' +
          '<div class="model" id="model-' + k + '" hidden><span class="small muted">Mallivastaus:</span><p class="en" lang="en" style="margin:0">' + esc(t.model) + '</p></div>' +
          '<fieldset style="border:0;padding:0;margin:12px 0 0"><legend class="small" style="font-weight:700;margin-bottom:6px">Miten onnistuit?</legend><div class="choice-row">' +
          [['3', 'Ilman tekstiä'], ['2', 'Tekstin avulla'], ['1', 'Harjoittelen vielä']].map(function (c) {
            return '<button type="button" class="btn sm" data-action="speak-self" data-k="' + k + '" data-v="' + c[0] + '" aria-pressed="' + (saved === +c[0] ? 'true' : 'false') + '">' + c[1] + '</button>';
          }).join('') + '</div></fieldset></div>';
      });
      return h;
    },

    harjoitukset: function (L, p) {
      var h = '<h2 id="step-h">Kirjalliset harjoitukset (5 min)</h2>';
      // 1 Yhdistä
      h += '<div class="card" id="ex-match"><h3>1. Yhdistä englannin sana ja suomenkielinen merkitys</h3><p class="small muted">Valitse jokaiselle englanninkieliselle ilmaukselle oikea suomenkielinen merkitys.</p>';
      L.match.items.forEach(function (it, i) {
        h += '<div class="ex-item"><label for="m' + i + '"><span lang="en">' + esc(it) + '</span></label><select id="m' + i + '" data-match="' + i + '"><option value="">Valitse merkitys</option>' +
          L.match.meanings.map(function (m, j) { return '<option value="' + (j + 1) + '">' + esc(m) + '</option>'; }).join('') + '</select><div class="fbslot" aria-live="polite"></div></div>';
      });
      h += '<div class="row" style="margin-top:12px"><button type="button" class="btn primary" data-action="check-match">Tarkista vastaukset</button><span class="score" data-score="match"></span></div></div>';
      // 2 Käännä
      h += '<div class="card" id="ex-tr"><h3>2. Käännä englanniksi</h3><p class="small muted">Kirjoita englanniksi. Isot ja pienet kirjaimet sekä välimerkit eivät vaikuta. Jos vastauksesi on eri sanoin mutta merkitykseltään oikein, voit hyväksyä sen itse.</p>';
      L.translate.items.forEach(function (it, i) {
        h += '<div class="ex-item" data-tr="' + i + '"><label for="t' + i + '">' + esc(it) + '</label><input type="text" id="t' + i + '" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false"><div class="fbslot" aria-live="polite"></div></div>';
      });
      h += '<div class="row" style="margin-top:12px"><button type="button" class="btn primary" data-action="check-tr">Tarkista vastaukset</button><span class="score" data-score="tr"></span></div></div>';
      // 3 Täydennä
      h += '<div class="card" id="ex-fill"><h3>3. Täydennä lauseet</h3><p class="small muted">Kirjoita puuttuva englanninkielinen sana.</p>';
      L.fill.items.forEach(function (it, i) {
        var parts = it.split('____');
        h += '<div class="ex-item"><label for="f' + i + '" class="sr-only">Täydennä lause ' + (i + 1) + '</label><p class="en" lang="en" style="margin:0 0 6px">' + esc(parts[0]) + '<span aria-hidden="true">_____</span>' + esc(parts[1] || '') + '</p>' +
          '<input type="text" id="f' + i + '" lang="en" data-fill="' + i + '" autocomplete="off" autocapitalize="off" spellcheck="false" style="max-width:260px"><div class="fbslot" aria-live="polite"></div></div>';
      });
      h += '<div class="row" style="margin-top:12px"><button type="button" class="btn primary" data-action="check-fill">Tarkista vastaukset</button><span class="score" data-score="fill"></span></div></div>';
      var ex = p.ex;
      if (ex.match || ex.tr || ex.fill) {
        h += '<p class="small muted">Edellinen tallennettu tulos: ' + [ex.match ? 'yhdistä ' + ex.match + '/5' : '', ex.tr ? 'käännä ' + ex.tr + '/4' : '', ex.fill ? 'täydennä ' + ex.fill + '/3' : ''].filter(Boolean).join(' · ') + '</p>';
      }
      return h;
    },

    testi: function (L, p) {
      return '<h2 id="step-h">Oppitunnin testi: 10 kysymystä</h2><div id="quiz-root">' + quizStartHTML(L, p) + '</div>';
    },

    yhteenveto: function (L, p) {
      var s = p.self;
      var checks = ['Osaan ainakin 9/12 ilmausta.', 'Pystyn sanomaan yhden kokonaisen mallivastauksen ilman tekstiä.', 'Tarkistin testin ja ymmärrän virheeni.'];
      var h = '<h2 id="step-h">Oma arvio ja yhteenveto</h2>';
      h += '<div class="card"><fieldset style="border:0;padding:0;margin:0"><legend style="font-weight:700;color:var(--navy);margin-bottom:8px">Merkitse, mikä pitää paikkansa</legend>' +
        checks.map(function (c, i) {
          return '<label style="display:flex;gap:10px;align-items:flex-start;font-weight:400;min-height:44px;padding:6px 0"><input type="checkbox" data-selfcheck="' + i + '" style="width:22px;height:22px;flex:none;margin-top:2px"' + (s.checks.indexOf(i) >= 0 ? ' checked' : '') + '>' + esc(c) + '</label>';
        }).join('') + '</fieldset>' +
        '<div class="field" style="margin-top:12px"><label for="selfwords">Kaksi sanaa, joita haluat vielä harjoitella</label><input type="text" id="selfwords" value="' + esc(s.words) + '" lang="en"></div>' +
        '<fieldset style="border:0;padding:0;margin:0"><legend style="font-weight:700;margin-bottom:6px">Oma puhevarmuus nyt (1 = en osaa vielä, 5 = puhun melko itsenäisesti)</legend><div class="scale">' +
        [1, 2, 3, 4, 5].map(function (n) { return '<button type="button" class="btn" data-action="self-conf" data-v="' + n + '" aria-pressed="' + (s.conf === n ? 'true' : 'false') + '">' + n + '</button>'; }).join('') +
        '</div></fieldset></div>';
      h += '<div class="card soft"><h3>Tilanne</h3><p>Testin paras tulos: <strong>' + (p.quiz.best != null ? p.quiz.best + ' / 10' : 'ei vielä tehty') + '</strong>' + (p.quiz.attempts ? ' (' + p.quiz.attempts + ' yritystä)' : '') + '</p>' +
        (p.done ? '<p style="margin:0">' + statusPill(L.id) + '</p>' : '<button type="button" class="btn primary" data-action="mark-done">Merkitse oppitunti suoritetuksi</button><p class="small muted" style="margin:8px 0 0">Oppitunti merkitään suoritetuksi myös automaattisesti, kun teet sen testin loppuun.</p>') + '</div>';
      h += '<div class="card"><h3>Kertausrytmi</h3><p style="margin:0">Kertaa uusi sanasto seuraavana päivänä, kolmen päivän kuluttua ja viikon kuluttua. Tee lisäkertaus oppituntien 3, 6 ja 9 jälkeen. <a href="#/harjoittelu">Avaa harjoittelu</a>.</p></div>';
      h += '<div class="safety" role="note"><strong>Turvallisuus ja käytäntö:</strong> ' + esc(L.safety) + '</div>';
      return h;
    }
  };

  function richPron(t) {
    // /…/-merkinnät IPA-fontilla
    return esc(t).replace(/\/[^\/\s][^\/]*?\//g, function (m) { return '<span class="ipa" lang="en-fonipa">' + m + '</span>'; });
  }

  function vocabItemHTML(L, v, i, withLesson) {
    var key = vkey(L.id, i), bm = S.isBookmarked(key);
    return '<li class="vocab-item"><div class="top"><div class="grow"><div class="term" lang="en">' + esc(v.en) + '</div>' +
      '<div class="ipa" lang="en-fonipa">' + esc(v.ipa) + '</div><div class="fi fi-tr">' + esc(v.fi) + '</div>' +
      (withLesson ? '<div class="small muted">Oppitunti ' + L.id + '</div>' : '') + '</div>' +
      '<div class="row" style="flex:none;gap:6px">' + sayBtn(v.en, 'Kuuntele sana: ' + v.en) +
      '<button type="button" class="btn icon bookmark" data-action="bookmark" data-key="' + key + '" aria-pressed="' + bm + '" aria-label="Tallenna kerrattavaksi: ' + esc(v.en) + '">' + icon('bookmark') + '</button></div></div>' +
      '<div class="example">' + sayBtn(v.ex, 'Kuuntele esimerkkilause') + '<div><p class="en" lang="en">' + esc(v.ex) + '</p><p class="exfi">' + esc(v.exFi) + '</p></div></div></li>';
  }

  function listeningCardHTML(id, title, li, saved) {
    var h = '<div class="card" data-listen="' + id + '"><h3>' + esc(title) + '</h3>';
    h += '<div class="row" style="margin-bottom:12px">' + sayBtn(li.script, 'Kuuntele teksti', { script: true, wide: 'Kuuntele' }) + sayBtn(li.script, 'Kuuntele hitaasti', { script: true, slow: true, wide: 'Hitaasti' }) +
      '<button type="button" class="btn sm" data-action="stop" aria-label="Pysäytä ääni">' + icon('stop') + 'Pysäytä</button></div>';
    li.q.forEach(function (q, k) {
      h += '<div class="ex-item"><label for="' + id + '-q' + k + '">' + (k + 1) + '. ' + richFi(q) + '</label><input type="text" id="' + id + '-q' + k + '" autocomplete="off" data-lq="' + k + '">' +
        '<div class="fbslot" aria-live="polite"></div></div>';
    });
    h += '<div class="row" style="margin-top:12px"><button type="button" class="btn primary" data-action="check-listen">Tarkista vastaukset</button>' +
      '<button type="button" class="btn" data-action="show-script" aria-expanded="false">Näytä käsikirjoitus</button></div>' +
      '<div class="model" data-transcript hidden style="margin-top:12px"><span class="small muted">Käsikirjoitus (englanniksi):</span><p class="en" lang="en" style="margin:0">' + esc(li.script) + '</p></div>' +
      (saved ? '<p class="small muted" style="margin:10px 0 0">Aiemmin tehty: ' + saved + '/' + li.q.length + ' oikein (oma arvio).</p>' : '') + '</div>';
    return h;
  }

  /* ---------- Muistikortit ---------- */
  var flashState = {};
  function flashHTML(name, keys, dir) {
    if (!keys.length) return '<p class="muted">Ei kortteja tässä valinnassa.</p>';
    var st = flashState[name];
    if (!st || st.sig !== keys.join(',') + dir) st = flashState[name] = { sig: keys.join(',') + dir, keys: keys.slice(), i: 0, shown: false, dir: dir, known: 0 };
    return '<div data-flash="' + name + '">' + flashInner(st) + '</div>';
  }
  function flashInner(st) {
    if (st.i >= st.keys.length) {
      return '<div class="flash" role="status"><p class="front" style="font-size:1.15rem">Kortit käyty läpi!</p><p>Osasit ' + st.known + ' / ' + st.keys.length + '. Kortit, joita merkitsit harjoiteltaviksi, löytyvät Harjoittelu-sivulta.</p>' +
        '<button type="button" class="btn primary" data-action="flash-restart">Aloita alusta</button></div>';
    }
    var it = vocabByKey(st.keys[st.i]); var v = it.v;
    var frontEn = st.dir === 'en';
    var h = '<div class="flash"><div class="small muted">Kortti ' + (st.i + 1) + ' / ' + st.keys.length + ' · oppitunti ' + it.L.id + '</div>';
    h += '<p class="front"' + (frontEn ? ' lang="en"' : '') + '>' + esc(frontEn ? v.en : v.fi) + '</p>';
    h += '<p class="small muted" style="margin:0">' + (frontEn ? 'Mitä tämä tarkoittaa suomeksi?' : 'Sano englanniksi ääneen.') + '</p>';
    if (frontEn) h += '<div class="row" style="justify-content:center;margin-top:8px">' + sayBtn(v.en, 'Kuuntele: ' + v.en) + '</div>';
    if (st.shown) {
      h += '<div class="back" aria-live="polite"><p class="' + (frontEn ? '' : 'en') + '" style="font-size:1.15rem;font-weight:700;margin-bottom:2px"' + (frontEn ? '' : ' lang="en"') + '>' + esc(frontEn ? v.fi : v.en) + '</p>' +
        '<p class="ipa" lang="en-fonipa" style="margin-bottom:6px">' + esc(v.ipa) + '</p><p class="small" lang="en">' + esc(v.ex) + '</p>' +
        (frontEn ? '' : '<div class="row" style="justify-content:center">' + sayBtn(v.en, 'Kuuntele: ' + v.en) + '</div>') +
        '<div class="choice-row" style="margin-top:12px"><button type="button" class="btn" data-action="flash-again">Harjoittelen vielä</button><button type="button" class="btn primary" data-action="flash-ok">' + icon('check') + 'Osasin</button></div></div>';
    } else {
      h += '<button type="button" class="btn primary block" style="margin-top:16px" data-action="flash-show">Näytä vastaus</button>';
    }
    return h + '</div>';
  }

  /* ---------- Testi ---------- */
  function quizStartHTML(L, p) {
    var q = p.quiz;
    return '<div class="card"><p>Valitse jokaiseen kysymykseen yksi vastaus. Saat palautteen ja selityksen heti vastattuasi. Tavoite on vähintään 7/10 – se ohjaa harjoittelua, mutta ei ole kliinisen osaamisen arviointi.</p>' +
      (q.attempts ? '<p>Paras tulos: <strong>' + q.best + ' / 10</strong> · Viimeisin: ' + q.last + ' / 10 · Yrityksiä: ' + q.attempts + '</p>' : '<p class="muted">Et ole vielä tehnyt tätä testiä.</p>') +
      '<button type="button" class="btn primary big" data-action="quiz-start">' + (q.attempts ? 'Tee testi uudelleen' : 'Aloita testi') + '</button></div>';
  }
  function quizQHTML(L) {
    var st = ui.quiz, i = st.i, q = L.quiz[i];
    var h = '<div class="card"><div class="row" style="justify-content:space-between;margin-bottom:8px"><span class="small muted">Kysymys ' + (i + 1) + ' / 10</span><span class="small muted">Oikein: ' + st.correct + '</span></div>' +
      '<div class="progress" style="margin-bottom:16px" aria-hidden="true"><div style="width:' + (i / 10 * 100) + '%"></div></div>' +
      '<p class="quiz-q" id="qq" tabindex="-1">' + richFi(q.q) + '</p><div class="options" role="group" aria-labelledby="qq">';
    var answered = st.answers[i] != null;
    q.o.forEach(function (o, j) {
      var cls = 'option', mark = '';
      if (answered) {
        if (j === q.a) { cls += ' correct'; mark = '<span class="mark">✓ Oikea vastaus</span>'; }
        else if (j === st.answers[i]) { cls += ' wrong'; mark = '<span class="mark">✗ Valintasi</span>'; }
      }
      h += '<button type="button" class="' + cls + '" data-action="quiz-answer" data-j="' + j + '"' + (answered ? ' disabled' : '') + '><span class="letter" aria-hidden="true">' + 'ABCD'[j] + '</span><span' + (q.ol === 'en' ? ' lang="en"' : '') + '>' + esc(o) + '</span>' + mark + '</button>';
    });
    h += '</div>';
    if (answered) {
      var ok = st.answers[i] === q.a;
      h += '<div class="fb ' + (ok ? 'ok' : 'bad') + '" role="status"><strong>' + (ok ? 'Oikein!' : 'Ei aivan. Oikea vastaus on ' + 'ABCD'[q.a] + ') ' + esc(q.o[q.a]) + '.') + '</strong>' + richFi(q.x) + '</div>' +
        '<button type="button" class="btn primary block" style="margin-top:14px" data-action="quiz-next">' + (i < 9 ? 'Seuraava kysymys' : 'Näytä tulos') + icon('arrowR') + '</button>';
    }
    return h + '</div>';
  }
  function quizResultHTML(L, p) {
    var st = ui.quiz, score = st.correct;
    var r = 52, c = 2 * Math.PI * r, off = c * (1 - score / 10);
    var h = '<div class="card" style="text-align:center"><svg class="result-ring" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="' + r + '" fill="none" stroke="#D3EEEE" stroke-width="12"/>' +
      '<circle cx="60" cy="60" r="' + r + '" fill="none" stroke="#087F8C" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 60 60)"/>' +
      '<text x="60" y="68" text-anchor="middle" font-size="26" font-weight="800" fill="#17324D">' + score + '/10</text></svg>' +
      '<h3 id="quiz-result" tabindex="-1">Tuloksesi: ' + score + ' / 10</h3>' +
      '<p>' + (score >= 9 ? 'Erinomaista! Hallitset tämän oppitunnin sisällön hyvin.' : score >= 7 ? 'Hienoa – saavutit harjoittelutavoitteen 7/10.' : 'Hyvä alku! Kertaa alla olevat kohdat ja yritä uudelleen, kun olet valmis. Tavoite on 7/10.') + '</p>' +
      '<p class="small muted">Paras tulos: ' + p.quiz.best + ' / 10 · Yrityksiä: ' + p.quiz.attempts + '</p></div>';
    var wrong = L.quiz.map(function (q, i) { return { q: q, i: i }; }).filter(function (x) { return st.answers[x.i] !== x.q.a; });
    if (wrong.length) {
      h += '<div class="card"><h3>Kertaa nämä</h3>' + wrong.map(function (x) {
        return '<div class="ex-item"><p class="q">' + (x.i + 1) + '. ' + richFi(x.q.q) + '</p><p class="small" style="margin:0">Valitsit: <span' + (x.q.ol === 'en' ? ' lang="en"' : '') + '>' + esc(x.q.o[st.answers[x.i]]) + '</span><br>Oikein: <strong' + (x.q.ol === 'en' ? ' lang="en"' : '') + '>' + esc(x.q.o[x.q.a]) + '</strong></p><p class="small muted" style="margin:4px 0 0">' + richFi(x.q.x) + '</p></div>';
      }).join('') + '<p class="small muted" style="margin-top:10px">Näihin liittyvät sanat lisättiin Harjoittelu-sivun kerrattaviin.</p></div>';
    }
    h += '<div class="choice-row"><button type="button" class="btn" data-action="quiz-start">Yritä uudelleen</button><a class="btn primary" href="#/oppitunti/' + L.id + '/yhteenveto">Yhteenvetoon' + icon('arrowR') + '</a></div>';
    return h;
  }
  function vocabKeysForQuestion(L, q) {
    var txt = q.q + ' ' + q.o[q.a];
    var keys = [];
    L.vocab.forEach(function (v, i) {
      if (txt.indexOf('"' + v.en + '"') >= 0 || txt.indexOf('"' + v.fi + '"') >= 0 || q.o[q.a] === v.en || q.o[q.a] === v.fi) keys.push(vkey(L.id, i));
    });
    if (!keys.length) {
      // kertauskysymys aiemmasta oppitunnista
      allVocab().forEach(function (it) { if (txt.indexOf('"' + it.v.en + '"') >= 0) keys.push(it.key); });
    }
    return keys;
  }

  /* ---------- Sanasto-sivu ---------- */
  var vocabFilter = { q: '', lesson: '', saved: false };
  function viewVocab() {
    var h = '<h1>Sanasto</h1><p class="muted">Kaikki ' + allVocab().length + ' ilmausta amerikanenglannin ääntämisohjeineen. Hae englanniksi tai suomeksi.</p>';
    h += audioNotice();
    h += '<div class="toolbar"><div><label for="vq">Hae sanastosta</label><input type="search" id="vq" value="' + esc(vocabFilter.q) + '" placeholder="esim. käsineet tai gloves" autocomplete="off"></div>' +
      '<div><label for="vl">Oppitunti</label><select id="vl"><option value="">Kaikki oppitunnit</option>' + LESSONS.map(function (L) { return '<option value="' + L.id + '"' + (String(L.id) === vocabFilter.lesson ? ' selected' : '') + '>' + L.id + '. ' + esc(L.title) + '</option>'; }).join('') + '</select></div>' +
      '<div><button type="button" class="btn" data-action="vocab-saved" aria-pressed="' + vocabFilter.saved + '">' + icon('bookmark') + 'Vain tallennetut</button></div></div>';
    h += '<p class="small muted" id="vcount" aria-live="polite"></p><ul class="vocab-list" id="vresults"></ul>';
    return h;
  }
  function renderVocabResults() {
    var q = fold(vocabFilter.q.trim());
    var res = allVocab().filter(function (it) {
      if (vocabFilter.lesson && String(it.L.id) !== vocabFilter.lesson) return false;
      if (vocabFilter.saved && !S.isBookmarked(it.key)) return false;
      if (!q) return true;
      return fold(it.v.en + ' ' + it.v.fi + ' ' + it.v.ex + ' ' + it.v.exFi).indexOf(q) >= 0;
    });
    $('#vcount').textContent = res.length ? res.length + ' osumaa' : 'Ei osumia. Kokeile toista hakusanaa.';
    $('#vresults').innerHTML = res.map(function (it) { return vocabItemHTML(it.L, it.v, +it.key.split('-')[1], true); }).join('');
  }

  /* ---------- Harjoittelu ---------- */
  var practiceSel = { src: 'practice', dir: 'fi' };
  function practiceKeys() {
    var d = S.data;
    if (practiceSel.src === 'practice') return d.practice.slice();
    if (practiceSel.src === 'saved') return d.bookmarks.slice();
    if (practiceSel.src === 'started') {
      var ks = [];
      LESSONS.forEach(function (L) { if (lessonStatus(L.id) !== 'new') L.vocab.forEach(function (v, i) { ks.push(vkey(L.id, i)); }); });
      return ks;
    }
    var L = lessonById(+practiceSel.src);
    return L ? L.vocab.map(function (v, i) { return vkey(L.id, i); }) : [];
  }
  function viewPractice() {
    var d = S.data;
    var h = '<h1>Harjoittelu</h1><p class="muted">Kertaa sanoja muistikorteilla. Merkitse ”Harjoittelen vielä”, niin sana jää kerrattavien listalle.</p>' + audioNotice();
    h += '<div class="card"><div class="grid-2"><div><label for="psrc">Mitä harjoitellaan?</label><select id="psrc">' +
      '<option value="practice"' + (practiceSel.src === 'practice' ? ' selected' : '') + '>Kerrattavat sanat (' + d.practice.length + ')</option>' +
      '<option value="saved"' + (practiceSel.src === 'saved' ? ' selected' : '') + '>Tallennetut sanat (' + d.bookmarks.length + ')</option>' +
      '<option value="started"' + (practiceSel.src === 'started' ? ' selected' : '') + '>Kaikki aloitettujen oppituntien sanat</option>' +
      LESSONS.map(function (L) { return '<option value="' + L.id + '"' + (practiceSel.src === String(L.id) ? ' selected' : '') + '>Oppitunti ' + L.id + ': ' + esc(L.title) + '</option>'; }).join('') +
      '</select></div><div><label for="pdir">Suunta</label><select id="pdir"><option value="fi"' + (practiceSel.dir === 'fi' ? ' selected' : '') + '>Suomi → englanti</option><option value="en"' + (practiceSel.dir === 'en' ? ' selected' : '') + '>Englanti → suomi</option></select></div></div></div>';
    var keys = practiceKeys();
    if (!keys.length) {
      h += '<div class="card soft"><p style="margin:0">' + (practiceSel.src === 'practice' ? 'Kerrattavia sanoja ei vielä ole. Niitä kertyy, kun vastaat testissä väärin tai merkitset kortin kohtaan ”Harjoittelen vielä”.' :
        practiceSel.src === 'saved' ? 'Et ole vielä tallentanut sanoja. Tallenna sana kirjanmerkkipainikkeella sanastossa.' : 'Aloita ensin jokin oppitunti.') + ' Voit myös valita minkä tahansa oppitunnin yläpuolelta.</p></div>';
    } else {
      h += '<div id="practice-flash">' + flashHTML('practice', keys, practiceSel.dir) + '</div>';
    }
    h += '<h2 style="margin-top:28px">Kertauksen pikaopas</h2><p class="muted">Osastokäynnin turvallinen kielimalli. Kuuntele ja sano ääneen ennen seuraavaa harjoitteluvuoroa.</p><ul class="vocab-list">' +
      C.guide.map(function (g) {
        return '<li class="vocab-item"><div class="top"><div class="grow"><div class="small" style="font-weight:700;color:var(--teal-dark)">' + esc(g.label) + '</div><p class="en" lang="en" style="margin:0">' + esc(g.en) + '</p></div>' + sayBtn(g.en, 'Kuuntele: ' + g.label) + '</div></li>';
      }).join('') + '</ul>';
    h += '<div class="card" style="margin-top:16px"><h3>Kertausmenetelmä 5–10 minuuttia päivässä</h3><ol><li>Valitse viisi aiemmin opittua ilmaisua.</li><li>Peitä niiden suomennokset ja kerro merkitykset.</li><li>Peitä englanninkieliset ilmaukset ja tuota ne suomen perusteella.</li><li>Lue yksi keskustelu ääneen.</li><li>Kertaa virheet seuraavana päivänä.</li></ol>' +
      '<p class="small muted" style="margin:0">Kertausrytmi: seuraavana päivänä, kolmen päivän kuluttua ja viikon kuluttua. Lisäkertaus oppituntien 3, 6 ja 9 jälkeen.</p></div>';
    return h;
  }

  /* ---------- Arviointikone (alku- ja lopputesti) ---------- */
  // item: {id, kind:'mc'|'text'|'listen', q, o, a, keys, model, pts, partial, audio, lang}
  function testItemHTML(it, n) {
    var h = '<div class="ex-item" data-item="' + it.id + '"><p class="q"><strong>' + n + '.</strong> ' + richFi(it.q) + '</p>';
    if (it.audio) h += '<div class="row" style="margin-bottom:8px">' + sayBtn(it.audio, 'Kuuntele lause', { wide: 'Kuuntele', script: it.script }) + sayBtn(it.audio, 'Kuuntele hitaasti', { wide: 'Hitaasti', slow: true, script: it.script }) + '</div>';
    if (it.kind === 'mc') {
      h += '<div class="options" role="radiogroup" aria-label="Vastausvaihtoehdot">' + it.o.map(function (o, j) {
        return '<label class="option" style="font-weight:400"><input type="radio" name="' + it.id + '" value="' + j + '" style="width:20px;height:20px;flex:none"><span class="letter" aria-hidden="true">' + 'ABC'[j] + '</span>' + esc(o) + '</label>';
      }).join('') + '</div>';
    } else if (it.kind === 'listenblock') {
      h = '<div class="ex-item" data-item="' + it.id + '"><p class="q"><strong>' + esc(it.title) + '</strong> – ' + esc(it.q) + '</p><div class="row" style="margin-bottom:8px">' +
        sayBtn(it.audio, 'Kuuntele teksti', { wide: 'Kuuntele', script: true }) + sayBtn(it.audio, 'Kuuntele hitaasti', { wide: 'Hitaasti', slow: true, script: true }) +
        '<button type="button" class="btn sm" data-action="show-script-t" aria-expanded="false">Näytä käsikirjoitus</button></div><div class="model" data-transcript hidden><p class="en" lang="en" style="margin:0">' + esc(it.audio) + '</p></div>';
    } else {
      h += '<label class="sr-only" for="in-' + it.id + '">Vastaus</label><input type="text" id="in-' + it.id + '"' + (it.lang === 'en' ? ' lang="en" autocapitalize="off" spellcheck="false"' : '') + ' autocomplete="off">';
    }
    return h + '<div class="fbslot" aria-live="polite"></div></div>';
  }
  function gradeItems(items, root, results) {
    items.forEach(function (it) {
      if (it.kind === 'listenblock') return;
      var el = $('[data-item="' + it.id + '"]', root), slot = $('.fbslot', el);
      if (it.kind === 'mc') {
        var sel = $('input[name="' + it.id + '"]:checked', el);
        var v = sel ? +sel.value : null;
        var ok = v === it.a;
        results[it.id] = ok ? it.pts : 0;
        $$('.option', el).forEach(function (o, j) { o.classList.toggle('correct', j === it.a); o.classList.toggle('wrong', j === v && !ok); });
        $$('input', el).forEach(function (x) { x.disabled = true; });
        slot.innerHTML = '<div class="fb ' + (ok ? 'ok' : 'bad') + '"><strong>' + (ok ? 'Oikein' : (v == null ? 'Ei vastausta.' : 'Ei aivan.') + ' Oikea vastaus: ' + 'ABC'[it.a] + ') ' + esc(it.o[it.a])) + '</strong></div>';
        return;
      }
      var inp = $('input', el), val = inp.value;
      inp.readOnly = true;
      if (it.keys && matches(val, it.keys)) {
        results[it.id] = it.pts;
        slot.innerHTML = '<div class="fb ok"><strong>Oikein</strong>' + (it.model ? 'Malli: <span' + (it.lang === 'en' ? ' lang="en"' : '') + '>' + esc(it.model) + '</span>' : '') + '</div>';
      } else {
        results[it.id] = null; // odottaa omaa arviota
        var opts = it.partial ? [[it.pts, 'Merkitykseltään oikein (' + it.pts + ' p)'], [it.partial, 'Osittain (' + it.partial + ' p)'], [0, 'Ei vielä (0 p)']] : [[it.pts, 'Merkitykseltään oikein'], [0, 'Väärin tai puuttuu']];
        slot.innerHTML = '<div class="fb neutral"><strong>' + (val.trim() ? 'Vertaa vastaustasi malliin' : 'Et kirjoittanut vastausta') + '</strong>Mallivastaus: <span' + (it.lang === 'en' ? ' lang="en"' : '') + ' class="en">' + esc(it.model) + '</span>' +
          '<div class="choice-row" style="margin-top:8px" role="group" aria-label="Oma arvio">' + opts.map(function (o) {
            return '<button type="button" class="btn sm" data-action="selfmark" data-id="' + it.id + '" data-v="' + o[0] + '" aria-pressed="false">' + esc(o[1]) + '</button>';
          }).join('') + '</div></div>';
      }
    });
  }

  function pretestItems() {
    return C.pretest.items.map(function (x, i) {
      var it = { id: 'p' + i, q: x.q, pts: 1 };
      if (x.t === 'mc') { it.kind = 'mc'; it.o = x.o; it.a = x.a; }
      else if (x.t === 'typeEn') { it.kind = 'text'; it.keys = x.key; it.model = x.key[0]; it.lang = 'en'; }
      else { it.kind = 'text'; it.keys = x.key; it.model = x.key[0]; it.audio = x.audio; it.lang = 'fi'; }
      return it;
    });
  }
  function viewPretest() {
    var d = S.data.pretest;
    var h = '<h1>Alkutesti</h1><p>Tee alkutesti ennen ensimmäistä oppituntia ilman sanastoa. Jokainen kysymys on yhden pisteen arvoinen. Kuuntelutehtävissä (9–10) kuuntele lause katsomatta tekstiä.</p>' + audioNotice();
    if (d) h += '<div class="card soft"><p style="margin:0">Teit alkutestin ' + new Date(d.date).toLocaleDateString('fi-FI') + ': <strong>' + d.score + ' / 10</strong>, puhevarmuus ' + (d.conf || '–') + ' / 5. Voit tehdä sen uudelleen, mutta uusi tulos korvaa vanhan.</p></div>';
    h += '<form id="test-form" class="card" novalidate data-test="pre"><h2>Kirjallinen osa</h2>' + pretestItems().map(function (it, i) { return testItemHTML(it, i + 1); }).join('') + '</form>';
    h += '<div class="card"><h2>Puhumisen lähtötaso</h2><p>Sano ääneen ilman mallia:</p><ol>' + C.pretest.speaking.map(function (s, i) {
      return '<li style="margin-bottom:8px">' + esc(s) + ' <details class="reveal" style="margin-top:6px"><summary>Näytä malli</summary><div><p class="en" lang="en" style="margin:0 0 6px">' + esc(C.pretest.speakingModels[i]) + '</p>' + sayBtn(C.pretest.speakingModels[i], 'Kuuntele malli') + '</div></details></li>';
    }).join('') + '</ol>' + confScaleHTML('pre-conf', 'Arvioi oma varmuutesi (1 = en osaa vielä, 5 = puhun melko itsenäisesti)') + '</div>';
    h += '<div class="card"><button type="button" class="btn primary big block" data-action="test-check" data-test="pre">Tarkista vastaukset</button><div id="test-total" aria-live="polite" style="margin-top:12px"></div><p class="small muted" style="margin:10px 0 0">' + esc(C.pretest.note) + '</p></div>';
    return h;
  }
  function confScaleHTML(name, label) {
    return '<fieldset style="border:0;padding:0;margin:12px 0 0"><legend style="font-weight:700;margin-bottom:6px">' + esc(label) + '</legend><div class="scale" data-conf="' + name + '">' +
      [1, 2, 3, 4, 5].map(function (n) { return '<button type="button" class="btn" data-action="conf" data-name="' + name + '" data-v="' + n + '" aria-pressed="false">' + n + '</button>'; }).join('') + '</div></fieldset>';
  }

  function finalItems() {
    var F = C.final, items = [];
    F.partA.forEach(function (x, i) { items.push({ id: 'a' + i, kind: 'text', q: 'Käännä suomeksi: "' + x.en + '".', keys: x.key, model: x.key[0], pts: 3, lang: 'fi', part: 'A' }); });
    F.listening.forEach(function (li, k) {
      items.push({ id: 'b' + k, kind: 'listenblock', title: 'Lopputestin kuuntelu ' + (k + 1), q: 'Kuuntele ja vastaa kysymyksiin. Älä katso tekstiä vastatessasi.', audio: li.script, part: 'B' });
      li.q.forEach(function (q, j) { items.push({ id: 'b' + k + j, kind: 'text', q: q, keys: [li.a[j]], model: li.a[j], pts: 5, lang: 'fi', part: 'B' }); });
    });
    F.partC.forEach(function (x, i) { items.push({ id: 'c' + i, kind: 'text', q: x.q, keys: [x.model], model: x.model, pts: 5, partial: 3, lang: 'en', part: 'C' }); });
    return items;
  }
  function viewFinal() {
    var F = C.final, d = S.data.final, items = finalItems();
    var h = '<h1>Lopputesti</h1><p>Tee testi vasta oppitunnin 12 jälkeen. Kirjallisesta osasta saa enintään 80 pistettä ja itsearvioitavasta puhenäytöstä 20 pistettä. Tavoite on 80/100. Testi mittaa englannin kielen valmiuksia; sen perusteella ei voi saada klinikkaharjoittelun hyväksyntää eikä lupaa toimia itsenäisesti.</p>' + audioNotice();
    if (d) h += '<div class="card soft"><p style="margin:0">Edellinen tulos ' + new Date(d.date).toLocaleDateString('fi-FI') + ': <strong>' + d.total + ' / 100</strong> (kirjallinen ' + d.written + '/80, puhe ' + d.speaking + '/20).</p></div>';
    var n = 0;
    function part(code, title, sub) {
      return '<div class="card"><h2>' + title + '</h2><p class="small muted">' + sub + '</p>' + items.filter(function (it) { return it.part === code; }).map(function (it) {
        if (it.kind === 'listenblock') return testItemHTML(it, 0);
        n++; return testItemHTML(it, n);
      }).join('') + '</div>';
    }
    h += '<form id="test-form" novalidate data-test="final">' +
      part('A', 'Osa A: Sanasto ja ilmaisut (10 × 3 p = 30 p)', 'Käännä suomeksi.') +
      part('B', 'Osa B: Kuullun ymmärtäminen (6 × 5 p = 30 p)', 'Kuuntele kaksi uutta lyhyttä englanninkielistä tilannetta. Käsikirjoitus on saatavilla, mutta yritä ensin ilman sitä.') +
      part('C', 'Osa C: Tilanteisiin vastaaminen (4 × 5 p = 20 p)', 'Kirjoita englanniksi. Luonnolliset vaihtoehtoiset lauseet hyväksytään, jos merkitys on oikea ja toimintaviesti turvallinen.') + '</form>';
    h += '<div class="card"><h2>Osa D: Puhumisen itsearviointi (0–20 p)</h2><p>Tee 45–60 sekunnin potilassimulaatio ääneen. Puhu mahdollisimman paljon ilman tekstiä. Arvioi neljä osa-aluetta: 0 = ei vielä onnistu; 3 = pääosin onnistuu mallin avulla; 5 = onnistuu selkeästi itsenäisesti.</p>' +
      F.partD.map(function (t, i) {
        return '<fieldset style="border:0;padding:0;margin:0 0 14px"><legend style="font-weight:600;margin-bottom:6px">' + (i + 1) + '. ' + esc(t) + ' (0–5)</legend><div class="scale">' +
          [0, 1, 2, 3, 4, 5].map(function (v) { return '<button type="button" class="btn" data-action="partd" data-i="' + i + '" data-v="' + v + '" aria-pressed="false">' + v + '</button>'; }).join('') + '</div></fieldset>';
      }).join('') + confScaleHTML('final-conf', 'Oma puhevarmuus nyt (1–5)') + '</div>';
    h += '<div class="card"><button type="button" class="btn primary big block" data-action="test-check" data-test="final">Tarkista vastaukset</button><div id="test-total" aria-live="polite" style="margin-top:12px"></div><p class="small muted" style="margin:10px 0 0">' + esc(F.scoring) + '</p></div>';
    return h;
  }
  function updateTestTotal() {
    var t = ui.test; if (!t || !t.checked) return;
    var pending = Object.keys(t.results).filter(function (k) { return t.results[k] === null; }).length;
    var written = Object.keys(t.results).reduce(function (s, k) { return s + (t.results[k] || 0); }, 0);
    var box = $('#test-total'); var h = '';
    if (t.kind === 'pre') {
      h = '<p class="score">Pisteet: ' + written + ' / 10</p>';
      if (pending) h += '<p class="small">Arvioi vielä ' + pending + ' vastausta mallia vasten.</p>';
      else if (!t.conf) h += '<p class="small">Valitse vielä puhevarmuutesi 1–5.</p>';
      else h += '<button type="button" class="btn primary" data-action="test-save">Tallenna tulos</button>';
    } else {
      var sp = t.partd.reduce(function (s, v) { return s + (v || 0); }, 0);
      var missingD = t.partd.filter(function (v) { return v == null; }).length;
      h = '<p class="score">Kirjallinen: ' + written + ' / 80 · Puhe: ' + sp + ' / 20 · Yhteensä: ' + (written + sp) + ' / 100</p>';
      if (pending) h += '<p class="small">Arvioi vielä ' + pending + ' vastausta mallia vasten.</p>';
      else if (missingD) h += '<p class="small">Arvioi vielä osan D ' + missingD + ' kohtaa.</p>';
      else if (!t.conf) h += '<p class="small">Valitse vielä puhevarmuutesi 1–5.</p>';
      else h += '<button type="button" class="btn primary" data-action="test-save">Tallenna tulos</button>';
    }
    box.innerHTML = h;
  }

  /* ---------- Edistyminen ---------- */
  function viewProgress() {
    var d = S.data, done = doneCount();
    var bests = LESSONS.map(function (L) { var p = d.lessons[String(L.id)]; return p && p.quiz.best != null ? p.quiz.best : null; }).filter(function (x) { return x != null; });
    var avg = bests.length ? (bests.reduce(function (a, b) { return a + b; }, 0) / bests.length).toFixed(1).replace('.', ',') : '–';
    var lastConf = null;
    LESSONS.forEach(function (L) { var p = d.lessons[String(L.id)]; if (p && p.self.conf) lastConf = p.self.conf; });
    if (d.final && d.final.conf) lastConf = d.final.conf;
    var h = '<h1>Edistyminen</h1>';
    if (!S.available()) h += '<div class="notice" role="alert"><strong>Tallennus ei ole käytössä.</strong> Selain estää paikallisen tallennuksen (esim. yksityinen tila). Voit opiskella normaalisti, mutta edistyminen katoaa, kun suljet sivun.</div>';
    h += '<div class="grid-2">' +
      '<div class="card"><h3>Oppitunnit</h3><p class="score">' + done + ' / 12 suoritettu</p><div class="progress" role="progressbar" aria-label="Suoritetut oppitunnit" aria-valuemin="0" aria-valuemax="12" aria-valuenow="' + done + '"><div style="width:' + (done / 12 * 100) + '%"></div></div></div>' +
      '<div class="card"><h3>Testit</h3><p class="score" style="margin:0">Parhaiden tulosten keskiarvo: ' + avg + (bests.length ? ' / 10' : '') + '</p><p class="small muted" style="margin:0">' + bests.length + ' oppitunnin testi tehty</p></div>' +
      '<div class="card"><h3>Alku- ja lopputesti</h3><p style="margin:0">Alkutesti: <strong>' + (d.pretest ? d.pretest.score + ' / 10' : 'ei tehty') + '</strong><br>Lopputesti: <strong>' + (d.final ? d.final.total + ' / 100' : 'ei tehty') + '</strong></p></div>' +
      '<div class="card"><h3>Puhevarmuus</h3><p style="margin:0">Alussa: <strong>' + (d.pretest && d.pretest.conf ? d.pretest.conf + ' / 5' : '–') + '</strong> → nyt: <strong>' + (lastConf ? lastConf + ' / 5' : '–') + '</strong></p><p class="small muted" style="margin:0">Oma arvio alkutestistä, oppituntien yhteenvedoista ja lopputestistä.</p></div></div>';
    h += '<div class="card"><h2>Oppitunneittain</h2><div class="table-wrap"><table><thead><tr><th scope="col">Oppitunti</th><th scope="col">Tila</th><th scope="col">Testi</th><th scope="col">Varmuus</th></tr></thead><tbody>' +
      LESSONS.map(function (L) {
        var p = d.lessons[String(L.id)];
        return '<tr><td><a href="#/oppitunti/' + L.id + '/aloitus">' + L.id + '. ' + esc(L.title) + '</a></td><td>' + statusPill(L.id) + '</td><td>' + (p && p.quiz.attempts ? p.quiz.best + '/10 <span class="small muted">(' + p.quiz.attempts + '×)</span>' : '–') + '</td><td>' + (p && p.self.conf ? p.self.conf + '/5' : '–') + '</td></tr>';
      }).join('') + '</tbody></table></div><p class="small muted" style="margin:10px 0 0">Tallennettuja sanoja: ' + d.bookmarks.length + ' · Kerrattavia sanoja: ' + d.practice.length + '</p></div>';
    // Ääniasetukset
    h += '<div class="card" id="audio-settings"><h2>Ääniasetukset</h2>' + audioNotice() + audioSettingsHTML() + '</div>';
    // Tallennus
    h += '<div class="card"><h2>Tietojen tallennus</h2><p>Edistymisesi tallennetaan <strong>vain tähän selaimeen tällä laitteella</strong> (selaimen localStorage). Tietoja ei lähetetä minnekään, eikä sivustolla ole käyttäjätilejä tai seurantaa. Tiedot voivat kadota, jos tyhjennät selaimen tiedot, käytät yksityistä selausta tai vaihdat laitetta.</p>' +
      '<p>Voit siirtää edistymisen toiselle laitteelle varmuuskopiotiedostona.</p><div class="row"><button type="button" class="btn" data-action="export">Lataa varmuuskopio</button>' +
      '<label class="btn" for="import-file" style="cursor:pointer">Palauta varmuuskopio</label><input type="file" id="import-file" accept="application/json,.json" class="sr-only"></div>' +
      '<hr style="border:0;border-top:1px solid var(--line);margin:16px 0"><button type="button" class="btn danger" data-action="reset">Nollaa kaikki edistyminen</button></div>';
    return h;
  }
  function audioSettingsHTML() {
    var a = S.data.audio, vs = SP.voices;
    var h = '<p class="small muted">Ääntämismalli on amerikanenglanti (en-US). ' + (SP.currentVoiceName() ? 'Käytössä: <span lang="en">' + esc(SP.currentVoiceName()) + '</span>.' : '') + '</p>';
    if (vs.length > 1) {
      h += '<div class="field"><label for="voice">Ääni (vain en-US)</label><select id="voice">' + vs.map(function (v) {
        var inf = SP.voiceInfo(v), tags = [];
        if (inf.natural) tags.push('luonnollinen');
        if (inf.female) tags.push('nainen');
        return '<option value="' + esc(v.voiceURI) + '"' + (a.voiceURI === v.voiceURI ? ' selected' : '') + '>' + esc(v.name) + (tags.length ? ' – ' + tags.join(', ') : '') + '</option>';
      }).join('') + '</select><div class="hint">Sivusto valitsee oletuksena luonnollisimman naisäänen. Kuuntelutehtävissä toinen puhuja käyttää toista en-US-ääntä, jos sellainen on saatavilla.</div></div>';
    }
    h += '<fieldset style="border:0;padding:0;margin:0 0 12px"><legend style="font-weight:700;margin-bottom:6px">Puhenopeus</legend><div class="choice-row">' +
      [[0.7, 'Hidas'], [0.9, 'Normaali'], [1, 'Nopea']].map(function (r) { return '<button type="button" class="btn sm" data-action="rate" data-v="' + r[0] + '" aria-pressed="' + (Math.abs(a.rate - r[0]) < 0.01) + '">' + r[1] + '</button>'; }).join('') + '</div></fieldset>';
    h += '<div class="row">' + sayBtn('Good morning. My name is Sadan. I am a biomedical laboratory science student at Metropolia.', 'Testaa ääni', { wide: 'Testaa ääni' }) + '</div>';
    h += '<details class="reveal" style="margin-top:12px"><summary>Kuulostaako ääni koneelliselta?</summary><div class="small">' +
      '<p>Ääni tulee laitteen omasta puhesynteesistä, joten laatu riippuu laitteesta ja selaimesta.</p><ul>' +
      '<li><strong>Android:</strong> Asetukset → Järjestelmä → Kielet → Tekstistä puheeksi → Googlen puhepalvelut (rataskuvake) → Asenna äänidata → englanti (Yhdysvallat). Valitse siellä naisääni ja lataa se. Käynnistä Chrome uudelleen.</li>' +
      '<li><strong>Windows-tietokone:</strong> Microsoft Edge -selaimessa on erittäin luonnolliset äänet (esim. <span lang="en">Aria, Jenny, Ava</span> – merkintä ”luonnollinen”).</li>' +
      '<li><strong>iPhone/Mac:</strong> Asetukset → Käyttöapu → Puhuttu sisältö → Äänet → englanti → valitse ja lataa ”Enhanced” tai ”Premium” -naisääni (esim. <span lang="en">Samantha, Ava</span>).</li>' +
      '</ul><p style="margin:0">Valitse sen jälkeen ääni yllä olevasta valikosta. Normaali nopeus kuulostaa yleensä luonnollisemmalta kuin hidas.</p></div></details>';
    return h;
  }

  function viewAbout() {
    var h = '<h1>Tietoa kurssista</h1>';
    h += '<div class="card"><p><strong>Sadan\'s Medical English</strong> on itsenäisen kielenopiskelun harjoitussivusto Metropolia ammattikorkeakoulun bioanalytiikan opiskelijalle Sadanille. Sisältö perustuu työkirjaan <em>Sairaalan englanti bioanalyytikolle</em> (12 oppituntia, marraskuu 2026).</p>' +
      '<p>Opetuskieli on suomi, harjoiteltava kieli englanti. Ääntämismalli on amerikanenglanti (en-US).</p>' +
      '<p style="margin:0">Sivusto ei ole Metropolian tai HUSin virallinen palvelu, eikä niiden logoja käytetä.</p></div>';
    h += '<div class="safety" role="note" style="margin-bottom:16px"><strong>Mitä kurssi ei tee:</strong> Oppitunnit harjoittavat viestintää eivätkä opeta itsenäistä neulan käsittelyä, näytteenottotekniikkaa tai tutkimustulosten tulkintaa. Potilaan tunnistaminen, näytteen ottaminen, mahdollinen poikkeama ja oiretilanteet noudattavat aina ajantasaista ohjausta ja organisaation menettelyohjeita. Jos potilas voi huonosti tai tunnistustiedoissa on ristiriita, pysäytä tilanne ja toimi todellisen työyksikön ohjeiden mukaan. Kaikki potilaat ja keskustelut ovat keksittyjä.</div>';
    h += '<div class="card"><h2>HUSin julkiset lähteet</h2><p class="small muted">Työkirjan laatija on tarkistanut lähteet marraskuussa 2026. Tarkista ohjeiden voimassaolo ennen todellista näytteenottoa.</p><ul>' +
      C.sources.map(function (s) { return '<li style="margin-bottom:8px"><a href="' + esc(s.url) + '" rel="noopener" target="_blank">' + esc(s.title) + '</a><br><span class="small muted">' + esc(s.desc) + '</span></li>'; }).join('') + '</ul></div>';
    h += '<div class="card"><h2>Ääni ja selain</h2><p style="margin:0">Ääni tuotetaan laitteen omalla puhesynteesillä (Web Speech API). Ääni ei vaadi tiliä eikä maksua, mutta sen saatavuus ja laatu riippuvat selaimesta ja laitteeseen asennetuista äänistä. Ääni ei arvioi ääntämistäsi.</p></div>';
    return h;
  }
  function viewNotFound() { return '<h1>Sivua ei löytynyt</h1><p>Osoitetta ei löytynyt. <a href="#/">Palaa etusivulle</a>.</p>'; }

  /* ================= Reititys ================= */
  function route() {
    SP.stop();
    var path = (location.hash || '#/').slice(1) || '/';
    var parts = path.split('/').filter(Boolean);
    var html, title = "Sadan's Medical English", after = null;
    ui = {};
    if (!parts.length) { html = viewHome(); }
    else if (parts[0] === 'oppitunnit') { html = viewLessons(); title = 'Oppitunnit – ' + title; }
    else if (parts[0] === 'oppitunti') {
      var id = +parts[1];
      if (!lessonById(id)) html = viewNotFound();
      else {
        if (!parts[2]) { location.replace('#/oppitunti/' + id + '/aloitus'); return; }
        html = viewLesson(id, parts[2]); title = 'Oppitunti ' + id + ' – ' + title;
      }
    }
    else if (parts[0] === 'sanasto') { html = viewVocab(); title = 'Sanasto – ' + title; after = renderVocabResults; }
    else if (parts[0] === 'harjoittelu') { html = viewPractice(); title = 'Harjoittelu – ' + title; }
    else if (parts[0] === 'edistyminen') { html = viewProgress(); title = 'Edistyminen – ' + title; }
    else if (parts[0] === 'alkutesti') { html = viewPretest(); title = 'Alkutesti – ' + title; ui.test = { kind: 'pre', results: {}, checked: false, conf: null }; }
    else if (parts[0] === 'lopputesti') { html = viewFinal(); title = 'Lopputesti – ' + title; ui.test = { kind: 'final', results: {}, checked: false, conf: null, partd: [null, null, null, null] }; }
    else if (parts[0] === 'tietoa') { html = viewAbout(); title = 'Tietoa – ' + title; }
    else html = viewNotFound();
    main.innerHTML = html;
    document.title = title;
    renderNav('/' + parts.join('/'));
    if (after) after();
    var cur = $('.stepper [aria-current="step"]');
    if (cur) { var sc = cur.parentNode; sc.scrollLeft = cur.offsetLeft - sc.offsetLeft - 16; }
    window.scrollTo(0, 0);
    var h1 = $('h1', main) || $('h2', main);
    if (h1 && route.count++ > 0) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
  }
  route.count = 0;

  /* ================= Tapahtumat ================= */
  function currentLesson() {
    var m = (location.hash || '').match(/#\/oppitunti\/(\d+)/);
    return m ? lessonById(+m[1]) : null;
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('button, [data-action]');
    if (!t) return;
    if (t.dataset.say) {
      if (!SP.canSpeak()) { toast(SP.supported ? 'Amerikanenglannin ääntä ei ole käytettävissä tällä laitteella.' : 'Selaimesi ei tue äänentoistoa. Käytä tekstiä.'); return; }
      SP.say(t.dataset.say, { slow: !!t.dataset.slow, script: !!t.dataset.script, btn: t });
      return;
    }
    if (t.dataset.goto) { var L0 = currentLesson(); location.hash = '#/oppitunti/' + L0.id + '/' + t.dataset.goto; return; }
    var a = t.dataset.action; if (!a) return;
    var L = currentLesson(), p = L ? S.lesson(L.id) : null;
    switch (a) {
      case 'stop': SP.stop(); break;
      case 'toggle-tr': {
        var list = $('#vocab-list'); var on = !list.classList.contains('tr-hidden');
        list.classList.toggle('tr-hidden', on);
        t.setAttribute('aria-pressed', on); t.textContent = on ? 'Näytä käännös' : 'Piilota suomennokset';
        break;
      }
      case 'bookmark': {
        var added = S.toggleBookmark(t.dataset.key);
        t.setAttribute('aria-pressed', added);
        announce(added ? 'Sana tallennettu kerrattavaksi.' : 'Tallennus poistettu.');
        if (vocabFilter.saved && $('#vresults')) renderVocabResults();
        break;
      }
      case 'toggle-model': {
        var card = t.closest('.card'), m = $('.model', card), show = m.hidden;
        m.hidden = !show; t.setAttribute('aria-expanded', show); t.textContent = show ? 'Piilota mallivastaus' : 'Näytä mallivastaus';
        break;
      }
      case 'speak-self': {
        p.speak[t.dataset.k] = +t.dataset.v; S.save();
        $$('[data-action="speak-self"][data-k="' + t.dataset.k + '"]').forEach(function (b) { b.setAttribute('aria-pressed', b === t); });
        announce('Arvio tallennettu.');
        break;
      }
      case 'show-script': case 'show-script-t': {
        var c = t.closest('[data-listen], [data-item]'), sc = $('[data-transcript]', c), sh = sc.hidden;
        sc.hidden = !sh; t.setAttribute('aria-expanded', sh); t.textContent = sh ? 'Piilota käsikirjoitus' : 'Näytä käsikirjoitus';
        break;
      }
      case 'check-listen': {
        var card2 = t.closest('[data-listen]'), k = +card2.dataset.listen.split('-')[1], li = L.listening[k];
        $$('[data-lq]', card2).forEach(function (inp, j) {
          var slot = inp.parentNode.querySelector('.fbslot');
          slot.innerHTML = '<div class="fb neutral"><strong>Malli: ' + richFi(li.a[j]) + '</strong><div class="choice-row" style="margin-top:6px" role="group" aria-label="Oma arvio">' +
            '<button type="button" class="btn sm" data-action="listen-mark" data-v="1" aria-pressed="false">Vastasin oikein</button><button type="button" class="btn sm" data-action="listen-mark" data-v="0" aria-pressed="false">Väärin</button></div></div>';
        });
        var scr = $('[data-transcript]', card2); scr.hidden = false;
        var sb = $('[data-action="show-script"]', card2); sb.setAttribute('aria-expanded', 'true'); sb.textContent = 'Piilota käsikirjoitus';
        announce('Mallivastaukset ja käsikirjoitus näytetään. Arvioi vastauksesi.');
        break;
      }
      case 'listen-mark': {
        var grp = t.parentNode; $$('button', grp).forEach(function (b) { b.setAttribute('aria-pressed', b === t); });
        var card3 = t.closest('[data-listen]'), k3 = +card3.dataset.listen.split('-')[1];
        var marks = $$('[data-action="listen-mark"][aria-pressed="true"]', card3);
        if (marks.length === L.listening[k3].q.length) {
          var sc3 = marks.filter(function (b) { return b.dataset.v === '1'; }).length;
          p.listen[k3] = sc3; S.save(); announce('Tallennettu: ' + sc3 + ' / ' + marks.length + ' oikein.');
        }
        break;
      }
      case 'check-match': {
        var ok = 0;
        $$('[data-match]').forEach(function (sel) {
          var i = +sel.dataset.match, right = L.match.key[i], v = +sel.value, slot = sel.parentNode.querySelector('.fbslot');
          var good = v === right; if (good) ok++;
          slot.innerHTML = '<div class="fb ' + (good ? 'ok' : 'bad') + '">' + (good ? '✓ Oikein' : '✗ ' + (v ? 'Ei aivan.' : 'Ei vastausta.') + ' Oikea merkitys: <strong style="display:inline">' + esc(L.match.meanings[right - 1]) + '</strong>') + '</div>';
        });
        $('[data-score="match"]').textContent = ok + ' / 5 oikein';
        p.ex.match = Math.max(p.ex.match || 0, ok); S.save(); announce(ok + ' / 5 oikein');
        break;
      }
      case 'check-tr': {
        var ok2 = 0;
        L.translate.items.forEach(function (it, i) {
          var inp = $('#t' + i), slot = inp.parentNode.querySelector('.fbslot'), key = L.translate.key[i];
          var good = matches(inp.value, [key]); if (good) ok2++;
          slot.innerHTML = good ? '<div class="fb ok">✓ Oikein: <span lang="en">' + esc(key) + '</span></div>' :
            '<div class="fb bad">✗ ' + (inp.value.trim() ? 'Ei vastaa mallia.' : 'Ei vastausta.') + ' Malli: <strong style="display:inline" lang="en">' + esc(key) + '</strong>' +
            (inp.value.trim() ? '<div style="margin-top:6px"><button type="button" class="btn sm" data-action="tr-accept">Vastaukseni oli merkitykseltään oikein</button></div>' : '') + '</div>';
        });
        ui.trScore = ok2;
        $('[data-score="tr"]').textContent = ok2 + ' / 4 oikein';
        p.ex.tr = Math.max(p.ex.tr || 0, ok2); S.save(); announce(ok2 + ' / 4 oikein');
        break;
      }
      case 'tr-accept': {
        ui.trScore = (ui.trScore || 0) + 1;
        t.closest('.fb').className = 'fb ok'; t.parentNode.innerHTML = 'Hyväksytty omalla arviolla.';
        $('[data-score="tr"]').textContent = ui.trScore + ' / 4 oikein';
        p.ex.tr = Math.max(p.ex.tr || 0, ui.trScore); S.save();
        break;
      }
      case 'check-fill': {
        var ok3 = 0;
        $$('[data-fill]').forEach(function (inp) {
          var i = +inp.dataset.fill, key = L.fill.key[i], slot = inp.parentNode.querySelector('.fbslot');
          var good = matches(inp.value, [key]); if (good) ok3++;
          slot.innerHTML = '<div class="fb ' + (good ? 'ok' : 'bad') + '">' + (good ? '✓ Oikein' : '✗ Oikea sana: <strong style="display:inline" lang="en">' + esc(key) + '</strong>') +
            ' – <span lang="en">' + esc(L.fill.items[i].replace('____', key)) + '</span></div>';
        });
        $('[data-score="fill"]').textContent = ok3 + ' / 3 oikein';
        p.ex.fill = Math.max(p.ex.fill || 0, ok3); S.save(); announce(ok3 + ' / 3 oikein');
        break;
      }
      case 'quiz-start': {
        ui.quiz = { i: 0, answers: [], correct: 0 };
        $('#quiz-root').innerHTML = quizQHTML(L); $('#qq').focus();
        break;
      }
      case 'quiz-answer': {
        var st = ui.quiz, j = +t.dataset.j;
        if (st.answers[st.i] != null) break;
        st.answers[st.i] = j; if (j === L.quiz[st.i].a) st.correct++;
        $('#quiz-root').innerHTML = quizQHTML(L);
        var fb = $('#quiz-root .fb'); if (fb) announce(fb.textContent);
        var nx = $('[data-action="quiz-next"]'); if (nx) nx.focus({ preventScroll: true });
        break;
      }
      case 'quiz-next': {
        var st2 = ui.quiz;
        if (st2.i < 9) { st2.i++; $('#quiz-root').innerHTML = quizQHTML(L); $('#qq').focus(); }
        else {
          var q = p.quiz; q.attempts++; q.last = st2.correct; q.best = q.best == null ? st2.correct : Math.max(q.best, st2.correct);
          p.done = true;
          L.quiz.forEach(function (qq, i) { if (st2.answers[i] !== qq.a) vocabKeysForQuestion(L, qq).forEach(function (k) { S.addPractice(k); }); });
          S.save();
          $('#quiz-root').innerHTML = quizResultHTML(L, p); $('#quiz-result').focus();
        }
        break;
      }
      case 'self-conf': {
        p.self.conf = +t.dataset.v; S.save();
        $$('[data-action="self-conf"]').forEach(function (b) { b.setAttribute('aria-pressed', b === t); });
        announce('Puhevarmuus ' + t.dataset.v + ' tallennettu.');
        break;
      }
      case 'mark-done': { p.done = true; S.save(); toast('Oppitunti merkitty suoritetuksi.'); route(); break; }
      case 'flash-show': case 'flash-ok': case 'flash-again': case 'flash-restart': {
        var box = t.closest('[data-flash]'), fs = flashState[box.dataset.flash];
        if (a === 'flash-show') fs.shown = true;
        if (a === 'flash-ok') { fs.known++; if (box.dataset.flash === 'practice' && practiceSel.src === 'practice') S.removePractice(fs.keys[fs.i]); fs.i++; fs.shown = false; }
        if (a === 'flash-again') { S.addPractice(fs.keys[fs.i]); fs.i++; fs.shown = false; }
        if (a === 'flash-restart') { fs.i = 0; fs.known = 0; fs.shown = false; }
        if (box.dataset.flash === 'review' && L) { p.review.seen = true; S.save(); }
        box.innerHTML = flashInner(fs);
        var f = $('.back button, button', box); if (f) f.focus({ preventScroll: true });
        break;
      }
      case 'vocab-saved': {
        vocabFilter.saved = !vocabFilter.saved; t.setAttribute('aria-pressed', vocabFilter.saved); renderVocabResults(); break;
      }
      case 'test-check': {
        var tt = ui.test; var form = $('#test-form');
        var items = tt.kind === 'pre' ? pretestItems() : finalItems();
        tt.results = {};
        gradeItems(items, form, tt.results);
        tt.checked = true; t.textContent = 'Tarkistettu'; t.disabled = true;
        updateTestTotal();
        announce('Vastaukset tarkistettu. Arvioi mallia vasten ne vastaukset, joita ei voitu tarkistaa automaattisesti.');
        break;
      }
      case 'selfmark': {
        $$('button', t.parentNode).forEach(function (b) { b.setAttribute('aria-pressed', b === t); });
        ui.test.results[t.dataset.id] = +t.dataset.v; updateTestTotal(); break;
      }
      case 'conf': {
        ui.test.conf = +t.dataset.v;
        $$('[data-action="conf"]').forEach(function (b) { b.setAttribute('aria-pressed', b === t); });
        updateTestTotal(); break;
      }
      case 'partd': {
        ui.test.partd[+t.dataset.i] = +t.dataset.v;
        $$('[data-action="partd"][data-i="' + t.dataset.i + '"]').forEach(function (b) { b.setAttribute('aria-pressed', b === t); });
        updateTestTotal(); break;
      }
      case 'test-save': {
        var T = ui.test;
        var w = Object.keys(T.results).reduce(function (s, k) { return s + (T.results[k] || 0); }, 0);
        if (T.kind === 'pre') { S.data.pretest = { score: w, conf: T.conf, date: new Date().toISOString() }; }
        else {
          var spk = T.partd.reduce(function (s, v) { return s + v; }, 0);
          S.data.final = { written: w, speaking: spk, total: w + spk, conf: T.conf, partd: T.partd, date: new Date().toISOString() };
        }
        S.save();
        var msg = T.kind === 'pre' ? 'Alkutesti tallennettu: ' + w + ' / 10. Seuraavaksi oppitunti 1!' :
          'Lopputesti tallennettu: ' + S.data.final.total + ' / 100.' + (S.data.pretest ? ' Alkutesti oli ' + S.data.pretest.score + ' / 10; puhevarmuus ' + (S.data.pretest.conf || '–') + ' → ' + T.conf + ' / 5.' : '');
        $('#test-total').innerHTML = '<div class="fb ok" role="status"><strong>' + esc(msg) + '</strong></div><div class="row" style="margin-top:10px">' +
          (T.kind === 'pre' ? '<a class="btn primary" href="#/oppitunti/1/aloitus">Aloita oppitunti 1' + icon('arrowR') + '</a>' : '<a class="btn primary" href="#/edistyminen">Katso edistyminen</a>') + '</div>';
        break;
      }
      case 'rate': {
        S.data.audio.rate = +t.dataset.v; S.save(); updateSpeedBtn();
        $$('[data-action="rate"]').forEach(function (b) { b.setAttribute('aria-pressed', b === t); });
        break;
      }
      case 'export': {
        var blob = new Blob([S.exportJSON()], { type: 'application/json' });
        var url = URL.createObjectURL(blob), aEl = document.createElement('a');
        aEl.href = url; aEl.download = 'sadan-medical-english-edistyminen-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(aEl); aEl.click(); aEl.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        break;
      }
      case 'reset': { $('#confirm-reset').showModal ? $('#confirm-reset').showModal() : (confirm('Haluatko varmasti poistaa kaiken edistymisen?') && doReset()); break; }
    }
  });

  function doReset() { S.reset(); flashState = {}; toast('Edistyminen nollattu.'); route(); }

  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.id === 'vl') { vocabFilter.lesson = t.value; renderVocabResults(); }
    if (t.id === 'psrc' || t.id === 'pdir') {
      practiceSel.src = $('#psrc').value; practiceSel.dir = $('#pdir').value; delete flashState.practice;
      main.innerHTML = viewPractice(); $('#' + t.id).focus();
    }
    if (t.id === 'voice') { S.data.audio.voiceURI = t.value; S.save(); }
    if (t.dataset && t.dataset.selfcheck != null) {
      var L = currentLesson(), p = S.lesson(L.id), i = +t.dataset.selfcheck, arr = p.self.checks, at = arr.indexOf(i);
      if (t.checked && at < 0) arr.push(i); if (!t.checked && at >= 0) arr.splice(at, 1); S.save();
    }
    if (t.id === 'selfwords') { var L2 = currentLesson(); S.lesson(L2.id).self.words = t.value; S.save(); }
    if (t.id === 'import-file' && t.files && t.files[0]) {
      var r = new FileReader();
      r.onload = function () {
        try { S.importJSON(r.result); toast('Varmuuskopio palautettu.'); route(); }
        catch (err) { toast('Tiedostoa ei voitu lukea. Varmista, että se on tämän sivuston varmuuskopio.'); }
      };
      r.readAsText(t.files[0]);
    }
  });
  document.addEventListener('input', function (e) {
    if (e.target.id === 'vq') { vocabFilter.q = e.target.value; renderVocabResults(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.matches && e.target.matches('#test-form input[type="text"]')) e.preventDefault();
  });

  $('#speed').addEventListener('click', function () {
    var r = S.data.audio.rate; S.data.audio.rate = r <= 0.75 ? 0.9 : (r < 1 ? 1 : 0.7); S.save(); updateSpeedBtn();
    $$('[data-action="rate"]').forEach(function (b) { b.setAttribute('aria-pressed', Math.abs(+b.dataset.v - S.data.audio.rate) < 0.01); });
    announce($('#speed').getAttribute('aria-label'));
  });
  $('#confirm-yes').addEventListener('click', function () { $('#confirm-reset').close(); doReset(); });
  $('#confirm-no').addEventListener('click', function () { $('#confirm-reset').close(); });

  SP.onChange(function () {
    // Päivitä ilmoitukset ja ääniasetukset, kun äänet latautuvat
    if (/edistyminen/.test(location.hash) && $('#audio-settings')) $('#audio-settings').innerHTML = '<h2>Ääniasetukset</h2>' + audioNotice() + audioSettingsHTML();
  });
  window.addEventListener('hashchange', route);
  window.addEventListener('pagehide', function () { SP.stop(); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) SP.stop(); });
  updateSpeedBtn();
  route();
})();
