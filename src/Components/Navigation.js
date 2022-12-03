import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navigation = () => (
  <>
    <div className="nav-bar">
      <div className="logo">
        <p className="magicians">Bookstore CMS</p>
      </div>
      <nav className="nav">
        <Link className="links" style={{ textDecoration: 'none' }} to="/">Books</Link>
        <Link className="links" style={{ textDecoration: 'none' }} to="/categories">Categories</Link>
      </nav>
      <FaUser className="icon" />
    </div>
  </>
);

export default Navigation;
