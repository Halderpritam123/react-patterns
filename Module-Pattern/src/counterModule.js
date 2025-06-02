export const counterModule = (() => {
  let internalCount = 0;

  const increment = () => {
    internalCount++;
    return internalCount;
  };

  const decrement = () => {
    internalCount--;
    return internalCount;
  };

  const getCount = () => internalCount;

  return {
    increment,
    decrement,
    getCount,
  };
})();
