import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../state/products.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});