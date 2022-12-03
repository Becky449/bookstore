import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import Bookform from './bookform';
import { getBook } from '../redux/books/books';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, []);
  return (
    <>
      <ul className="booklist">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            author={book.author}
          />
        ))}
      </ul>
      <Bookform />
    </>
  );
};

export default Booklist;
