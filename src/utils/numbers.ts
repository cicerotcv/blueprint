export const getNumberBetween = (min: number, max: number) => {
  const interval = max - min;
  if (min === max) return min;
  return min + Math.floor(Math.random() * interval);
};
