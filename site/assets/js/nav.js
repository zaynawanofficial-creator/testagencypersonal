// Header navigation: mobile menu + Services disclosure. No dependencies.
(function () {
  var menuBtn = document.querySelector(".menu-button");
  var nav = document.getElementById("site-nav");
  var toggles = document.querySelectorAll(".nav__toggle");
  var mobile = window.matchMedia("(max-width: 960px)");

  function setMenu(open) {
    if (!menuBtn || !nav) return;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.querySelector(".menu-button__label").textContent = open ? "Close" : "Menu";
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    if (open) {
      var header = document.querySelector(".site-header");
      nav.style.setProperty("--nav-top", header.getBoundingClientRect().bottom + "px");
      var first = nav.querySelector("a, button");
      if (first) first.focus();
    }
  }

  function setDisclosure(btn, open) {
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    btn.setAttribute("aria-expanded", String(open));
    if (panel) panel.hidden = !open;
  }

  function closeAllDisclosures(except) {
    toggles.forEach(function (t) { if (t !== except) setDisclosure(t, false); });
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
  }

  toggles.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = btn.getAttribute("aria-expanded") !== "true";
      closeAllDisclosures(btn);
      setDisclosure(btn, open);
    });
  });

  document.addEventListener("click", function (e) {
    if (mobile.matches) return;
    if (!e.target.closest(".nav__item")) closeAllDisclosures();
  });

  // Close desktop dropdown when focus leaves it
  document.querySelectorAll(".nav__item").forEach(function (item) {
    item.addEventListener("focusout", function (e) {
      if (mobile.matches) return;
      if (!item.contains(e.relatedTarget)) closeAllDisclosures();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var openToggle = document.querySelector('.nav__toggle[aria-expanded="true"]');
    if (openToggle && !mobile.matches) {
      setDisclosure(openToggle, false);
      openToggle.focus();
    } else if (menuBtn && menuBtn.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuBtn.focus();
    }
  });

  // Reset state when crossing the breakpoint
  mobile.addEventListener("change", function () {
    setMenu(false);
    closeAllDisclosures();
  });
})();
