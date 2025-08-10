import { configureStore } from '@reduxjs/toolkit';
import searchModalReducer from './features/searchModalSlice';

export const store = configureStore({
  reducer: {
    searchModal: searchModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 