import { ME } from '../data/resume.js';

export function cmdContact() {
  return [
    { type: 'head', text: 'contact' },
    { type: 'br' },
    { type: 'cream', text: `<span class="o-dim" style="display:inline-block;min-width:100px">email</span><a href="mailto:${ME.email}" class="terminal-link">${ME.email}</a>` },
    // { type: 'cream', text: `<span class="o-dim" style="display:inline-block;min-width:100px">phone</span><span class="o-cream">${ME.phone}</span>` },
    { type: 'cream', text: `<span class="o-dim" style="display:inline-block;min-width:100px">github</span><a href="https://${ME.github}" target="_blank" rel="noopener" class="terminal-link">${ME.github}</a>` },
    { type: 'cream', text: `<span class="o-dim" style="display:inline-block;min-width:100px">linkedin</span><a href="https://${ME.linkedin}" target="_blank" rel="noopener" class="terminal-link">${ME.linkedin}</a>` },
    // { type: 'cream', text: `<span class="o-dim" style="display:inline-block;min-width:100px">leetcode</span><a href="https://${ME.leetcode}" target="_blank" rel="noopener" class="terminal-link">${ME.leetcode}</a>` },
    { type: 'br' },
    { type: 'dim', text: 'open to: ml research · full-stack roles · hackathon teams · interesting problems' },
    { type: 'br' },
    { type: 'hints', chips: ['hire','about','projects'] },
  ];
}