import React from "react";
import Header from "./Header";

const MyBookings = () => {
  return (
    <div className="my-bookings">
      <Header />
      <h1 style={{ color: "white" }}>My Bookings</h1>
      <p style={{ color: "white" }}>
        Here you can view and manage your bookings.
      </p>
    </div>
  );
};

export default MyBookings;
