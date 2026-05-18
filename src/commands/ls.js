export function cmdLs(sub) {
  if (sub === 'projects') {
    return [
      { type: 'amber', text: 'projects/' },
      { type: 'cream', text: '<span class="o-dim">-rw-r--r--</span>  <span class="o-cream">refugeeroutes.md</span>    <span class="o-dim">migration analytics · MongoDB · React</span>' },
      { type: 'cream', text: '<span class="o-dim">-rw-r--r--</span>  <span class="o-cream">captioning.md</span>       <span class="o-dim">dual-attention · PyTorch · MSCOCO</span>' },
      { type: 'cream', text: '<span class="o-dim">-rw-r--r--</span>  <span class="o-cream">rag.md</span>              <span class="o-dim">LangChain · Mistral · FAISS</span>' },
      { type: 'cream', text: '<span class="o-dim">-rw-r--r--</span>  <span class="o-cream">facemask.md</span>         <span class="o-dim">TensorFlow · CNN · OpenCV</span>' },
      { type: 'br' },
      { type: 'dim', text: 'run cat <filename>.md to open a project' },
      { type: 'br' },
      { type: 'hints', chips: ['cat refugeeroutes.md','cat captioning.md','cat rag.md','cat facemask.md'] },
    ];
  }

  return [
    { type: 'cream', text: '<span class="o-dim">drwxr-xr-x</span>  <span class="o-amber">projects/</span>    <span class="o-dim">4 items</span>' },
    { type: 'cream', text: '<span class="o-dim">drwxr-xr-x</span>  <span class="o-amber">skills/</span>' },
    { type: 'cream', text: '<span class="o-dim">drwxr-xr-x</span>  <span class="o-amber">experience/</span>' },
    { type: 'cream', text: '<span class="o-dim">-rw-r--r--</span>  <span class="o-cream">about.md</span>' },
    { type: 'cream', text: '<span class="o-dim">-rw-r--r--</span>  <span class="o-cream">achievements.md</span>' },
    { type: 'cream', text: '<span class="o-dim">-rw-r--r--</span>  <span class="o-cream">contact.txt</span>' },
    { type: 'cream', text: '<span class="o-dim">-rwxr-x---</span>  <span class="o-amber">hire.sh</span>' },
    { type: 'br' },
    { type: 'hints', chips: ['cd projects','cat about.md','cat achievements.md','hire'] },
  ];
}