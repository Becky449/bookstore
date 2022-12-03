/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Books from './components/BookStore';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Books />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
