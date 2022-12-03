import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const statusHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button className="checkstatus" type="button" name="buttton" onClick={statusHandler}>Check Status</button>
      <p>{status}</p>
    </>
  );
};
export default Categories;
