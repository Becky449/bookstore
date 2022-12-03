import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecker } from '../redux/Categories/categories';

function Categories() {
  const [msgPlaceholder, setMsg] = useState('');
  const dispatch = useDispatch();
  dispatch(statusChecker());
  const msg = useSelector((state) => state.handleStatus);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(msg);
  };

  return (
    <>
      <button className="loading" type="submit" name="button" onClick={handleSubmit}>Check Status</button>
      <p>{msgPlaceholder}</p>
    </>
  );
}

export default Categories;
