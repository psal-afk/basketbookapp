import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="home">
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/book">Book</Link>
            </li>
            <li>
              <Link to="/my-bookings">My Bookings</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/admin-login" className="login-link">
                <FaUser
                  className="login-icon"
                  style={{
                    margin: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />{" "}
                Login/ Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
