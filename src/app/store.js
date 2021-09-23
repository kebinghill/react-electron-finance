import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/example';
import { dogsApiSlice } from '../features/dogs/dogsApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApiSlice.middleware);
  },
});
