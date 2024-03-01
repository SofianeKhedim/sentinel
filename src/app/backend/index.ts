import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiUrl = 'http://192.168.137.1:8000';

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  // credentials: 'include',
});

const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

export default api;
