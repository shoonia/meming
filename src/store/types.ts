export interface IImage {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

export interface IItem {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly date: string;
  readonly image: IImage;
}

export interface ISate {
  readonly items: IItem[];
  readonly length: number;
  readonly limit: number;
  readonly pageNumber: number;
  readonly pageCount: number;
  readonly totalCount: number;
}

export interface IEvents {
  'on:ready': never;
}
