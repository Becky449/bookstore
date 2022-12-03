/* eslint-disable no-use-before-define */
const ADD_BOOK = 'BOOKSTORE/book/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/book/REMOVE_BOOK';
const GET_BOOK = 'BOOKSTORE/book/GET_BOOK';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/N9kNSPkepKOodGzyBDZW/books';
const initialState = [];

const getBookFromApi = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

  });
  const data = await res.json();
  const bookData = Object.keys(data).map((id) => ({
    id,
    title: data[id][0].title,
    author: data[id][0].author,
  }));
  return bookData;
};

// action for getting books
export const getBook = () => (async (dispatch) => {
  const data = await getBookFromApi();
  dispatch({
    type: GET_BOOK,
    payload: data,

  });
});

const PushbookstoApi = async (payload) => {
  const {
    id, title, author, category,
  } = payload;
  const sendBooks = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  });
  return sendBooks;
};

// action for pushing books
export const pushBook = (payload) => (async (dispatch) => {
  const { id, title, author } = payload;
  await PushbookstoApi(payload);
  dispatch({
    type: ADD_BOOK,
    payload: {
      id,
      title,
      author,
    },

  });
});

// for removing book

const removeBookFromApi = async (id) => {
  const del = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await del.text());
};

export const removeBooks = (id) => (async (dispatch) => {
  await removeBookFromApi(id);
  dispatch({
    type: REMOVE_BOOK,
    id,

  });
});

// reducers

const booksReducer = (state = initialState, action) => {
  const { type, payload, id } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== id);
    case GET_BOOK:
      return payload;
    default:
      return state;
  }
};

export default booksReducer;
