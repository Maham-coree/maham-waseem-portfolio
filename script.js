(() => {
  "use strict";

  // Update this one value when you want to show a professional email address.
  // Leave it empty until you are ready to publish that address.
  const PORTFOLIO_CONFIG = {
    email: ""
  };

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("primary-navigation");
  const navLinks = [...document.querySelectorAll('.primary-navigation a[href^="#"]')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Accessible mobile navigation.
  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      navigation.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });
    navLinks.forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  // Optional email: no invented address and no non-functional contact form.
  const emailLink = document.getElementById("email-link");
  const emailNote = document.getElementById("email-note");
  if (emailLink && PORTFOLIO_CONFIG.email.trim()) {
    emailLink.href = "mailto:" + PORTFOLIO_CONFIG.email.trim();
    emailLink.hidden = false;
    if (emailNote) emailNote.hidden = true;
  }

  // Cinematic but lightweight scroll reveals; content remains visible if unsupported.
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-motion");
    const revealTargets = document.querySelectorAll(
      ".section-kicker,.section-heading,.section-grid,.skill-card,.project-card,.timeline,.cert-card,.math-connection,.contact-section .overline,.contact-section h2,.contact-section>p,.contact-links"
    );
    revealTargets.forEach((element, index) => {
      element.classList.add("reveal");
      if (element.matches(".skill-card,.project-card,.cert-card")) {
        element.style.setProperty("--reveal-delay", (index % 4) * 75 + "ms");
      }
    });
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });
    revealTargets.forEach(element => revealObserver.observe(element));
  }

  // Reduced-motion users receive a stable role label instead of a typing effect.
  const roles = ["Aspiring Software Developer", "Data Analytics Enthusiast", "Technology Explorer"];
  const roleElement = document.getElementById("rotating-role");
  if (roleElement && !reduceMotion) {
    let roleIndex = 0;
    window.setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleElement.classList.add("role-changing");
      roleElement.textContent = roles[roleIndex];
      window.setTimeout(() => roleElement.classList.remove("role-changing"), 180);
    }, 3200);
  }

  // Project category filters.
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const projectCards = [...document.querySelectorAll(".project-card[data-category]")];
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("is-selected", active);
        item.setAttribute("aria-pressed", String(active));
      });
      projectCards.forEach(card => {
        card.hidden = selected !== "all" && card.dataset.category !== selected;
      });
    });
  });

  // Sticky header state.
  const updateScrollState = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  // Highlight the current navigation section.
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-32% 0px -58% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();