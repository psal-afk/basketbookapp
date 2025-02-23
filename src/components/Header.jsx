import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* Link to the home page */}
      <Link to="/">
        <img src="logo.png" alt="Logo" className="logo" />
      </Link>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/book-court">Book</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user-login">Login</Link>
          </li>
          <li>
            <Link to="/admin-login">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
