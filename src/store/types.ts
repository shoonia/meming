import type { IItem } from '../api';

export interface State {
  readonly loading: boolean;
  readonly openItem?: IItem | null;
  readonly items: IItem[];
  readonly allItems: IItem[]
  readonly pageCount: number;
  readonly pageNumber: number;
}

export interface Events {
  scroll: never;
}
