import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/Header.css";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Contact from "./pages/Contact";
import BookCourt from "./pages/BookCourt";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/book-court" element={<BookCourt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
