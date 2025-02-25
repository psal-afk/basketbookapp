import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header = () => {
  const {logout, isAuthenticated} = useAuth0();
  return (
    <header className="header">
      {/* Link to the home page */}
      <Link to="home-page">
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
            {
              !isAuthenticated &&(
                <Link to="/user-login">Login</Link>
              )
            }
            {
              isAuthenticated &&(
                <Link to="#" onClick={() => logout()}>Logout</Link>
              )
            }
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
