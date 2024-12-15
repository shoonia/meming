import type { IItem } from '../api';

export interface State {
  readonly loading: boolean;
  readonly open: boolean;
  readonly currentItem: IItem | null;
  readonly items: IItem[];
  readonly allItems: IItem[]
  readonly pageCount: number;
  readonly pageNumber: number;
}

export interface Events {
  scroll: never;
  openModal: IItem | null;
}
