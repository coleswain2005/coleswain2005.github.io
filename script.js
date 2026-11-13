const navToggle = document.querySelector('#navToggle');
const navLinks = document.querySelector('#navLinks');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const filterButtons = document.querySelectorAll('#projects .filter-btn');
const projectCards = document.querySelectorAll('#projects .project-card');
function filterProjects(selectedFilter) {
  filterButtons.forEach(button => {
    const active = button.dataset.filter === selectedFilter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  projectCards.forEach(card => {
    const show = selectedFilter === 'all' || card.dataset.tags.split(' ').includes(selectedFilter);
    card.classList.toggle('hidden', !show);
    card.hidden = !show;
    if (show) visible++;
  });
  const count = document.querySelector('#projectCount');
  if (count) count.textContent = `${visible} project collection${visible === 1 ? '' : 's'}`;
}
filterButtons.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
// Keep Experience's existing fragment links intact and resolve them to their
// preserved case-study URLs, including links opened directly in a new tab.
const legacyProjectIds = new Set(['disk-weapon', 'weapon-hub', 'qc-fixture', 'press-fit', 'pivot-test-stand', 'legacy-reverse-engineering', 'python-workflow', 'fan-propulsion', 'drone-payload', 'aluminum-chair']);
function resolveLegacyProject() {
  const id = window.location.hash.replace('#project-', '');
  if (window.location.hash.startsWith('#project-') && legacyProjectIds.has(id)) {
    window.location.replace(`project.html?project=${encodeURIComponent(id)}`);
  }
}
window.addEventListener('hashchange', resolveLegacyProject);
resolveLegacyProject();

const revealItems = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const navbar = document.querySelector('#navbar');
const sections = document.querySelectorAll('section[id]');
const sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const updateNavbar = () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 80);
};

updateNavbar();
window.addEventListener('scroll', updateNavbar, { passive: true });

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleSection) return;

      sectionLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${visibleSection.target.id}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    },
    {
      rootMargin: '-25% 0px -60% 0px',
      threshold: [0, 0.15, 0.4],
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
