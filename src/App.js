import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import MyBookings from "./components/MyBookings";
import Book from "./components/Book";
import Contact from "./components/Contact";
import images from "./images/img-2.jpg";
import "./styles/Home.css";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${images})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div style={backgroundStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
