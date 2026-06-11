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

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  const openProject = () => {
    const href = card.dataset.projectHref;
    if (href) window.location.href = href;
  };

  card.addEventListener('click', openProject);
  card.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openProject();
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach((card) => {
      const tags = card.dataset.tags?.split(' ') ?? [];
      const shouldShow = selectedFilter === 'all' || tags.includes(selectedFilter);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

document.querySelectorAll('.project-link').forEach((link) => {
  link.addEventListener('click', () => {
    filterButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.filter === 'all');
    });
    projectCards.forEach((card) => card.classList.remove('hidden'));
  });
});

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
