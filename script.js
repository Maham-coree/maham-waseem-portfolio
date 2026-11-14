(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const header = document.querySelector(".site-header");
  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal content as it enters the viewport.
  const revealTargets = document.querySelectorAll(
    ".section-kicker, .section-heading, .section-grid, .skill-card, .project-card, .experience-card, .cert-card, .contact-section h2"
  );
  revealTargets.forEach((el, index) => {
    el.classList.add("reveal");
    if (el.classList.contains("skill-card") || el.classList.contains("cert-card")) {
      el.style.transitionDelay = `${(index % 3) * 70}ms`;
    }
  });

  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add("is-visible"));
  }

  // Subtle sticky-header state and section-aware navigation.
  const updateScrollState = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();