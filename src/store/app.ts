import type { StoreonModule } from 'storeon-velo';

import type { Events, State } from './types';
import { getPage } from '../api';

const apiPromise = getPage(1);

export const app: StoreonModule<State, Events> = async (store) => {
  store.on('@init', () => {
    return {
      items: [],
      allItems: [],
    };
  });

  const { items } = await apiPromise;

  store.set({
    items,
    allItems: items,
  });
};
