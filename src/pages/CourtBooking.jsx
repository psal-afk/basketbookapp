import React, { useState } from 'react';

const CourtBookings = () => {
  const [bookingType, setBookingType] = useState('guest');
  const [court, setCourts] = useState('');
  const [players, setPlayer] = useState(1);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed!\nType: ${bookingType}\nCourt: ${court}\nPlayers: ${players}\nName: ${name}`);
  }; // this will show the alert message

  return (
    <div className="container">
      <h1>Basketball Court Booking</h1>

      <form className="booking-form" onSubmit={handleSubmit}>  
        <label htmlFor="bookingType">Booking Type:</label>
        <select id="bookingType" value={bookingType} onChange={(e) => setBookingType(e.target.value)}>
          <option value="guest">Guest (One-time Game)</option>
          <option value="group">Group (Multiple Players)</option>
        </select>

        <label htmlFor="court">Select Court:</label>
        <input
          id="court"
          type="text"
          placeholder="Enter the court location"
          value={court}
          onChange={(e) => setCourts(e.target.value)}
          required
        />

        {bookingType === 'group' && ( //booking type as a group
          <>
            <label htmlFor="players">Number of the Players:</label>
            <input
              id="players"
              type="number"
              min="1"
              max="20"
              value={players}
              onChange={(e) => setPlayer(e.target.value)}
              required
            />
          </>
        )}

        <label htmlFor="name">Your Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">Book Court</button> 
      </form>
    </div>
  );
};

export default CourtBookings;
