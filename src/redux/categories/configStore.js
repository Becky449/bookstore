import { configureStore } from '@reduxjs/toolkit';
import handleBook from '../Books/books';
import handleStatus from './categories';

const store = configureStore({
  reducer: {
    handleBook,
    handleStatus,
  },
});

export default store;
