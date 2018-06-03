export const randomValue = (obj): string[] => {
  const objKeys = Object.keys(obj);
  return obj[objKeys[Math.floor(Math.random() * objKeys.length)]];
};
