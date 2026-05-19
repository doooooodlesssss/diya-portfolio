export function cmdHire() {
  return [
    { type: 'head', text: 'why hire me' },
    { type: 'br' },
    { type: 'metrics', items: [
      { value: 'Top 100', label: 'of 50,000+ applicants', sub: 'Salesforce Futureforce' },
      { value: '+17.6%', label: 'BLEU-4 improvement', sub: 'vs baseline on MSCOCO' },
      { value: '45%', label: 'query latency cut', sub: 'on 180K+ UNHCR records' },
      { value: '100%', label: 'NPTEL score', sub: 'IIT Kharagpur certification' },
    ]},
    { type: 'br' },
    { type: 'cream', text: "I like to build with real numbers attached, so almost every project has a measurable outcome." },
    { type: 'br' },
    {
      type: 'cream',
      text: `I work across the full stack: C++, PyTorch, TensorFlow, HuggingFace, MERN, REST API, AWS (run <span class="o-amber">skills</span> to know more)`
    },
    { type: 'br' },
    // { type: 'cream', text: "I was among the top 100 out of 50,000+ for Salesforce and drove the highest institutional adoption Perplexity AI in India." },
    // { type: 'br' },
    { type: 'cream', text: '→ run <span class="o-amber">contact</span> to reach (& potentially hire) me.' },
    { type: 'br' },
  ];
}