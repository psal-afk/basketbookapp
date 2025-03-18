import { useState, useEffect } from "react";

const CourtTracking = () => {
  // States for court tracking
  const [courtNumber, setCourtNumber] = useState("");
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Format time display
  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}m`;
  };

  // Start Tracking Court Usage
  const startTracking = () => {
    if (selectedDuration > 0 && courtNumber.trim() !== "") {
      setRemainingTime(selectedDuration);
      setIsRunning(true);
    } else {
      alert("Please enter a court number and select a valid booking duration.");
    }
  };

  // Stop Tracking
  const stopTracking = () => {
    setIsRunning(false);
  };

  // Reset Timer
  const resetTracking = () => {
    setIsRunning(false);
    setRemainingTime(0);
    setSelectedDuration(0);
    setCourtNumber("");
  };

  // Timer Effect
  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 60000); // Countdown every minute

      return () => clearInterval(timer);
    }
  }, [isRunning, remainingTime]);

  return (
    <div className="court-tracking-container">
      <h1>Court Time Tracker</h1>

      {/* Court Number Input */}
      <div className="court-input">
        <label htmlFor="courtNumber">Court Number:</label>
        <input
          type="text"
          id="courtNumber"
          placeholder="Enter court number"
          value={courtNumber}
          onChange={(e) => setCourtNumber(e.target.value)}
          required
        />
      </div>

      {/* Booking Duration Selection */}
      <div className="time-selection">
        <label htmlFor="duration">Choose Booking Duration:</label>
        <select
          id="duration"
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
        >
          <option value="0">Select Duration</option>
          <option value="30">30 Minutes</option>
          <option value="60">1 Hour</option>
          <option value="90">1 Hour 30 Minutes</option>
          <option value="120">2 Hours</option>
        </select>
        <button onClick={startTracking} disabled={isRunning}>
          Start Tracking
        </button>
      </div>

      {/* Remaining Time Display */}
      <div className="remaining-time">
        <h2>Remaining Time:</h2>
        <p className={remainingTime <= 10 ? "alert" : ""}>
          {remainingTime > 0 ? formatTime(remainingTime) : "Time Expired"}
        </p>
      </div>

      {/* Pause & Reset Buttons */}
      <div className="time-actions">
        <button onClick={stopTracking} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTracking}>Reset</button>
      </div>
    </div>
  );
};

export default CourtTracking;
