import { configureStore } from '@reduxjs/toolkit';
import { ourStoryApi } from './ourStorySlice';

export const store = configureStore({
  reducer: {
    [ourStoryApi.reducerPath]: ourStoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ourStoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
