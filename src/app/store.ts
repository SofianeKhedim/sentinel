import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import api from './backend';

export const store = configureStore({
  reducer: {
    user,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
