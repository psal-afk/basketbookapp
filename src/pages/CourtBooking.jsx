import React, { useState } from 'react';


const CourtBookings = () => {
  // Court Booking States
  const [bookingType, setBookingType] = useState('guest');
  const [court, setCourts] = useState('');
  const [players, setPlayer] = useState(1);
  const [name, setName] = useState('');

  // Team Management States
  const [searchTeam, setSearchTeam] = useState('');
  const [createTeam, setCreateTeam] = useState('');
  const [teams, setTeams] = useState([]); // Mock team storage

  // Handle Court Booking Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed!\nType: ${bookingType}\nCourt: ${court}\nPlayers: ${players}\nName: ${name}`);
  };

  // Handle Team Creation
  const handleCreateTeam = () => {
    if (createTeam.trim() !== '') {
      setTeams([...teams, createTeam]);
      alert(`Team "${createTeam}" created successfully!`);
      setCreateTeam('');
    }
  };

  // Handle Team Search
  const handleSearchTeam = () => {
    if (teams.includes(searchTeam)) {
      alert(`Team "${searchTeam}" found!`);
    } else {
      alert(`Team "${searchTeam}" not found!`);
    }
  };

  return (
    <div className="page-container">
      {/* Court Booking Form */}
      <div className="booking-container">
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

          {bookingType === 'group' && (
            <>
              <label htmlFor="players">Number of Players:</label>
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

      {/* Team Management Section */}
      <div className="team-container">
        <h2>Team Management</h2>

        {/* Search Team */}
        <div className="team-section">
          <h3>Search Team</h3>
          <input
            type="text"
            placeholder="Enter team name"
            value={searchTeam}
            onChange={(e) => setSearchTeam(e.target.value)}
          />
          <button onClick={handleSearchTeam}>Search</button>
        </div>

        {/* Create Team */}
        <div className="team-section">
          <h3>Create Team</h3>
          <input
            type="text"
            placeholder="Enter new team name"
            value={createTeam}
            onChange={(e) => setCreateTeam(e.target.value)}
          />
          <button onClick={handleCreateTeam}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CourtBookings;
