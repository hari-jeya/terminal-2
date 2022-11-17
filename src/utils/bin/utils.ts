import packageJson from '../../../package.json';    
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// export const gui = async (args: string[]): Promise<string> => {
//   window.open('https://m4tt72.com', '_self');

//   return 'Opening GUI version...';
// };

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:hari.jeya@outlook.fr');

  return 'Opening mailto:hari.jeya@outlook.fr...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/hari-jeya/terminal', '_blank');

  return 'Opening repository...';
};


export const banner = (args?: string[]): string => {
  return `
  ⠀⠀⠀ ⠀⠀⡾⠛⠳⣄⠀⣠⣤⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⣧⠘⣆⣿⠟⢹⠈⠁⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀██╗  ██╗ █████╗ ██████╗ ██╗         ██╗███████╗██╗   ██╗ █████╗ 
  ⠀⣠⣄⡀⠀⣠⣬⡓⡿⡏⠀⢸⠀⠀⡏⠸⣦⡴⣿⠛⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀██║  ██║██╔══██╗██╔══██╗██║         ██║██╔════╝╚██╗ ██╔╝██╔══██╗
  ⠀⢧⡐⣽⠟⠉⡟⠙⠃⡇⠀⠀⠀⠀⠀⠀⡽⠀⠀⠀⡏⣘⣿⠀⠀⠀⠀⠀⠀⠀███████║███████║██████╔╝██║         ██║█████╗   ╚████╔╝ ███████║
  ⠀⠀⠉⢻⡇⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇⢸⠃⠀⠀⠀⠀⠀⠀⠀██╔══██║██╔══██║██╔══██╗██║    ██   ██║██╔══╝    ╚██╔╝  ██╔══██║
  ⠀⠀⠀⢸⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀██║  ██║██║  ██║██║  ██║██║    ╚█████╔╝███████╗   ██║   ██║  ██║
  ⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝
  ⠀⠀⠀⢸⣇⡴⠛⣿⣦⠀⠀⠀⠀⠀⠀⢀⡞⠙⣿⣦⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀                                                                v${packageJson.version}
  ⠀⠀⠀⢸⡿⣷⣶⣿⣿⠀⠀⠀⠀⠀⠀⠘⣿⣶⣿⡿⠁⣿⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⢸⡇⠈⠉⠉⠁⢰⣶⣶⣶⣶⣶⠀⠈⠉⠉⠀⣄⣿⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠻⣴⡀⠀⠀⠈⠛⠿⠭⠔⠋⠀⠀⠀⣄⣰⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠈⠛⠿⠷⠤⣶⣤⣤⣤⣤⡾⠾⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⢠⡞⠳⣄⣀⣀⡴⢾⡷⣄⡇⢸⣿⢟⣲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀010100010101001101000010011010100110001000110010001100010111011101100100010110000101001001101100011000110110
  ⠀⠀⠀⠈⠳⣤⣼⣟⣩⡽⣿⠁⢮⠳⣼⠟⠛⣦⢉⣧⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀100101000010011100000110001101111001010000100111001101100001010101110111010001101100010010010100011101000110
  ⠀⠀⠀⠀⠀⠀⠉⠉⠀⢠⡿⢤⡈⢧⡟⠀⠀⠈⠿⣤⡼⠇⠀⠀⠀⠀⠀⠀⠀⠀011100000110001101101001010000100110101001100010001100100011010101101011011000010101100001010010011100000110
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⠄⠙⠻⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀001000110010001101010111000001100010011011010110001101100111001101000110111101000011010101000100100101000111
  ⠀⠀⠀⠀⠀⠀⠀⣶⣶⣾⣷⣶⣶⣿⣿⣿⣶⣶⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀011011000011000001001001010001110100101001101100010110010011001000111001011101000101101001011000010011010110
  ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀011101100100010110000100111001101100011000100100011101010110011110100110001101111001010000100011001101100001
  ⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀010001110101011001110101010010010100100001101100011101100110010001010011010000100111011001100011010001110101
  ⠀⠀⠀⠀⠀⠀⠀⠈⠿⢿⣿⣿⣿⣿⣿⣿⡿⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀011001110101010010010100100001100100011100000110001001101101010100100111011001100100001100110100110101110101


Type 'help' to see list of available commands.

--

👨‍💻 Welcome to my site, try the 'about' command to get some information 
about me and the site.

🎉 This project is open source try the 'repo' command to see the code on github

🧞‍♂️ Did you find all the easter eggs ??

--
`;
};
