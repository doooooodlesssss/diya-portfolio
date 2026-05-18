import { PROJECTS } from '../data/resume.js';

function badge(t, c) { return `<span class="badge badge-${c}">${t}</span>`; }

export function cmdProjects(args) {
  const sub = args && args[0];
  if (sub) {
    const p = PROJECTS.find(p => p.id === sub);
    if (p) return projectDetail(p);
    return [{ type: 'red', text: `project not found: ${sub}` }];
  }

  return [
    { type: 'head', text: 'projects' },
    { type: 'br' },
    ...PROJECTS.map(p => ({
      type: 'project-card',
      title: p.title,
      tags: p.tags,
      desc: p.short,
      meta: `run <span class="o-amber">projects ${p.id}</span> for full breakdown`,
    })),
    { type: 'hints', chips: PROJECTS.map(p => `projects ${p.id}`) },
  ];
}

function projectDetail(p) {
  const lines = [
    { type: 'head', text: p.title },
    { type: 'sub', text: p.tags.map(([t,c]) => badge(t,c)).join('') },
    { type: 'br' },
    ...p.bullets.map(b => ({ type: 'cream', text: `<span class="o-green">→</span> ${b}` })),
  ];

  if (p.results) {
    lines.push({ type: 'br' });
    lines.push({ type: 'amber', text: 'results' });
    lines.push({ type: 'cream', text: p.results });
  }

  if (p.impact) {
    lines.push({ type: 'br' });
    lines.push({ type: 'amber', text: 'why it matters' });
    lines.push({ type: 'cream', text: p.impact });
  }

  if (p.github) {
    lines.push({ type: 'br' });
    lines.push({
      type: 'cream',
      text: `github: <a href="${p.github}" target="_blank" rel="noopener" class="terminal-link">${p.github.replace('https://','')}</a>`,
    });
  }

  lines.push({ type: 'br' });
  const others = PROJECTS.filter(x => x.id !== p.id).map(x => `projects ${x.id}`);
  lines.push({ type: 'hints', chips: [...others.slice(0,3), 'skills'] });
  return lines;
}