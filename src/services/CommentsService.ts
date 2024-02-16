import { createApi } from '@reduxjs/toolkit/query/react';
import { getBaseQuery } from './getBaseQuery';
import { TaddCommentsRequest, TaddCommentsResponse, TgetCommentsRequest, TgetCommentsResponse } from './types/TcommentsService';

const URL_PREFIX = '/comments';

export const commentsService = createApi({
  reducerPath: 'commentsService',
  baseQuery: getBaseQuery,
  tagTypes: ['Comments', 'Comment'],
  endpoints: builder => ({
    getComments: builder.query<TgetCommentsResponse[], TgetCommentsRequest>({
      query: () => ({
        url: URL_PREFIX,
        method: 'GET',
      }),
      providesTags: ['Comments'],
    }),
    addComment: builder.mutation<TaddCommentsResponse, TaddCommentsRequest>({
      query: body => ({
        url: URL_PREFIX,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Comments'],
    }),
    editComment: builder.mutation<any, any>({
      query: body => ({
        url: `${URL_PREFIX}/${body?.id}`,
        method: 'PUT',
        body: { comment: body.comment },
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation, useEditCommentMutation } = commentsService;
