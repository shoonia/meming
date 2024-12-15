import { createStoreon } from 'storeon-velo';

import type { Events, State } from './types';
import { app } from './app';

export const { dispatch, connect, readyStore } = createStoreon<State, Events>([
  app,
]);
