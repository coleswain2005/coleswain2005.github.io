const slug = new URLSearchParams(window.location.search).get('project');
const project = Object.hasOwn(projects, slug) ? projects[slug] : null;
const node = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};
const link = (id, title, className) => {
  const el = node('a', className, title);
  el.href = `project.html?project=${encodeURIComponent(id)}`;
  return el;
};
const breadcrumbs = document.querySelector('#projectBreadcrumbs');
const home = node('a', '', 'Projects');
home.href = 'index.html#projects';
breadcrumbs.append(home);
if (!project) {
  document.title = 'Project Not Found — Cole Swain';
  document.querySelector('#projectTitle').textContent = 'Project Not Found';
  document.querySelector('#projectDescription').textContent = 'This project link is unavailable. Return to all Projects to explore the portfolio.';
  document.querySelector('#projectVisual').hidden = true;
  document.querySelector('.project-detail-layout').classList.add('project-text-layout');
  document.querySelector('.project-detail-tools').hidden = true;
} else {
  const parent = projects[project.parent];
  if (parent) breadcrumbs.append(node('span', '', '/'), link(project.parent, parent.title));
  const current = node('span', '', project.title);
  current.setAttribute('aria-current', 'page');
  breadcrumbs.append(node('span', '', '/'), current);
  document.title = `${project.title} — Cole Swain`;
  document.querySelector('meta[name="description"]').content = project.description;
  document.querySelector('#projectContext').textContent = project.organization || parent?.organization || 'Engineering case study';
  document.querySelector('#projectTitle').textContent = project.title;
  document.querySelector('#projectDescription').textContent = project.description;
  document.querySelector('#projectTools').textContent = project.tools;
  document.querySelector('#projectTags').replaceChildren(...project.tags.map(tag => node('span', 'tag', tag)));
  document.querySelector('#projectSpecs').replaceChildren(...project.specs.map(([key, value]) => {
    const item = node('div', 'project-detail-spec');
    item.append(node('span', '', key), node('strong', '', value));
    return item;
  }));
  document.querySelector('#projectSpecs').hidden = !project.specs.length;
  if (project.heroImage) {
    const image = node('img');
    image.src = project.heroImage.src;
    image.alt = project.heroImage.alt;
    image.decoding = 'async';
    document.querySelector('#projectVisual').replaceChildren(image);
  } else {
    document.querySelector('#projectVisual').hidden = true;
    document.querySelector('.project-detail-layout').classList.add('project-text-layout');
  }
  if (project.role) {
    const role = node('div', 'project-role');
    role.append(node('h2', '', 'My role & project scope'), node('p', '', project.role));
    document.querySelector('#projectOverview').append(role);
  }
  if (project.children?.length) {
    const section = document.querySelector('#projectChildren');
    section.hidden = false;
    section.append(node('div', 'project-detail-label', 'Explore the engineering'), node('h2', '', 'Technical case studies'));
    const grid = node('div', 'case-study-grid');
    for (const id of project.children) {
      const child = projects[id];
      const card = link(id, '', 'case-study-card');
      if (child.heroImage) {
        const img = node('img');
        img.src = child.heroImage.src;
        img.alt = child.heroImage.alt;
        img.loading = 'lazy';
        card.append(img);
      }
      const body = node('div');
      body.append(node('h3', '', child.title), node('p', '', child.description), node('span', 'case-study-action', 'Read case study →'));
      card.append(body);
      grid.append(card);
    }
    section.append(grid);
  }
  if (project.story?.length) {
    const story = document.querySelector('#projectStory');
    story.hidden = false;
    project.story.forEach((section, i) => {
      const item = node('section', 'project-story-item');
      item.id = `technical-${i + 1}`;
      item.append(node('div', 'project-detail-label', `${String(i+1).padStart(2, '0')} / Engineering notes`), node('h2', '', section.title), node('p', '', section.text));
      story.append(item);
    });
  }
  if (project.gallery?.length) {
    const gallery = document.querySelector('#projectGallery');
    gallery.hidden = false;
    gallery.append(node('h2', 'project-gallery-heading', 'Design & hardware documentation'));
    project.gallery.forEach(item => {
      const figure = node('figure');
      const a = node('a', 'technical-image-link');
      a.href = item.src;
      a.setAttribute('aria-label', `Enlarge: ${item.alt}`);
      const img = node('img');
      img.src = item.src;
      img.alt = item.alt;
      img.loading = 'lazy';
      img.decoding = 'async';
      a.append(img);
      a.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const dialog = document.querySelector('#imageDialog');
        if (!dialog.showModal) return;
        event.preventDefault();
        const enlarged = document.querySelector('#enlargedImage');
        enlarged.src = item.src;
        enlarged.alt = item.alt;
        document.querySelector('#imageCaption').textContent = item.caption;
        dialog.showModal();
      });
      figure.append(a, node('figcaption', '', item.caption));
      gallery.append(figure);
    });
  }
  if (parent) {
    const nav = document.querySelector('#projectReturn');
    nav.append(link(project.parent, `← ${parent.title}`, 'btn-secondary'));
    const siblings = parent.children?.filter(id => id !== slug) || [];
    if (siblings.length) nav.append(link(siblings[0], `Next: ${projects[siblings[0]].title} →`, 'project-sibling'));
  }
}
const dialog = document.querySelector('#imageDialog');
document.querySelector('#closeImage').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
