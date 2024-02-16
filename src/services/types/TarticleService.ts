export type Tarticle = {
  title: string;
  description: string;
  img: {} | undefined;
  uuid: string;
  date: string;
};

export type TgetArticleRequest = {};

export type TgetArticleResponse = { id: string } & Tarticle;

export type TcreateArticleRequest = Tarticle;

export type TcreateArticleResponse = { id: string } & TcreateArticleRequest;
