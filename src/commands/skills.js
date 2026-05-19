import { SKILLS } from '../data/resume.js';

const FILTER_MAP = {
  ml: ['ml & deep learning'],
  fullstack: ['full-stack & data'],
  tools: ['tools'],
  languages: ['languages'],
};

export function cmdSkills(filter) {
  const groups = filter
    ? SKILLS.filter(g => FILTER_MAP[filter]?.includes(g.label))
    : SKILLS;

  const lines = [
    // { type: 'head', text: filter ? `skills — ${filter}` : 'skills & tech stack' },
    { type: 'br' },
  ];

  if (groups.length === 0) {
    lines.push({ type: 'red', text: `unknown filter: ${filter}` });
    lines.push({ type: 'dim', text: 'try: skills --filter ml · skills --filter fullstack' });
    return lines;
  }

  groups.forEach(group => {
    lines.push({ type: 'amber', text: group.label });
    group.items.forEach(([name, pct]) => {
      lines.push({ type: 'skill-bar', name, pct, level: pct >= 80 ? 'high' : pct >= 60 ? 'mid' : 'low' });
    });
    lines.push({ type: 'br' });
  });

  lines.push({ type: 'hints', chips: filter ? ['skills','projects','contact'] : ['skills --filter ml','skills --filter fullstack','projects'] });
  return lines;
}