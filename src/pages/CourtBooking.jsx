import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourtBookings = () => {
  const [bookingType, setBookingType] = useState("guest");
  const [court, setCourts] = useState("");
  const [players, setPlayer] = useState(1);
  const [name, setName] = useState("");

  const [searchTeam, setSearchTeam] = useState("");
  const [createTeam, setCreateTeam] = useState("");
  const [teams, setTeams] = useState([]);

  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [rating, setRating] = useState(0); // Added rating state for reviews
  const [reviewComment, setReviewComment] = useState(""); // Added comment for review

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking confirmed!\nType: ${bookingType}\nCourt: ${court}\nPlayers: ${Number(players)}\nName: ${name}`
    );
  };

  const handleCreateTeam = () => {
    if (createTeam.trim() !== "") {
      setTeams([...teams, createTeam]);
      alert(`Team "${createTeam}" created successfully!`);
      setCreateTeam("");
    }
  };

  const handleSearchTeam = () => {
    if (teams.includes(searchTeam)) {
      alert(`Team "${searchTeam}" found!`);
    } else {
      alert(`Team "${searchTeam}" not found!`);
    }
  };

  const saveCardDetails = () => {
    localStorage.setItem("savedCard", JSON.stringify(cardDetails));
    alert("Card details saved for future use!");
  };

  const askForDiscount = (e) => {
    e.preventDefault();
    alert("Discount Request sent!");
  };

  const reviewCourt = () => {
    if (rating > 0 && reviewComment.trim()) {
      alert(`Court Reviewed! \nRating: ${rating} Star(s) \nComment: ${reviewComment}`);
      setRating(0); // Reset rating after review submission
      setReviewComment(""); // Reset comment after review submission
    } else {
      alert("Please provide a rating and comment for the review!");
    }
  };

  const handlePlayerChange = (e) => {
    const newValue = e.target.value;
    if (newValue >= 1 && newValue <= 20) {
      setPlayer(newValue);
    }
  };

  return (
    <div className="page-container">
      <div className="booking-container">
        <h1>Basketball Court Booking</h1>
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="bookingType">Booking Type:</label>
          <select
            id="bookingType"
            value={bookingType}
            onChange={(e) => setBookingType(e.target.value)}
          >
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

          {bookingType === "group" && (
            <>
              <label htmlFor="players">Number of Players:</label>
              <input
                id="players"
                type="number"
                min="1"
                max="20"
                value={players}
                onChange={handlePlayerChange}
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
          <button onClick={() => navigate("/booking-notifications")}>Booking Notification</button> 
        </form>
      </div>

      <div className="pay">
        <button onClick={() => navigate("/payment-page")}>Pay</button>
        <br />
        <br />
        <button onClick={() => navigate("/save-card-details")}>Save Card Details</button>     {/* to save the card details for the future use */}
        <br />
        <br />
        <div className="contact-court">
          <button onClick={() => navigate("/contact-court-page")}>Contact Court</button>
        </div>
        <br />
        <div className="contact-court">
          <button onClick={askForDiscount}>Ask for Discount</button>
        </div>
        <br />
        <div className="contact-court">
        <button onClick={() => navigate('/review-court-form')}>Review Court</button>    {/* button onclick for the review court */}
        </div> 
        <br />
      </div>

      <div className="team-container">
        <h2>Team Management</h2>

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

      {/* Review court form Section */}
      <div className="review-container">
        <h2>Leave Your Review</h2>
        <label htmlFor="rating">Ratings: </label>       {/* this is to choose the ratings */}
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}         //this is to set the ratings and all
        >
          <option value={0}>Select rating</option>      {/* to select the ratings */}
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>

        <br />
        <label htmlFor="reviewComment">Comments: </label>     {/* this is for the review comments */}
        <textarea
          id="reviewComment"
          value={reviewComment}
          onChange={(e) => setReviewComment(e.target.value)}
          placeholder="Please enter your review"      //this is placeholder for the review
        />  
      </div>
    </div>
  );
};

export default CourtBookings;
