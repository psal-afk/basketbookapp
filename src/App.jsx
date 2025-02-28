import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/Header.css";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Contact from "./pages/Contact";
import BookCourt from "./pages/BookCourt";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import Register from "./pages/Register";
import FindViewCourt from "./pages/FindViewCourt";
import CourtBooking from "./pages/CourtBooking";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home-page" element={<Home />} />
        <Route path="/book-court" element={<BookCourt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/register-page" element={<Register />} />
        <Route path="/find-viewcourt" element={<FindViewCourt />} />
        <Route path="/court-booking" element={<CourtBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
