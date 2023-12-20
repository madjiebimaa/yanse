import { Color } from '../types/color';

export const toGrayScale = (rgb: Color['Drgb']) => {
  const [r, g, b] = rgb;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const getOppositeContrast = (grayScale: number) => {
  return grayScale > 128 ? '#000' : '#FFF';
};

export const trimText = (text: string, max: number = 4) => {
  return text.length > max ? `${text.slice(0, max - 1)}...` : text;
};
