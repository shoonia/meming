import type { StoreonModule } from 'storeon-velo';

import type { Events, State } from './types';
import { getPage } from '../api';

export const app: StoreonModule<State, Events> = async (store) => {
  store.on('@init', () => {
    return {
      loading: false,
      openItem: null,
      items: [],
      allItems: [],
      pageCount: 0,
      pageNumber: 0,
    };
  });

  store.on('scroll', async (state) => {
    if (
      state.loading ||
      state.pageNumber > state.pageCount
    ) {
      return;
    }

    store.set({ loading: true });

    try {
      const { items, pageCount, pageNumber } = await getPage(state.pageNumber + 1);

      store.set({
        loading: false,
        items,
        allItems: [...state.allItems, ...items],
        pageCount,
        pageNumber,
      });
    } catch {
      store.set({ loading: false });
    }
  });
};
