import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/books';

function Forms() {
  const [cue, setCue] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const manageInfo = (e) => {
    const input = e.target.value;

    switch (e.target.id) {
      case 'title':
        setCue((inputs) => ({ ...inputs, title: input }));
        break;
      case 'author':
        setCue((inputs) => ({ ...inputs, author: input }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: cue.title,
      author: cue.author,
      category: 'none',
    };
    dispatch(addBook(newBook));
  };

  return (
    <div className="genaral-contain">
      <h1 className="heading"> ADD NEW BOOK</h1>
      <form className="list-form">
        <input id="title" name="title" onChange={manageInfo} placeholder="Book Title Here" value={cue.title} />
        <input id="author" name="author" onChange={manageInfo} placeholder="Author Name Here" value={cue.author} />
        <button className="button-sub" type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
}
export default Forms;
