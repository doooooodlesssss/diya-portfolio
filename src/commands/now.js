import { NOW } from '../data/resume.js';

export function cmdNow() {
  return [
    { type: 'head', text: 'now' },
    { type: 'dim', text: `last updated: ${NOW.updated}` },
    { type: 'br' },
    { type: 'cream', text: `<span class="o-amber">building</span>   ${NOW.building}` },
    { type: 'br' },
    { type: 'cream', text: `<span class="o-amber">reading</span>    ${NOW.reading}` },
    { type: 'br' },
    { type: 'cream', text: `<span class="o-amber">thinking</span>   ${NOW.thinking}` },
    { type: 'br' },
    { type: 'cream', text: `<span class="o-amber">next</span>       ${NOW.next}` },
    { type: 'br' },
    { type: 'hints', chips: ['projects','experience','contact'] },
  ];
}