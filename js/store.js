/* Paikallinen tallennus (localStorage). Tiedot pysyvät vain tässä selaimessa. */
(function () {
  'use strict';
  var KEY = 'sadan-medical-english.v1';
  var available = true;
  var mem = null;

  function blank() {
    return {
      v: 1,
      created: new Date().toISOString(),
      lessons: {},        // id -> lesson progress
      bookmarks: [],      // vocab keys "L-i"
      practice: [],       // vocab keys to practise again
      audio: { rate: 0.9, voiceURI: null },
      pretest: null,
      final: null,
      last: null          // { lesson, step }
    };
  }

  function load() {
    try {
      var raw = window.localStorage.getItem(KEY);
      var t = '__t'; window.localStorage.setItem(t, t); window.localStorage.removeItem(t);
      if (!raw) return blank();
      var data = JSON.parse(raw);
      if (!data || data.v !== 1) return blank();
      var b = blank();
      for (var k in b) if (!(k in data)) data[k] = b[k];
      return data;
    } catch (e) {
      available = false;
      return blank();
    }
  }

  mem = load();

  function save() {
    if (!available) return false;
    try { window.localStorage.setItem(KEY, JSON.stringify(mem)); return true; }
    catch (e) { available = false; return false; }
  }

  function lesson(id) {
    var k = String(id);
    if (!mem.lessons[k]) {
      mem.lessons[k] = { steps: [], quiz: { attempts: 0, best: null, last: null }, ex: {}, listen: {}, speak: {}, review: {}, self: { checks: [], words: '', conf: null }, done: false };
    }
    return mem.lessons[k];
  }

  function toggleIn(arr, key) {
    var i = arr.indexOf(key);
    if (i >= 0) arr.splice(i, 1); else arr.push(key);
    save();
    return i < 0;
  }

  window.Store = {
    get data() { return mem; },
    available: function () { return available; },
    save: save,
    lesson: lesson,
    toggleBookmark: function (key) { return toggleIn(mem.bookmarks, key); },
    isBookmarked: function (key) { return mem.bookmarks.indexOf(key) >= 0; },
    addPractice: function (key) { if (mem.practice.indexOf(key) < 0) { mem.practice.push(key); save(); } },
    removePractice: function (key) { var i = mem.practice.indexOf(key); if (i >= 0) { mem.practice.splice(i, 1); save(); } },
    exportJSON: function () { return JSON.stringify(mem, null, 2); },
    importJSON: function (text) {
      var d = JSON.parse(text);
      if (!d || d.v !== 1 || typeof d.lessons !== 'object') throw new Error('format');
      var b = blank();
      for (var k in b) if (!(k in d)) d[k] = b[k];
      mem = d; save();
    },
    reset: function () {
      mem = blank();
      try { window.localStorage.removeItem(KEY); } catch (e) {}
      save();
    }
  };
})();
