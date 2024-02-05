export const getNumToK = (num: number) => {
  if (num < 1000) return num;
  return `${num / 1000}k`;
};
