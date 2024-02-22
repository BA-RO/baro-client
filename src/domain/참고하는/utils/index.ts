export const formatNumberToCompact = (num: number) => {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(num);
};
