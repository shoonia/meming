import type { StoreonModule } from 'storeon-velo';

import type{ IEvents, ISate } from './types';

export const app: StoreonModule<ISate, IEvents> = (store) => {
  store.on('@init', () => {
    return {
      items: [],
      length: 0,
      limit: 0,
      pageNumber: 0,
      pageCount: 0,
      totalCount: 0,
    };
  });

  fetch('https://shoonia.wixsite.com/meme-api/_functions/page/1')
    .then((response) => response.json())
    .then(store.set);
};
