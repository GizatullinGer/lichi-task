import { createApi } from '@reduxjs/toolkit/query/react';
import { getBaseQuery } from './getBaseQuery';
import { TcreateArticleRequest, TcreateArticleResponse, TgetArticleRequest, TgetArticleResponse } from './types/TarticleService';

const URL_PREFIX = '/articles';

export const articleService = createApi({
  reducerPath: 'articleService',
  baseQuery: getBaseQuery,
  tagTypes: ['Article', 'Articles'],
  endpoints: builder => ({
    getArticles: builder.query<TgetArticleResponse[], TgetArticleRequest>({
      query: () => ({
        url: URL_PREFIX,
        method: 'GET',
      }),
      providesTags: ['Articles'],
    }),
    createArticle: builder.mutation<TcreateArticleResponse, TcreateArticleRequest>({
      query: body => ({
        url: URL_PREFIX,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Articles'],
    }),
  }),
});

export const { useGetArticlesQuery, useCreateArticleMutation } = articleService;
