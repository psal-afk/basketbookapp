import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to the Basketball Court Booking App</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/my-bookings">My Bookings</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <p>Book your basketball court time Now!</p>
        <button className="book-now-btn">
          <Link to="/book">Book Now</Link>
        </button>
      </main>
    </div>
  );
};

export default Home;
