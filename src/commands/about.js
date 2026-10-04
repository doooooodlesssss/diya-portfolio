import { ME } from '../data/resume.js';

// export function cmdWhoami() {
//   return [
//     { type: 'cream', text: `I'm a comp science major with a minor in AI at NSUT Delhi. 
//     I like to build ML systems and full-stack platforms that solve real problems. 
//     Top 100 @ Salesforce Futureforce.` },
//     { type: 'br' },
//     { type: 'hints', chips: ['about','projects','achievements'] },
//   ];
// }

export function cmdWhoami() {
  return [
    {
      type: 'cream',
      text: `
      <pre class="ascii-art">
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%############%
      @@@@@@@@@@@@@@%@%%@@@%%%*#@@@%%%%%%%##%@@@%%@@
      @@@@@@@@@@%*==::.      :-  #@@@@%%%%%%@@@@@@@@
      @@@@@@@@@%+=:.. -- :+ .+=-  .*%%@@@%#*-: *@@@@
      @@@@@@@@%+=.  =:  :: :@@@@%*..=@@@%++=:-@@@@@@
      @@@@@@@@*+#:.-:   .  -#@@@%#*  .==:  -@@@@@@@@
      @@@@@@@@%+=..     : .*#%+++      =-+*@@@+%@@@@
      @@@@@@@+:.. .     : .*=  :@@++=  -*=#@@@%@@@%+
      @@@%+:.:*@@@+.         :*@@@@@#: :=*%*+*%-=-:-
      @%+-.:.-+@@@#.     .-=*@@%*-::=:  .-%*%+--=-..
      +-:.   :-:  =:       .:=**#+:.:  -:+%%%*+-**#-
      ::    .--  .+.         .:::::=+.  .#*+:.-%#.+%
      @#%@#@@@%%@%:.:.         .:-:   .  :   .::*%#@
      @@%*@@%#*=-.:. .:      :         :%@*#**-=-=#%
      --===++**%@*++: :::   +@@#-=-::  -@@@@@@@@#:#@
      ++#%@@@@#::==. .:.  .+@@@%@@@@@@+-%@@@@@@@@@@@
      @@%####*-   -: ..   =@@@@@@@@@@@@*=@@@@@@@@@@@
      </pre>
      `
    },

    {
      type: 'cream',
      text: `Hi! I'm a comp science major with a minor in AI at NSUT Delhi.
      I like to build ML systems and full-stack, scalable platforms that solve real problems.
      Incoming @ Salesforce.`
    },

    { type: 'br' },
    { type: 'hints', chips: ['about', 'projects', 'experience', 'contact'] },
  ];
}




export function cmdAbout() {
  return [
    // { type: 'head', text: 'about' },
    // { type: 'br' },
    // {type: 'cream', text: `Hi! I'm a comp science senior with a minor in AI at NSUT Delhi. I like to build ML systems and full-stack, scalable platforms that solve real problems. Incoming @ Salesforce.`}
    { type: 'cream', text: "Hey, I'm a fourth-year CS student at NSUT Delhi, specializing in AI." },
    { type: 'br' },
    { type: 'cream', text: "My projects include a dual-attention captioning architecture that beats MSCOCO baselines by 17.6% BLEU-4, a RAG chatbot with sub-900ms latency over 14K chunks, a migration platform over 180K+ UNHCR records." },
    { type: 'br' },
    { type: 'cream', text: "I drove Perplexity AI adoption to 1,500+ users and have logged 105+ NSS volunteer hours. I lift too." },
    // { type: 'br' },
    // { type: 'dim', text: 'currently: Salesforce Futureforce · NSUT · open to research collabs' },
    { type: 'br' },
    { type: 'hints', chips: ['projects','experience','contact'] },
  ];
}
