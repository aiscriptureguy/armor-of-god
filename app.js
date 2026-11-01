// app.js — The Armor of God interactive site
// Reads from window.ArmorData (armor-data.js must load first)

(function () {
  'use strict';

  // ─── Motion preference ────────────────────────────────────────────────────
  var motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  // ─── State ────────────────────────────────────────────────────────────────
  var currentPanel = 'overview';

  // ─── Helpers ──────────────────────────────────────────────────────────────
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  function announce(msg) {
    var el = qs('#panel-announce');
    if (el) { el.textContent = ''; setTimeout(function () { el.textContent = msg; }, 50); }
  }

  // ─── Panel rendering ──────────────────────────────────────────────────────

  function renderPiecePanel(id) {
    var piece = window.ArmorData.pieces[id];
    if (!piece) return;
    var el = qs('#panel-' + id);
    if (!el) return;
    if (el.dataset.rendered) return; // already built

    var dcBlock = '';
    if (piece.dcText) {
      dcBlock = '<div class="panel-section">' +
        '<div class="panel-section-label">Restoration — D&amp;C</div>' +
        '<div class="scripture-block">' +
          '<p>' + escHtml(piece.dcText.text) + '</p>' +
          '<cite><a href="' + piece.dcText.url + '" target="_blank" rel="noopener">' + escHtml(piece.dcText.reference) + '</a></cite>' +
        '</div>' +
        '<p class="panel-note" style="font-size:0.88rem;color:var(--text-muted);margin-top:0.5rem;">' + escHtml(piece.dcText.note) + '</p>' +
      '</div>';
    }

    var restorationBlock = '';
    if (piece.restorationNote) {
      restorationBlock = '<div class="panel-section"><div class="restoration-note">' + escHtml(piece.restorationNote) + '</div></div>';
    }

    var bomBlock = '';
    if (piece.bomLink) {
      bomBlock = '<div class="panel-section">' +
        '<div class="panel-section-label">Book of Mormon</div>' +
        '<p style="font-size:0.93rem;line-height:1.65;">' + escHtml(piece.bomLink) + '</p>' +
      '</div>';
    }

    var crossRefBlock = '';
    if (piece.crossReferences && piece.crossReferences.length) {
      var items = piece.crossReferences.map(function (cr) {
        return '<li class="cross-ref-item">' +
          '<a class="ref-label" href="' + cr.url + '" target="_blank" rel="noopener">' + escHtml(cr.reference) + '</a>' +
          '<span class="ref-note">' + escHtml(cr.note) + '</span>' +
        '</li>';
      }).join('');
      crossRefBlock = '<div class="panel-section">' +
        '<div class="panel-section-label">Connections</div>' +
        '<ul class="cross-ref-list">' + items + '</ul>' +
      '</div>';
    }

    var appItems = (piece.application || []).map(function (a) {
      return '<li>' + escHtml(a) + '</li>';
    }).join('');

    el.innerHTML =
      '<button class="panel-back" aria-label="Back to overview">← Back</button>' +
      '<h2>' + escHtml(piece.label) + '</h2>' +
      '<div class="panel-section">' +
        '<div class="scripture-block">' +
          '<p>' + escHtml(piece.scripture.text) + '</p>' +
          '<cite><a href="' + piece.scripture.url + '" target="_blank" rel="noopener">' + escHtml(piece.scripture.reference) + '</a></cite>' +
        '</div>' +
      '</div>' +
      dcBlock +
      '<div class="panel-section">' +
        '<div class="panel-section-label">The Greek</div>' +
        '<div class="greek-block">' +
          '<span class="greek-term">' + escHtml(piece.greekWord.term) + '</span>' +
          '<span class="greek-strongs">' + escHtml(piece.greekWord.strongsNumber) + '</span>' +
          '<p class="greek-meaning">' + escHtml(piece.greekWord.meaning) + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="panel-section">' +
        '<div class="panel-section-label">Roman context — ' + escHtml(piece.romanContext.equipmentName) + '</div>' +
        '<p>' + escHtml(piece.romanContext.description) + '</p>' +
      '</div>' +
      '<div class="panel-section">' +
        '<div class="panel-section-label">Body part protected</div>' +
        '<p><strong>' + escHtml(piece.bodyPart.name) + '</strong> — ' + escHtml(piece.bodyPart.spiritualDomain) + '</p>' +
      '</div>' +
      restorationBlock +
      bomBlock +
      '<div class="panel-section">' +
        '<div class="panel-section-label">Putting it on today</div>' +
        '<ul class="application-list">' + appItems + '</ul>' +
      '</div>' +
      crossRefBlock;

    el.dataset.rendered = 'true';

    // Wire back button
    var back = el.querySelector('.panel-back');
    if (back) back.addEventListener('click', function () { showPanel('overview'); });
  }

  function renderEnemyPanel() {
    var data = window.ArmorData.enemy;
    var verseEl = qs('#enemy-verse');
    var refEl = qs('#enemy-ref');
    var titlesEl = qs('#enemy-titles');
    var jshEl = qs('#jsh-block');

    if (verseEl) verseEl.textContent = data.anchorVerse.text;
    if (refEl) {
      refEl.innerHTML = '<a href="' + data.anchorVerse.url + '" target="_blank" rel="noopener">' +
        escHtml(data.anchorVerse.reference) + '</a>';
    }

    if (titlesEl && !titlesEl.dataset.rendered) {
      titlesEl.innerHTML = data.fourTitles.map(function (t) {
        return '<li>' +
          '<span class="enemy-phrase">' + escHtml(t.kjvPhrase) + '</span>' +
          '<span class="enemy-greek">' + escHtml(t.greek) + '</span>' +
          '<span class="enemy-meaning">' + escHtml(t.meaning) + '</span>' +
        '</li>';
      }).join('');
      titlesEl.dataset.rendered = 'true';
    }

    if (jshEl && !jshEl.dataset.rendered) {
      var jsh = data.jshConnection;
      jshEl.innerHTML =
        '<span class="jsh-label">First Vision connection — ' + escHtml(jsh.reference) + '</span>' +
        '<p>' + escHtml(jsh.summary) + '</p>' +
        '<a href="' + jsh.url + '" target="_blank" rel="noopener" style="display:inline-block;margin-top:0.5rem;">Read JS—H 1:15–17 →</a>';
      jshEl.dataset.rendered = 'true';
    }
  }

  function renderPrayerSection() {
    var data = window.ArmorData.prayer;
    var el = qs('#prayer-content');
    if (!el || el.dataset.rendered) return;

    el.innerHTML =
      '<div class="panel-section">' +
        '<div class="scripture-block">' +
          '<p>' + escHtml(data.anchorVerse.text) + '</p>' +
          '<cite><a href="' + data.anchorVerse.url + '" target="_blank" rel="noopener">' +
            escHtml(data.anchorVerse.reference) + '</a></cite>' +
        '</div>' +
      '</div>' +
      '<div class="panel-section"><p>' + escHtml(data.bodyContent) + '</p></div>' +
      '<div class="panel-section">' +
        '<div class="panel-section-label">Restoration addition — D&amp;C 27:18</div>' +
        '<div class="scripture-block">' +
          '<p>' + escHtml(data.dcAddition.text) + '</p>' +
          '<cite><a href="' + data.dcAddition.url + '" target="_blank" rel="noopener">' +
            escHtml(data.dcAddition.reference) + '</a></cite>' +
        '</div>' +
        '<p style="font-size:0.88rem;color:var(--text-muted);margin-top:0.5rem;">' + escHtml(data.dcAddition.note) + '</p>' +
      '</div>';

    el.dataset.rendered = 'true';
  }

  function renderChart() {
    var tbody = qs('#chart-body');
    if (!tbody || tbody.dataset.rendered) return;

    tbody.innerHTML = window.ArmorData.chartRows.map(function (row) {
      return '<tr>' +
        '<td><a href="' + row.url + '" target="_blank" rel="noopener">' + escHtml(row.reference) + '</a></td>' +
        '<td class="chart-volume">' + escHtml(row.volume) + '</td>' +
        '<td>' + escHtml(row.pieces) + '</td>' +
      '</tr>';
    }).join('');

    tbody.dataset.rendered = 'true';
  }

  // ─── Panel switching ──────────────────────────────────────────────────────

  function showPanel(id) {
    // Deactivate all panels
    qsa('.panel').forEach(function (p) { p.classList.remove('active'); });

    // Deactivate all tabs
    qsa('.tab').forEach(function (t) { t.classList.remove('active'); });


    if (id === 'overview') {
      qs('#panel-overview').classList.add('active');
      qs('.tab[data-tab="overview"]').classList.add('active');
      announce('Overview — all armor pieces');
    } else if (id === 'ARMOR-0007') {
      renderEnemyPanel();
      qs('#panel-ARMOR-0007').classList.add('active');
      announce('The enemy — who we wrestle against');
    } else if (window.ArmorData.pieces[id]) {
      renderPiecePanel(id);
      qs('#panel-' + id).classList.add('active');

      // Sync tab strip
      var tab = qs('.tab[data-tab="' + id + '"]');
      if (tab) tab.classList.add('active');

      var piece = window.ArmorData.pieces[id];
      announce(piece.label);
    }

    currentPanel = id;
  }

  // ─── Scroll trigger ───────────────────────────────────────────────────────
  // Study section is always in the DOM — scroll trigger just smoothly moves
  // the viewport down to the study section when the hero sentinel exits.

  function initScrollTrigger() {
    if (window.innerWidth <= 768) return;

    var sentinel = qs('#hero-sentinel');
    if (!sentinel) return;

    var triggered = false;
    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting && !triggered) {
        triggered = true;
        observer.disconnect();
      }
    }, { threshold: 0 });

    observer.observe(sentinel);
  }

  // ─── Wire hit areas ───────────────────────────────────────────────────────

  function initHitAreas() {
    qsa('.hit-area').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.dataset.piece;
        if (!id) return;
        showPanel(id);
        scrollToStudy();
      });
    });
  }

  function scrollToStudy() {
    var study = qs('#study');
    if (study) study.scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto' });
  }

  // ─── Wire tab strip ───────────────────────────────────────────────────────

  function initTabs() {
    qsa('.tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        showPanel(tab.dataset.tab);
      });
    });
  }

  // ─── Wire overview list buttons ───────────────────────────────────────────

  function initOverviewButtons() {
    // These are rendered in HTML statically, so wire immediately
    qsa('.overview-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showPanel(btn.dataset.piece);
      });
    });
  }

  // ─── Keyboard navigation for warrior ─────────────────────────────────────

  function initKeyboardNav() {
    var pieceOrder = ['ARMOR-0005', 'ARMOR-0002', 'ARMOR-0001', 'ARMOR-0004', 'ARMOR-0006', 'ARMOR-0003', 'ARMOR-0007'];

    qsa('.warrior-container').forEach(function (container) {
      container.addEventListener('keydown', function (e) {
        var focused = document.activeElement;
        if (!focused || !focused.classList.contains('hit-area')) return;

        var current = focused.dataset.piece;
        var idx = pieceOrder.indexOf(current);

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          var next = pieceOrder[(idx + 1) % pieceOrder.length];
          var nextBtn = container.querySelector('.hit-area[data-piece="' + next + '"]');
          if (nextBtn) nextBtn.focus();
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          var prev = pieceOrder[(idx - 1 + pieceOrder.length) % pieceOrder.length];
          var prevBtn = container.querySelector('.hit-area[data-piece="' + prev + '"]');
          if (prevBtn) prevBtn.focus();
        }
      });
    });
  }

  // ─── Security helper ──────────────────────────────────────────────────────

  function escHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ─── Init ────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    renderPrayerSection();
    renderChart();
    initScrollTrigger();
    initHitAreas();
    initTabs();
    initOverviewButtons();
    initKeyboardNav();
  });

}());
