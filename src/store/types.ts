import type { IItem } from '../api';

export interface State {
  readonly items: IItem[];
}

export interface Events {
  test: never;
}
