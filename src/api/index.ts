export interface IImage {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

export interface IItem {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly image: IImage;
  readonly date: string;
}

export interface IReponse {
  readonly items: IItem[];
  readonly length: number;
  readonly limit: number;
  readonly pageCount: number;
  readonly pageNumber: number;
  readonly totalCount: number;
}

export const getPage = async (pageNumber: number): Promise<IReponse> => {
  const response = await fetch(`https://shoonia.wixsite.com/meme-api/_functions/page/${pageNumber}`);
  return response.json();
};
