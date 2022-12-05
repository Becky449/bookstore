import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks, getBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const handledelete = (id) => {
    dispatch(removeBooks(id));
    dispatch(getBook());
  };

  return (

    <div className="bookContainer">
      <div className="book-wrapper">
        <ul className="texts">
          <li className="category">Action</li>
          <li className="title">
            {' '}
            {title}
            {' '}
          </li>
          <li className="author">
            {' '}
            {author}
          </li>
        </ul>
        <div className="btns">
          <button className="btn" type="button">Comments</button>
          <button className="rmv btn" type="submit" onClick={() => handledelete(id)}>Remove</button>
          <button className="btn edit" type="button">Edit</button>
        </div>
      </div>

      <div className="progressBar">
        <div className="progressreader" />
        <div className="completion-status">
          <p className="finished">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="chapter">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter-number">Chapter 17</p>
        <button className="update" type="submit">UPDATE PROGRESS</button>

      </div>

    </div>

  );
};

Book.propTypes = ({
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
}).isRequired;

export default Book;
