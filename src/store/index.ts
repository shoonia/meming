import { createStoreon } from 'storeon-velo';

import type { IEvents, ISate } from './types';
import { app } from './app';

export const { readyStore, connect } = createStoreon<ISate, IEvents>([
  app,
]);
