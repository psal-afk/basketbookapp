import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import "./styles/Header.css";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Contact from "./pages/Contact";
import BookCourt from "./pages/BookCourt";
import AdminPage from "./pages/admin/AdminPage";
import Register from "./pages/Register";
import FindViewCourt from "./pages/FindViewCourt";
import CourtBooking from "./pages/CourtBooking";
import PaymentPage from "./pages/PaymentPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/user/UserPage";
import ContactCourtPage from "./pages/user/ContactCourt";
import ReviewCourtForm from "./pages/ReviewCourtForm"
import SpecialOffers from "./pages/SpecialOffers";
import BookingNotifications from "./pages/BookingNotification";
import SaveCardButton from "./pages/SavePayment";
import EarningsDashboard from "./pages/user/EarningsDashboard";
import TrackRevenue from "./pages/user/TrackRevenue";
import SetCourtEvent from "./pages/user/SetCourtEvent";
import CourtReviews from "./pages/user/CourtReviews";
import AdminBookingList from "./pages/admin/AdminBookingList";
import AdminUpdateCourt from "./pages/admin/AdminUpdateCourt";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home-page" />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/book-court" element={<BookCourt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/register-page" element={<Register />} />
          <Route path="/find-viewcourt" element={<FindViewCourt />} />
          <Route path="/court-booking" element={<CourtBooking />} />
          <Route path="/payment-page" element={<PaymentPage />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/contact-court-page" element={<ContactCourtPage />} />
          <Route path="/review-court-form" element={<ReviewCourtForm />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/booking-notification" element={<BookingNotifications />} />
          <Route path="/save-card-details" element={<SaveCardButton />} />
          <Route path="/earnings-dashboard" element={<EarningsDashboard />} />
          <Route path="/track-revenue" element={<TrackRevenue />} />
          <Route path="/setcourt-event" element={<SetCourtEvent />} />
          <Route path="/court-reviews" element={<CourtReviews />} />
          <Route path="/admin-booking-list" element={<AdminBookingList />} />
          <Route path="/admin-update-court" element={<AdminUpdateCourt />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
