/* 08 Consultings - homepage interactions
   Vanilla JS. All motion honors prefers-reduced-motion. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Sticky nav ---------- */
  var nav = $("#nav");
  var onScroll = function () { nav.classList.toggle("is-stuck", window.scrollY > 12); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = $("#navToggle"), menu = $("#menu");
  var setMenu = function (open) {
    nav.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle.addEventListener("click", function () { setMenu(!menu.classList.contains("is-open")); });
  $$("#menu a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  var reveals = $$(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Count up ---------- */
  var counters = $$(".count");
  var runCount = function (el) {
    var to = el.getAttribute("data-to");
    var suffix = el.getAttribute("data-suffix") || "";
    if (isNaN(+to)) { el.textContent = to; return; }
    var target = +to, dur = 1400, start = null;
    if (reduce) { el.textContent = target.toLocaleString() + suffix; return; }
    var step = function (t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { runCount(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else { counters.forEach(runCount); }

  /* ---------- Bar fills + method line (animate when in view) ---------- */
  var fillBars = function (scope) {
    $$(".bar-fill", scope).forEach(function (b) {
      var w = b.getAttribute("data-w");
      if (w) requestAnimationFrame(function () { b.style.width = w + "%"; });
    });
  };
  // fill the initially-active dashboard panel right away so bars are never empty
  var activePanel = $(".dash__panel.is-active"); if (activePanel) fillBars(activePanel);
  if ("IntersectionObserver" in window) {
    var bio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.style.setProperty("--p", "1"); bio.unobserve(en.target); }
      });
    }, { threshold: 0.25 });
    var line = $(".method__line"); if (line) bio.observe(line);
  } else {
    var l = $(".method__line"); if (l) l.style.setProperty("--p", "1");
  }

  /* ---------- Framework stages ---------- */
  var fwStages = $$(".fw__stage");
  fwStages.forEach(function (btn) {
    var activate = function () {
      fwStages.forEach(function (b) { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active"); btn.setAttribute("aria-selected", "true");
    };
    btn.addEventListener("click", activate);
    btn.addEventListener("mouseenter", activate);
  });

  /* ---------- Dashboard tabs ---------- */
  var dashTabs = $$(".dash__tab"), dashPanels = $$(".dash__panel");
  dashTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var k = tab.getAttribute("data-dash");
      dashTabs.forEach(function (t) { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active"); tab.setAttribute("aria-selected", "true");
      dashPanels.forEach(function (p) {
        var on = p.getAttribute("data-panel") === k;
        p.classList.toggle("is-active", on);
        if (on) fillBars(p);
      });
    });
  });

  /* ---------- Testimonial carousel ---------- */
  var track = $("#tstTrack");
  if (track) {
    var idx = 0;
    var step = function () {
      var card = track.children[0];
      if (!card) return 320;
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 16) || 16;
      return card.getBoundingClientRect().width + gap;
    };
    var maxIdx = function () {
      var vw = track.parentElement.getBoundingClientRect().width;
      var per = Math.max(1, Math.floor(vw / step()));
      return Math.max(0, track.children.length - per);
    };
    var go = function (n) {
      idx = Math.max(0, Math.min(n, maxIdx()));
      track.style.transform = "translateX(" + (-idx * step()) + "px)";
    };
    $("#tstNext").addEventListener("click", function () { go(idx + 1); });
    $("#tstPrev").addEventListener("click", function () { go(idx - 1); });
    var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { go(idx); }, 150); }, { passive: true });
  }

  /* ---------- Smooth-scroll offset for sticky nav ---------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var el = document.getElementById(id.slice(1));
      if (!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.scrollY - (nav.offsetHeight - 4);
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
    });
  });
})();
