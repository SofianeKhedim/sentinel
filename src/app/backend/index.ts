import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  credentials: 'include',
});

const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

export default api;
