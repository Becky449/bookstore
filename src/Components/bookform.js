/* eslint-disable-import-no-extraneous-dependencies  */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { pushBook, getBook } from '../redux/books/books';

const Bookform = () => {
  const dispatcher = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addHandler = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
      category: '',
    };

    setTitle('');
    setAuthor('');
    dispatcher(pushBook(book));
    dispatcher(getBook());
  };

  return (
    <div className="addBook">
      <div className="booktext">ADD NEW BOOK</div>
      <form className="bookform" onSubmit={addHandler}>
        <input type="text" name="title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} className=" input title-input" />
        <input type="text" name="author" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="input author-input" />
        <button className="newbook" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Bookform;
