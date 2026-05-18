import { ACHIEVEMENTS } from '../data/resume.js';

export function cmdAchievements() {
  const lines = [
    { type: 'head', text: 'achievements & certifications' },
    { type: 'br' },
  ];
  ACHIEVEMENTS.forEach(a => {
    lines.push({ type: 'amber', text: `${a.icon} ${a.title}` });
    lines.push({ type: 'dim', text: `&nbsp;&nbsp;&nbsp;${a.desc}` });
    lines.push({ type: 'br' });
  });
  lines.push({ type: 'hints', chips: ['experience','contact','hire'] });
  return lines;
}