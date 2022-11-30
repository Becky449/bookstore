import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
