export interface CreateCatRequest {
  title: string;
  pictureURL: string;
  description?: string;
}

export interface Cat {
  title: string;
  pictureURL: string;
  datetime: string;
  description?: string;
}
