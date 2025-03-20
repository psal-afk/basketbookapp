import React, { useState, useEffect } from 'react';

// Sample data for bookings 
const mockBookings = [
  {
    id: 1.1,
    title: 'Basketball Games',  //title for the booking
    date: '2025-03-13T18:00:00',    //date of the booking
    peopleCount: 11,        //the people count for the event
    location: 'Court 1',    //location of the court or event
  },
  {
    id: 1.2,
    title: 'Basketball Practice Court',
    date: '2025-02-15T14:00:00',        //date of the booking   
    peopleCount: 10,             //people counts
    location: 'Court 2',
  },
  {
    id: 1.3,
    title: 'Basketball Tournaments',
    date: '2025-03-18T10:00:00',
    peopleCount: 16,
    location: 'Court 3',
  },
];

const Notification = ({ message, onClose }) => (
  <div className="notification">
    <p>{message}</p>
    <button onClick={onClose}>Close</button>    {/* onclick button for closing the notification */}
  </div>
);

const BookingNotification = () => {             //variable for the booking notification
  const [notifications, setNotifications] = useState([]);
  const [offerVisible, setOfferVisible] = useState(false);

  useEffect(() => {
    const checkBookings = () => {               //to check the bookings
      const now = new Date().getTime(); 
      mockBookings.forEach((booking) => {
        const bookingTime = new Date(booking.date).getTime();  //booking date and time

        if (bookingTime > now && bookingTime < now + 24 * 60 * 60 * 1000) {
          setNotifications((prevNotifications) => [
            ...prevNotifications,
            `Reminder: You have a booking for ${booking.title} on ${new Date(booking.date).toLocaleString()}!`,  //reminder message
          ]);

          // Show an alert with the booking details 
          alert(`Booking Details:\nYou have booked a court for ${booking.peopleCount} people at ${booking.location}.\nDate: ${new Date(booking.date).toLocaleString()}`);
        }
      });
    };

    // Check bookings 
    const bookingCheckInterval = setInterval(checkBookings, 60000); 

    // Clean up interval
    return () => clearInterval(bookingCheckInterval);
  }, []);

  // Close the upcoming notification
  const closeNotification = () => {
    setOfferVisible(false);
  };

  return (
    <div>
      <h1>Booking Notifications</h1>        {/* heading for the booking notification */}
      {notifications.map((notification, index) => (
        <Notification key={index} message={notification} onClose={closeNotification} />
      ))}
    </div>
  );
};

export default BookingNotification;
