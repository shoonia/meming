/* eslint no-restricted-syntax: off */

const { hasOwnProperty } = Object.prototype;

export const findMemeById = (cache, id) => {
  for (const key in cache) {
    if (hasOwnProperty.call(cache, key)) {
      const { items } = cache[key];
      const meme = items.find(item => item.id === id);

      if (meme !== undefined) {
        return meme;
      }
    }
  }
  return undefined;
};

export default undefined;
