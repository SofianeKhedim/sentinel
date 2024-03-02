import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiUrl = 'http://192.168.137.1:8000';
export const fastApiUrl = 'http://127.0.0.1:4444';

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  // credentials: 'include',
});

const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['Task', 'Doctor', 'Medicament'],
  endpoints: () => ({}),
});

export default api;
