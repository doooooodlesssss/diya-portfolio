import { EXPERIENCE } from '../data/resume.js';

function badge(t, c) { return `<span class="badge badge-${c}">${t}</span>`; }

export function cmdExperience() {
  const lines = [
    // { type: 'head', text: 'experience' },
    // { type: 'br' },
  ];
  EXPERIENCE.forEach(e => {
    lines.push({ type: 'cream', text: `<span class="o-amber o-bold">${e.role}</span> <span class="o-dim">@ ${e.org}</span>` });
    lines.push({ type: 'dim', text: e.period });
    lines.push({ type: 'cream', text: e.desc });
    lines.push({ type: 'cream', text: e.tags.map(([t,c]) => badge(t,c)).join('') });
    lines.push({ type: 'br' });
  });
  lines.push({ type: 'hints', chips: ['achievements','education','contact'] });
  return lines;
}