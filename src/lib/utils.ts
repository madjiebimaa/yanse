export const trimText = (text: string, max: number = 4) => {
  return text.length > max ? `${text.slice(0, max - 1)}...` : text;
};
