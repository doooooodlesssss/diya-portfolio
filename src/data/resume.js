export const ME = {
  name: 'Diya Bangera',
  email: 'bangera.diya@gmail.com',
  phone: 'aa',
  github: 'github.com/doooooodlesssss',        // ← fill in
  linkedin: 'linkedin.com/in/diyabangera', // ← fill in
  leetcode: 'leetcode.com/YOUR_HANDLE',    // ← fill in
};

export const NOW = {
  building: 'Preparing for Salesforce AMTS internship — brushing up on system design and Apex',
  reading: 'Designing Data-Intensive Applications — Kleppmann',
  thinking: 'Why most RAG pipelines fail in production and what grounding actually requires',
  next: 'Submit BTP paper draft by end of month',
  updated: 'May 2026',
};
// ↑ Update this every month. It's the signal that you're alive and working.

export const PROJECTS = [
  {
    id: 'refugeeroutes',
    title: 'RefugeeRoutes — Migration Analytics Platform',
    short: 'Migration analytics platform over 180K+ UNHCR records. 45% query latency reduction, 75% reporting effort cut.',
    tags: [['MongoDB','amber'],['React + TypeScript','blue'],['Node.js','green'],['Python','green']],
    github: 'https://github.com/doooooodlesssss/RefugeeRoutes',
    bullets: [
      'React + MUI dashboard: cross-country flow maps, temporal trends, displacement surge detection',
      'MongoDB aggregation pipeline + indexing over <b>180K+ UNHCR records</b>',
      '<b>~45% reduction</b> in geospatial query latency through optimized indexing',
      '<b>~75% reduction</b> in reporting effort — automated region-wise risk and economic insights',
      'Node.js REST API, TypeScript frontend with full type safety, PyMongo data layer',
    ],
    impact: 'Refugee data informs aid allocation, resettlement policy, and emergency response. Making it legible and fast is an engineering choice with real humanitarian weight.',
  },
  {
    id: 'captioning',
    title: 'Dual-Attention Spectral Fusion Image Captioning',
    short: '+17.6% BLEU-4, +22% CIDEr over baseline on MSCOCO-2014. Novel frequency-domain fusion + dual Bahdanau attention.',
    tags: [['PyTorch','amber'],['YOLOv6','amber'],['LLaVA','green'],['Research','dim']],
    github: 'https://github.com/doooooodlesssss/Spectral-Dual-Attention-Captioning',
    bullets: [
      'YOLOv6 object detection → DCT/FFT frequency-domain embedding extraction',
      'Xception scene feature vectors for global spatial context',
      'Full Dual Bahdanau Attention over fused spectral + spatial representations',
      'GRU decoder for sequence generation',
      'LLaVA (instruction-tuned VLM) for caption refinement post-generation',
      'Ablation analysis with wide hyperparameter sweeps to validate each contribution',
    ],
    results: '<span class="o-green">+17.6% BLEU-4</span> · <span class="o-green">+22% CIDEr</span> over baseline on MSCOCO-2014',
  },
  {
    id: 'rag',
    title: 'RAG Mental Health Therapist Chatbot',
    short: 'Therapy-oriented chatbot. 14K chunks, <900ms retrieval latency, ~30% contextual relevance improvement.',
    tags: [['LangChain','amber'],['FAISS','amber'],['Mistral-7B','blue'],['HuggingFace','green']],
    github: 'https://github.com/doooooodlesssss/Mental-Health-Chatbot',
    bullets: [
      'Corpus: psychology books and clinical manuals → <b>~14,000 chunks</b>',
      'Sentence-Transformers embeddings → FAISS vector DB for semantic retrieval',
      'Retrieval latency: <b>&lt;900ms</b>',
      'Generator: Mistral-7B with contextual grounding for domain-specific responses',
      '<b>~30% improvement</b> in contextual relevance vs. base LLM (no RAG)',
      'Streamlit UI enabling realistic therapy session flow',
    ],
    impact: 'RAG grounding was chosen to reduce hallucination and keep responses anchored in validated psychological frameworks — not LLM priors.',
  },
  {
    id: 'facemask',
    title: 'Deep CNN Face Mask Detector',
    short: '~95% validation accuracy. End-to-end pipeline on 12K labeled images.',
    tags: [['TensorFlow','amber'],['Keras','amber'],['OpenCV','blue'],['Python','green']],
    github: 'https://github.com/doooooodlesssss/Face-Mask-Detection-using-Deep-CNN',
    bullets: [
      'Dataset: ~12,000 labeled images (mask / no-mask), fully preprocessed',
      'Data augmentation + regularization for strong generalization',
      'Learning-rate tuning for stable convergence',
      '<b>~95% validation accuracy</b>',
      'Optimized TF input pipeline for inference throughput and reproducibility',
    ],
  },
];

export const SKILLS = [
  { label: 'languages', items: [['Python',90],['C++',85],['TypeScript / JavaScript',78],['SQL',72]] },
  { label: 'ml & deep learning', items: [['PyTorch',85],['TensorFlow / Keras',82],['HuggingFace Transformers',80],['LangChain / RAG',78],['FAISS / vector search',76]] },
  { label: 'full-stack & data', items: [['React.js + MUI',78],['Node.js / REST APIs',75],['MongoDB + aggregation',80],['AWS',60]] },
  { label: 'tools', items: [['Git',88],['OpenCV',72],['Streamlit',75],['DSA',82]] },
  { label: 'exploring', items: [['System design',65],['Distributed systems',60],['WebGL / Three.js',35]] },
];

export const ACHIEVEMENTS = [
  { icon: '🏆', title: 'Salesforce Futureforce Tech Accelerator 2025', desc: 'Top 100 from 50,000+ global applicants' },
  { icon: '📈', title: 'Perplexity AI Campus Champion', desc: 'Drove adoption to 1,500+ users at NSUT — highest institutional uptake nationally' },
  { icon: '🎓', title: 'NPTEL: Psychology of Learning (IIT Kharagpur)', desc: 'Score: 100%' },
  { icon: '🌐', title: 'Google Women Techmakers Program', desc: 'Shortlisted for global initiative recognizing women in tech' },
  { icon: '💻', title: 'GSSoC Extended 2024', desc: 'Open-source contributions with 200+ developers' },
  { icon: '☁️', title: 'Microsoft Azure Cognitive Services', desc: 'Built CV app for scalable image recognition workflows' },
];

export const EXPERIENCE = [
  { role: 'Salesforce Futureforce Tech Accelerator', org: 'Salesforce', period: '2025', tags: [['Top 100 / 50,000+','green']], desc: 'Selected as one of top 100 candidates globally. Accelerator program for high-potential engineering talent.' },
  { role: 'Amazon WOW Program — Member & Mentee', org: 'Amazon', period: 'Sep 2023 – Jul 2025', tags: [['Mentorship','blue']], desc: '10+ mentor-led sessions in SWE and ML. DSA, algorithms, system design, industry-grade problem solving.' },
  { role: 'Executive Member', org: 'Google Developer Student Clubs, NSUT', period: 'ongoing', tags: [['AI/ML','amber'],['Web Dev','blue']], desc: 'AI/ML/DL and web dev workshops, hackathons, technical sessions.' },
  { role: 'GSSoC Extended 2024', org: 'GirlScript Summer of Code', period: '2024', tags: [['Open Source','dim']], desc: 'Collaborative open-source development with 200+ developers.' },
  { role: 'Graphic Designer', org: 'Crosslinks, NSUT', period: 'ongoing', tags: [['Design','dim']], desc: '50+ event creatives. Raised visibility and turnout across university events.' },
  { role: 'Executive Committee Member', org: 'Rotaract NSIT', period: 'ongoing', tags: [['Leadership','dim']], desc: 'Led teams for social impact initiatives benefiting 200+ people.' },
  { role: 'Volunteer', org: 'National Service Scheme (NSS)', period: 'ongoing', tags: [['Community','dim']], desc: '105+ volunteer hours in educational outreach and community upliftment.' },
];