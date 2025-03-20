import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourtBookings = () => {
  const [feedback, setFeedback] = useState(""); 
  const [feedbackType, setFeedbackType] = useState("cleanliness"); 
  const navigate = useNavigate(); 
  
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
   
    alert(`Feedback submitted!\nType: ${feedbackType}\nFeedback: ${feedback}`);
    setFeedback(""); 
  };

  
  const handleCancel = () => {
    setFeedback(""); 
    setFeedbackType("cleanliness"); 
    navigate("/"); 
  };

  const handleFeedbackTypeChange = (e) => {
    setFeedbackType(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="booking-container">
        <h1>Submit Feedback</h1>

        <form className="feedback-form" onSubmit={handleSubmitFeedback}>
          <div>
            <label>Feedback Type: </label>
            <select value={feedbackType} onChange={handleFeedbackTypeChange}>
              <option value="cleanliness">Cleanliness of the Court</option>
              <option value="equipment">Damage Equipments</option>
              <option value="damage">Any Other Damage</option>
            </select>
          </div>

          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here"
            required
          ></textarea>

          <button type="submit">Submit the Feedback</button>
        </form>
        
        <button onClick={handleCancel}>Cancel</button>

      </div>
    </div>
  );
};

export default CourtBookings;
