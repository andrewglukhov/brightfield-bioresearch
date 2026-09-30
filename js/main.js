/* =========================================================
   Brightfield Bioresearch — main.js
   ========================================================= */
(function () {
  "use strict";

  /* ---------- SETTINGS (edit here) ---------- */
  var CONFIG = {
    // Контактный email компании (показывается на сайте и используется как fallback для формы)
    contactEmail: "info@brightfield-bio.kz",
    // Endpoint для отправки формы (Formspree, Getform, свой backend). Пусто — откроется mailto.
    // Пример Formspree: "https://formspree.io/f/xxxxxxxx"
    formEndpoint: "",
    // Язык по умолчанию при первом заходе (ru | kk | en)
    defaultLang: "kk",
    supported: ["ru", "kk", "en"]
  };

  var I18N = window.I18N || {};
  var root = document.documentElement;

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return (o && o[k] !== undefined) ? o[k] : undefined; }, obj);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(i) { return (i < 9 ? "0" : "") + (i + 1); }
  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  /* ---------- LANGUAGE ---------- */
  function detectLang() {
    var fromUrl = (location.search.match(/[?&]lang=(ru|kk|en)/) || [])[1];
    if (fromUrl) return fromUrl;
    var saved = read("bf_lang");
    if (saved && CONFIG.supported.indexOf(saved) > -1) return saved;
    return CONFIG.defaultLang;
  }

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    root.setAttribute("lang", lang);
    store("bf_lang", lang);

    $$("[data-i18n]").forEach(function (el) {
      var val = get(dict, el.getAttribute("data-i18n"));
      if (val === undefined) return;
      if (/<[a-z][\s\S]*>/i.test(val)) el.innerHTML = val; else el.textContent = val;
    });
    $$("[data-i18n-placeholder]").forEach(function (el) {
      var val = get(dict, el.getAttribute("data-i18n-placeholder"));
      if (val !== undefined) el.setAttribute("placeholder", val);
    });
    $$("[data-i18n-content]").forEach(function (el) {
      var val = get(dict, el.getAttribute("data-i18n-content"));
      if (val !== undefined) el.setAttribute("content", val);
    });
    $$("[data-i18n-list]").forEach(function (el) {
      var arr = get(dict, el.getAttribute("data-i18n-list"));
      if (!Array.isArray(arr)) return;
      el.innerHTML = arr.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    });

    $$(".lang [data-lang]").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });

    renderAreas(dict);
    renderServices(dict);
    renderSteps(dict);
    renderTeam(dict);
    renderTopics(dict);
    renderPrivacy(dict);
    renderLegal(dict);
  }

  function renderLegal(dict) {
    var box = $("#contactLegal");
    if (!box || !dict.contact || !dict.contact.legal) return;
    box.innerHTML = dict.contact.legal.map(function (r) {
      return '<div><dt class="label">' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
    }).join("");
  }

  /* ---------- RENDERERS ---------- */
  function renderAreas(dict) {
    var grid = $("#areasGrid");
    if (!grid || !dict.areas) return;
    var labels = dict.areas.rowLabels || [];
    grid.innerHTML = dict.areas.items.map(function (a) {
      return '<article class="area reveal">' +
        '<div class="label area__index">' + esc(a.index) + '</div>' +
        '<h3 class="area__title">' + esc(a.title) + '</h3>' +
        '<p class="area__text">' + esc(a.text) + '</p>' +
        '<dl class="area__rows">' + a.rows.map(function (v, i) {
          return '<div class="area__row"><dt>' + esc(labels[i] || "") + '</dt><dd>' + esc(v) + '</dd></div>';
        }).join("") + '</dl>' +
        '</article>';
    }).join("");
    observeReveal(grid);
  }

  function renderServices(dict) {
    var list = $("#servicesList");
    if (!list || !dict.services) return;
    list.innerHTML = dict.services.items.map(function (it, i) {
      return '<li class="service reveal">' +
        '<div class="service__index">' + pad(i) + '</div>' +
        '<div><h3 class="service__title">' + esc(it.title) + '</h3>' +
        '<p class="service__text">' + esc(it.text) + '</p></div>' +
        '<div class="service__tags">' + it.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + '</div>' +
        '</li>';
    }).join("");
    observeReveal(list);
  }

  function renderSteps(dict) {
    var list = $("#stepsList");
    if (!list || !dict.process) return;
    list.innerHTML = dict.process.steps.map(function (s, i) {
      return '<li class="step reveal">' +
        '<div class="step__num">' + pad(i) + '</div>' +
        '<h3 class="step__title">' + esc(s.title) + '</h3>' +
        '<p class="step__text">' + esc(s.text) + '</p>' +
        '</li>';
    }).join("");
    observeReveal(list);
  }

  function renderTeam(dict) {
    var grid = $("#teamGrid");
    if (!grid || !dict.team) return;
    grid.innerHTML = dict.team.roles.map(function (r, i) {
      return '<article class="role reveal">' +
        '<div class="role__index">' + pad(i) + '</div>' +
        '<h3 class="role__title">' + esc(r.title) + '</h3>' +
        '<p class="role__text">' + esc(r.text) + '</p>' +
        '</article>';
    }).join("");
    observeReveal(grid);
  }

  function renderTopics(dict) {
    var sel = $("#topicSelect");
    if (!sel || !dict.form) return;
    var current = sel.value;
    sel.innerHTML = '<option value="" disabled' + (current ? "" : " selected") + '>' + esc(dict.form.topicPlaceholder) + '</option>' +
      dict.form.topics.map(function (t, i) {
        return '<option value="' + i + '"' + (String(i) === current ? " selected" : "") + '>' + esc(t) + '</option>';
      }).join("");
  }

  function renderPrivacy(dict) {
    var box = $("#privacyBody");
    if (!box || !dict.privacy) return;
    box.innerHTML = dict.privacy.p.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }

  /* ---------- COUNTERS ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var duration = 1100, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function initCounters() {
    var nums = $$(".num[data-count]");
    if (!nums.length) return;
    if (!("IntersectionObserver" in window)) { nums.forEach(function (n) { n.textContent = n.getAttribute("data-count"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- REVEAL ---------- */
  var revealIO = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); revealIO.unobserve(e.target); }
    });
  }, { threshold: 0.1 }) : null;

  function observeReveal(ctx) {
    $$(".reveal", ctx).forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      if (revealIO) revealIO.observe(el); else el.classList.add("is-visible");
    });
  }

  /* ---------- NAV ---------- */
  function initNav() {
    var burger = $("#burger"), nav = $("#nav");
    if (!burger || !nav) return;
    function close() { nav.classList.remove("is-open"); burger.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  function initLangSwitcher() {
    $$(".lang [data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });
  }

  /* ---------- CONTACT ---------- */
  function initContact() {
    var link = $("#contactEmail");
    if (link) { link.textContent = CONFIG.contactEmail; link.href = "mailto:" + CONFIG.contactEmail; }

    var form = $("#contactForm");
    if (!form) return;
    var status = $("#formStatus");

    function t(key) { return get(I18N[root.getAttribute("lang")] || I18N.ru, "form." + key) || ""; }
    function setStatus(msg, cls) { status.textContent = msg; status.className = "form__status" + (cls ? " " + cls : ""); }

    function validate() {
      var ok = true;
      $$("[required]", form).forEach(function (f) {
        var valid = f.type === "checkbox" ? f.checked : f.value.trim() !== "";
        if (f.type === "email" && valid) valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim());
        var target = f.type === "checkbox" ? f.closest(".check") : f;
        target.classList.toggle("is-invalid", !valid);
        if (!valid) ok = false;
      });
      return ok;
    }

    $$("input, select, textarea", form).forEach(function (f) {
      f.addEventListener("input", function () {
        (f.type === "checkbox" ? f.closest(".check") : f).classList.remove("is-invalid");
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) { setStatus(t("invalid"), "is-err"); return; }

      var dict = I18N[root.getAttribute("lang")] || I18N.ru;
      var fd = new FormData(form);
      var data = {
        topic: dict.form.topics[fd.get("topic")] || "",
        name: fd.get("name"), company: fd.get("company"), email: fd.get("email"),
        phone: fd.get("phone"), message: fd.get("message"),
        lang: root.getAttribute("lang"), page: location.href
      };

      if (CONFIG.formEndpoint) {
        setStatus(t("sending"));
        var btn = $('button[type="submit"]', form); btn.disabled = true;
        fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(data)
        }).then(function (r) {
          if (!r.ok) throw new Error("bad status");
          form.reset(); renderTopics(dict);
          setStatus(t("success"), "is-ok");
        }).catch(function () {
          setStatus(t("error"), "is-err");
        }).then(function () { btn.disabled = false; });
      } else {
        var subject = "Brightfield: " + data.topic + " — " + data.name;
        var body = Object.keys(data).filter(function (k) { return k !== "page"; }).map(function (k) {
          return k + ": " + (data[k] || "");
        }).join("\n");
        location.href = "mailto:" + CONFIG.contactEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        setStatus(t("mailto"), "is-ok");
      }
    });
  }

  /* ---------- INIT ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var y = $("#year"); if (y) y.textContent = "© " + new Date().getFullYear();
    initLangSwitcher();
    applyLang(detectLang());
    initCounters();
    initNav();
    initContact();
    $$(".section__head, .why__col, .principles, .contact__info, .form").forEach(function (el) { el.classList.add("reveal"); });
    observeReveal(document);
  });
})();
