import { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/terminal.css';
import { runCommand } from '../commands/index.js';

const ALL_CMDS = [
  'help','whoami','about','now','projects',
  'projects refugeeroutes','projects captioning','projects rag','projects facemask',
  'skills','skills --filter ml','skills --filter fullstack',
  'education','experience','achievements','contact','hire',
  'ls','ls projects','cd projects','cat about.md','cat achievements.md',
  'cat refugeeroutes.md','cat captioning.md','cat rag.md','cat facemask.md',
  'clear','secret','coffee','matcha',
];

const QUICK_CMDS = ['help','projects','skills','experience','contact','hire','now'];

const PLACEHOLDERS = [
  'type a command...',
  'tab to autocomplete...',
  '↑↓ for command history...',
  'try: ls · cd projects · now...',
];

// function CoffeeAnimation({ onDone }) {
//   const [frame, setFrame] = useState(0);
//   const frames = ['[          ] 0%','[##        ] 20%','[#####     ] 50%','[########  ] 80%','[##########] 100%'];
//   useEffect(() => {
//     if (frame >= frames.length) { onDone?.(); return; }
//     const t = setTimeout(() => setFrame(f => f + 1), 200);
//     return () => clearTimeout(t);
//   }, [frame]);
//   if (frame >= frames.length) return <span style={{color:'var(--green)'}}>☕ ready. keep going.</span>;
//   return <span style={{color:'var(--amber)'}}>{frames[frame]}</span>;
// }
function CoffeeAnimation({ onDone }) {
  const [frame, setFrame] = useState(0);

  const frames = [
    '[          ] 0%',
    '[##        ] 20%',
    '[#####     ] 50%',
    '[########  ] 80%',
    '[##########] 100%'
  ];

  useEffect(() => {
    if (frame >= frames.length) {
      onDone?.();
      return;
    }

    const t = setTimeout(() => setFrame(f => f + 1), 200);
    return () => clearTimeout(t);
  }, [frame]);

  const done = frame >= frames.length;

  return (
    <div style={{ color: done ? 'var(--green)' : 'var(--amber)' }}>
      <div>
        {done ? frames[frames.length - 1] : frames[frame]}
      </div>

      {done && (
        <pre style={{ margin: '8px 0 0 0' }}>
{String.raw`
   )  (
  (   ) )
   ) ( (
 _______
|       |--.
|       |  |
'_______'--'

☕ here u go. 
`}
        </pre>
      )}
    </div>
  );
}

function MatchaAnimation({ onDone }) {
  const [frame, setFrame] = useState(0);

  const frames = [
    '[          ] 0%',
    '[##        ] 20%',
    '[#####     ] 50%',
    '[########  ] 80%',
    '[##########] 100%'
  ];

  useEffect(() => {
    if (frame >= frames.length) {
      onDone?.();
      return;
    }

    const t = setTimeout(() => setFrame(f => f + 1), 200);
    return () => clearTimeout(t);
  }, [frame]);

  const done = frame >= frames.length;

  return (
    <div style={{ color: done ? 'var(--green)' : 'var(--amber)' }}>
      <div>
        {done ? frames[frames.length - 1] : frames[frame]}
      </div>

      {done && (
        <pre style={{ margin: '8px 0 0 0' }}>
{String.raw`
       //
     _//__
    |//[] |
    |[] []|
    | ::: |
    |_____|
   
`}
        </pre>
      )}
    </div>
  );
}



export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // rotate placeholder
  useEffect(() => {
    const t = setInterval(() => setPlaceholderIdx(i => (i + 1) % PLACEHOLDERS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const addLines = useCallback((newLines) => {
    setLines(prev => [...prev, ...newLines]);
  }, []);

  const submitCommand = useCallback((raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    setCmdHistory(prev => [trimmed, ...prev]);
    setHistIdx(-1);
    const output = runCommand(trimmed.toLowerCase());

    if (output[0]?.type === 'clear') {
      setLines([
        { type: 'dim', text: 'all clear 🫡' },
        { type: 'br' },
        { type: 'hints', chips: ['help','projects','about'] },
      ]);
      return;
    }

    setLines(prev => [
      ...prev,
      { type: 'echo', text: trimmed },
      { type: 'br' },
      ...output,
      { type: 'br' },
    ]);
  }, []);

  useEffect(() => {
    const bootLines = [
      { type: 'dim', text: 'initializing portfolio runtime...' },
      { type: 'green', text: '✓ loaded all projects' },
      { type: 'green', text: '✓ indexed skills & experience' },
      { type: 'green', text: '✓ achievements verified' },
      { type: 'br' },
      { type: 'name', text: 'DIYA BANGERA 𓅭' },
      { type: 'dim', text: 'cse + ai undergrad · wannabe ml engineer · upcoming AMTS intern @ salesforce' },
      { type: 'br' },
      { type: 'cream', text: 'welcome :) type <span class="o-amber">help</span> to explore, or click a suggestion below:' },
      { type: 'br' },
      { type: 'hints', chips: ['help','whoami','projects','skills','contact'] },
    ];
    bootLines.forEach((line, i) => {
      setTimeout(() => setLines(prev => [...prev, line]), i * 110);
    });
  }, []);

  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const val = inputVal; setInputVal(''); submitCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistIdx(prev => { const n = Math.min(prev + 1, cmdHistory.length - 1); setInputVal(cmdHistory[n] || ''); return n; });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistIdx(prev => { const n = Math.max(prev - 1, -1); setInputVal(n === -1 ? '' : cmdHistory[n] || ''); return n; });
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const v = inputVal.toLowerCase().trim();
      const match = ALL_CMDS.find(c => c.startsWith(v) && c !== v);
      if (match) setInputVal(match);
    }
  };

  const renderLine = (line, i) => {
    if (line.type === 'br') return <div key={i} className="o-br" />;
    if (line.type === 'rule') return <hr key={i} className="rule" />;

    if (line.type === 'hints') return (
      <div key={i} className="hint-row">
        {line.chips.map(c => (
          <span key={c} className="hint-chip" onClick={() => submitCommand(c)}>❯ {c}</span>
        ))}
      </div>
    );

    if (line.type === 'echo') return (
      <div key={i} className="line">
        <span className="o-dim">diya@portfolio:~$</span>{' '}
        <span className="o-amber-bright">{line.text}</span>
      </div>
    );

    if (line.type === 'skill-bar') return (
      <div key={i} className="skill-bar-row">
        <span className="skill-name">{line.name}</span>
        <div className="skill-track">
          <div className={`skill-fill ${line.level}`} style={{ width: `${line.pct}%` }} />
        </div>
        <span className="o-dim" style={{ fontSize: 11, minWidth: 28, textAlign: 'right' }}>{line.pct}%</span>
      </div>
    );

    if (line.type === 'project-card') return (
      <div key={i} className="project-card">
        <div className="project-title">{line.title}</div>
        <div style={{ marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: line.tags.map(([t,c]) => `<span class="badge badge-${c}">${t}</span>`).join('') }} />
        <div className="project-desc" dangerouslySetInnerHTML={{ __html: line.desc }} />
        <div className="project-meta" dangerouslySetInnerHTML={{ __html: line.meta }} />
      </div>
    );

    if (line.type === 'cmd-table') return (
      <table key={i} className="cmd-table">
        <tbody>
          {line.rows.map(([cmd, desc], j) => (
            <tr key={j}><td className="o-amber">{cmd}</td><td className="o-dim">{desc}</td></tr>
          ))}
        </tbody>
      </table>
    );

    if (line.type === 'metrics') return (
      <div key={i} className="metrics-grid">
        {line.items.map((m, j) => (
          <div key={j} className="metric-card">
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-sub">{m.sub}</div>
          </div>
        ))}
      </div>
    );

    if (line.type === 'coffee') return (
      <div key={i} className="line">
        <CoffeeAnimation />
      </div>
    );

    if (line.type === 'matcha') return (
      <div key={i} className="line">
        <MatchaAnimation />
      </div>
    );

    const classMap = {
      name: 'o-amber o-bold', dim: 'o-dim', cream: 'o-cream',
      green: 'o-green', red: 'o-red', amber: 'o-amber',
      blue: 'o-blue', head: 'o-amber o-bold', sub: 'o-dim',
    };
    const style = line.type === 'name' ? { fontSize: 17, letterSpacing: '0.05em' } : {};
    return (
      <div key={i} className="line">
        <span className={classMap[line.type] || 'o-cream'} style={style} dangerouslySetInnerHTML={{ __html: line.text }} />
      </div>
    );
  };

  if (isMobile) return (
    <div className="mobile-warning">
      <div className="mobile-card">
        <div className="mobile-title">DIYA BANGERA</div>
        <div className="mobile-sub">This portfolio is a terminal — best experienced on desktop.</div>
        <div className="mobile-divider" />
        <div className="mobile-link-row">
          <a href="mailto:bangera.diya@gmail.com" className="terminal-link">email</a>
          <span className="o-dim">·</span>
          <a href="https://github.com/YOUR_HANDLE" target="_blank" rel="noopener" className="terminal-link">github</a>
          <span className="o-dim">·</span>
          <a href="https://linkedin.com/in/YOUR_HANDLE" target="_blank" rel="noopener" className="terminal-link">linkedin</a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app" onClick={() => inputRef.current?.focus()}>
      <div className="titlebar">
        <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
        <span className="titlebar-label">bangera.diya@portfolio ~ bash</span>
      </div>

      <div className="output-area" ref={outputRef}>
        {lines.map((line, i) => renderLine(line, i))}
      </div>

      {/* persistent command strip */}
      <div className="cmd-strip">
        {QUICK_CMDS.map(c => (
          <span key={c} className="strip-chip" onClick={() => { inputRef.current?.focus(); submitCommand(c); }}>{c}</span>
        ))}
      </div>

      <div className="input-row">
        <span className="prompt-label">diya@portfolio:~$</span>
        <input
          ref={inputRef}
          className="cmd-input"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder={PLACEHOLDERS[placeholderIdx]}
          autoFocus
        />
      </div>
    </div>
  );
}