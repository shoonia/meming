import type { IItem } from '../api';

export interface State {
  readonly items: IItem[];
  readonly allItems: IItem[]
}

export interface Events {
  test: never;
}
