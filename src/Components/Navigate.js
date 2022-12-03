import { Link } from 'react-router-dom';
import './navigate.css';

function Navigation() {
  return (
    <div className="bar">
      <div className="logo">
        <h1 className="logo-head">BookStore CMS</h1>
      </div>
      <nav className="nav">
        <Link className="nav-links" to="/">Book</Link>
        <Link className="nav-links" to="/Categories">categories</Link>
      </nav>
    </div>
  );
}

export default Navigation;
