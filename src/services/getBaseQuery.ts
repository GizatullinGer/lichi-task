import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://64f34975edfa0459f6c67757.mockapi.io/';

export const getBaseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});
