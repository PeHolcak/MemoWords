import { getRandomNumber } from './numberUtils';

export const generateRandomColor = () => {
  const hexDigits = '0123456789abcdef';

  const emptyArray = Array.from({ length: 6 });

  return emptyArray.reduce((color: string) => {
    const randomIndex = Math.floor(getRandomNumber(0, hexDigits.length));
    return color + hexDigits[randomIndex];
  }, '#');
};

export const rgbaToHex = (rgba: string): string => {
  const parts = rgba.match(/\d+/g);

  if (!parts || parts.length < 3) {
    throw new Error('Invalid input string');
  }

  const r = parseInt(parts[0], 10);
  const g = parseInt(parts[1], 10);
  const b = parseInt(parts[2], 10);

  const toHex = (x: number) => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const lightenColor = (color: string, factor: number): string => {
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);

  const newRed = Math.floor(Math.min(255, red + (255 - red) * factor));
  const newGreen = Math.floor(Math.min(255, green + (255 - green) * factor));
  const newBlue = Math.floor(Math.min(255, blue + (255 - blue) * factor));

  return `#${newRed.toString(16).padStart(2, '0')}${newGreen.toString(16).padStart(2, '0')}${newBlue.toString(16).padStart(2, '0')}`;
};

const isHex = (color: string) => {
  const hexRegex = /^#([0-9a-fA-F]{3}){1,2}$|^[0-9a-fA-F]{6}$/;

  return hexRegex.test(color);
};

const validColor = (color: string) => {
  if (!isHex(color)) {
    return rgbaToHex(color);
  }
  return color;
};

export const lightenByTwentyPercent = (color: string) =>
  lightenColor(validColor(color), 0.2);

export const lightenByFourtyPercent = (color: string) =>
  lightenColor(validColor(color), 0.4);

export const lightenBySixtyPercent = (color: string) =>
  lightenColor(validColor(color), 0.6);
