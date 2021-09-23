import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/example';

export const store = configureStore({
  reducer: { counter: counterReducer },
});
