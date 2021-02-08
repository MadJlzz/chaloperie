export interface CreateCatRequest {
  title: string;
  pictureURL: string;
  description?: string;
}

export interface Cat {
  title: string;
  pictureUrl: string;
  date: string;
  description?: string;
}
