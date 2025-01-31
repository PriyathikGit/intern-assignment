import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../feature/StockSlice';

export const store = configureStore({
  reducer: {
    stocks: stockReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
