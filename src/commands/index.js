import { cmdHelp } from './help.js';
import { cmdWhoami, cmdAbout } from './about.js';
import { cmdProjects } from './projects.js';
import { cmdSkills } from './skills.js';
import { cmdEducation } from './education.js';
import { cmdExperience } from './experience.js';
import { cmdAchievements } from './achievements.js';
import { cmdContact } from './contact.js';
import { cmdHire } from './hire.js';
import { cmdLs } from './ls.js';
import { cmdNow } from './now.js';
import { cmdSecret, cmdSudo, cmdCoffee, cmdExit } from './easter.js';

const REGISTRY = {
  help: cmdHelp,
  whoami: cmdWhoami,
  about: cmdAbout,
  'cat about.md': cmdAbout,
  'cat achievements.md': cmdAchievements,
  skills: cmdSkills,
  'skills --filter ml': () => cmdSkills('ml'),
  'skills --filter fullstack': () => cmdSkills('fullstack'),
  education: cmdEducation,
  experience: cmdExperience,
  achievements: cmdAchievements,
  contact: cmdContact,
  hire: cmdHire,
  ls: cmdLs,
  'ls projects': () => cmdLs('projects'),
  now: cmdNow,
  secret: cmdSecret,
  sudo: cmdSudo,
  coffee: cmdCoffee,
  exit: cmdExit,
};

// cd projects → ls projects
const CD_MAP = {
  'cd projects': () => cmdLs('projects'),
  'cd skills': cmdSkills,
  'cd experience': cmdExperience,
};

// cat <project>.md → project detail
const CAT_PROJECT = ['refugeeroutes', 'captioning', 'rag', 'facemask'];

const NOT_FOUND_RESPONSES = [
  (cmd) => `command not found: <span class="o-amber">${cmd}</span> — try <span class="o-amber">help</span>`,
  (cmd) => `hmm, <span class="o-amber">${cmd}</span> isn't a command. type <span class="o-amber">help</span> to see what's here`,
  (cmd) => `unknown: <span class="o-amber">${cmd}</span> — did you mean <span class="o-amber">projects</span> or <span class="o-amber">skills</span>?`,
  () => `not a command. tab-complete works if you're close — give it a try`,
];
let notFoundIdx = 0;

export function runCommand(raw) {
  if (raw === 'clear') return [{ type: 'clear' }];

  const parts = raw.trim().split(/\s+/);
  const cmd = parts[0];
  const args = parts.slice(1);

  // cd routing
  if (CD_MAP[raw]) return CD_MAP[raw]();

  // cat <project>.md
  if (cmd === 'cat') {
    const filename = args[0]?.replace('.md','');
    if (CAT_PROJECT.includes(filename)) return cmdProjects([filename]);
    if (filename === 'about') return cmdAbout();
    if (filename === 'achievements') return cmdAchievements();
  }

  // projects subcommand
  if (cmd === 'projects') return cmdProjects(args);

  // skills filter
  if (cmd === 'skills') {
    const filter = args.find(a => a.startsWith('--filter'))?.split('=')[1] || args[1];
    return cmdSkills(filter);
  }

  // ls subcommand
  if (cmd === 'ls') return cmdLs(args[0]);

  // registry lookup
  if (REGISTRY[raw]) return REGISTRY[raw]();
  if (REGISTRY[cmd]) return REGISTRY[cmd](args);

  // rotating not-found messages
  const msg = NOT_FOUND_RESPONSES[notFoundIdx % NOT_FOUND_RESPONSES.length](raw);
  notFoundIdx++;
  return [
    { type: 'red', text: msg },
  ];
}