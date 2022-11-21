import config from '../../../config.json';

//export const instagram = async (args: string[]): Promise<string> => {
//  window.open(`https://www.instagram.com/${config.social.instagram}/`);
//
//  return 'Opening instagram...';
//};
//
//export const github = async (args: string[]): Promise<string> => {
//  window.open(`https://github.com/${config.social.github}/`);
//
//  return 'Opening github...';
//};import config from '../../../config.json';

//export const instagram = async (args: string[]): Promise<string> => {
//  window.open(`https://www.instagram.com/${config.social.instagram}/`);
//
//  return 'Opening instagram...';
//};
//
//export const github = async (args: string[]): Promise<string> => {
//  window.open(`https://github.com/${config.social.github}/`);
//
//  return 'Opening github...';
//};
//
//export const linkedin = async (args: string[]): Promise<string> => {
//  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
//
//  return 'Opening linkedin...';
//};
//export const docx = async (args: string[]): Promise<string> => {
//  window.open(`${config.social.blog}`);
//
//  return 'Opening Docx...';
//};
//export const email = async (args: string[]): Promise<string> => {
//  window.open('mailto:hari.jeya@outlook.fr');
//  return 'Opening mailto:hari.jeya@outlook.fr...';
//};


// version 2 
//      juste une liste cliquable
//export const links = (args?: string[]): string => {
//  return `
//  <a href="https://www.instagram.com/${config.social.instagram}/" target="_blank" rel="noopener noreferrer">Instagram</a>
//  <a href="https://github.com/${config.social.github}/" target="_blank" rel="noopener noreferrer">GitHub</a>
//  <a href="https://www.linkedin.com/in/${config.social.linkedin}/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//  <a href="mailto:${config.social.mail}" target="_blank" rel="noopener noreferrer">E-mail</a>
//
//  and Now you want to see some real stuf ?
//  Lez go!!!
//  <a href="https://ozint.eu/ozinter/${config.social.ozint}/" target="_blank" rel="noopener noreferrer">Ozint</a>
//  <a href="https://tryhackme.com/p/${config.social.THM}" target="_blank" rel="noopener noreferrer">TryHackMe</a>
//  <a href="https://app.hackthebox.com/profile/${config.social.HTb}" target="_blank" rel="noopener noreferrer">HackTheBox</a>
//  `
//};
  
// *****version 3
//*********commande avec option
    export const links = async (
      args: string[],
      callback?: (value: string) => string,
    ): Promise<string> => {
      if (args.length === 0) {
        return `Usage: links [arg]
        Args:
          - ls: list all the links
          - open: open a specific link
          - random: open a random link
        
        Example: theme
          links ls # to list all the way to say hello to me
          links open instagram # to open my insta account`;
      }
    
      switch (args[0]) {
        case 'ls':
          let result = Object.keys(config.social).join('<br>');
          result += '\n\n';
    
          return result;
        case 'set':
          const selectedTheme = args[1];
    
          return callback(selectedTheme);
        case 'random':
          const randomTheme = Themes[Math.floor(Math.random() * Themes.length)];
    
          return callback(randomTheme.name.toLowerCase());
      }
    };