import config from '../../../config.json';

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);

  return 'Opening instagram...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};
export const docx = async (args: string[]): Promise<string> => {
  window.open(`${config.social.blog}`);

  return 'Opening Docx...';
};