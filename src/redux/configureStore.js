import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import checkStatusReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: checkStatusReducer,
  },
  middleware: [thunk],
});

export default store;
