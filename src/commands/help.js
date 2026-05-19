export function cmdHelp() {
  return [
    { type: 'head', text: 'available commands:' },
    { type: 'br' },
    { type: 'cmd-table', rows: [
      ['whoami', 'know me!'],
      ['about', 'my background and what drives me'],
      ['now', "what I'm working on, currently"],
      ['projects', 'list of all projects'],
      ['projects "project_name"', 'details on a specific project'],
      ['skills', 'tech stack & mastery'],
      ['skills --filter "filter_name"', 'filter to skills in particular domains'],
      ['education', 'degree, GPA, coursework'],
      ['experience', 'salesforce · amazon · leadership'],
      ['achievements', 'awards, certifications, programs'],
      ['contact', 'how to get in touch <3'],
      ['hire', 'why work with me'],
      ['ls', 'filesystem'],
      ['ls projects', 'list project files'],
      ['cd "directory_name"', 'navigate into a directory'],
      ['cat <file>.md', 'open about, achievements, or any project'],
      ['clear', 'wipe the terminal'],
    ]},
    { type: 'br' },
    { type: 'dim', text: 'tab → autocomplete · ↑↓ → history · click chips → instant run' },
  ];
}