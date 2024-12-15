import type { StoreonModule } from 'storeon-velo';

import type { Events, State } from './types';
import { getPage } from '../api';

export const app: StoreonModule<State, Events> = async (store) => {
  store.on('@init', () => {
    return {
      loading: false,
      items: [],
      allItems: [],
      pageCount: 0,
      pageNumber: 0,
    };
  });

  store.on('scroll', async (state) => {
    if (state.pageNumber <= state.pageCount) {
      store.set({ loading: true });

      const { items, pageCount, pageNumber } = await getPage(state.pageNumber + 1);

      store.set({
        loading: false,
        items,
        allItems: [...state.allItems, ...items],
        pageCount,
        pageNumber,
      });
    }
  });
};
