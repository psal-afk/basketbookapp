
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="header">
      {/* Link to the home page */}
      <Link to="home-page">
        <img src="logo.png" alt="Logo" className="logo" />
      </Link>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Logout</Link>
          </li>
          <li>
            <Link to="#">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
