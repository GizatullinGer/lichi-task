export type Tcomments = {
  id: string;
  comment: string;
  uuid_article: string;
  user: string;
};

export type TgetCommentsRequest = {};

export type TgetCommentsResponse = Tcomments;

export type TaddCommentsResponse = Tcomments;

export type TaddCommentsRequest = Omit<Tcomments, 'id'>;
