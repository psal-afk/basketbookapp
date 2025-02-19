import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
              <Link to="/admin">Admin Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <h1 className="main-h1">Basketball Court Booking App</h1>
        <p className="main-p">Book your basketball court time Now!</p>
        <button className="book-now-btn btn-primary">
          <Link to="/book">Book Now</Link>
        </button>
      </main>
    </div>
  );
};

export default Home;
