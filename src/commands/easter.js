export function cmdSecret() {
  return [
    { type: 'amber', text: 'you found it.' },
    { type: 'br' },
    { type: 'cream', text: 'things I actually believe:' },
    { type: 'br' },
    // ↓ DELETE THESE AND WRITE YOUR OWN. 5 things, specific, personal.
    { type: 'cream', text: '<span class="o-dim">01.</span> [your belief here — something about ML, systems, or design]' },
    { type: 'cream', text: '<span class="o-dim">02.</span> [your belief here]' },
    { type: 'cream', text: '<span class="o-dim">03.</span> [your belief here]' },
    { type: 'cream', text: '<span class="o-dim">04.</span> [your belief here]' },
    { type: 'cream', text: '<span class="o-dim">05.</span> [your belief here]' },
    { type: 'br' },
    { type: 'dim', text: 'try: sudo · coffee · exit · now' },
  ];
}

export function cmdSudo() {
  return [
    { type: 'red', text: 'Permission denied.' },
    { type: 'dim', text: 'nice try.' },
  ];
}

export function cmdCoffee() {
  return [{ type: 'coffee' }]; // handled as animation in Terminal.jsx
}

export function cmdExit() {
  return [
    { type: 'dim', text: "you can't exit a portfolio. you're already here." },
    { type: 'cream', text: `if you're done — run <span class="o-amber">contact</span> first.` },
    // { type: 'cream', text: "if you're done — run <span class="o-amber">contact</span> first." },
  ];
}