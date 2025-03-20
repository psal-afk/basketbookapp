import { useState } from 'react';

const RatingCourt = ({ onSubmit, onCancel }) => {
  const [rating, setRating] = useState(0); //this is to store the rating given

  // to handle the change rating
  const handleRatingChange = (event) => {
    setRating(Number(event.target.value)); //this is to convert the values into the number
  };

  // to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    //to validate the rating input
    if (rating > 0) {
      // to submit the rating datas
      onSubmit({ rating });
    } else {
      alert('Please select rating!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>   {/* on submit button */}
      <div>
        <label>Ratings: </label>          {/* for ratings */}
        <select value={rating} onChange={handleRatingChange}>       {/* to handle the rating change */}
          <option value={0}>Select ratings</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>

      <button type="submit">Submit Your Rating</button>     {/* submit button to submit your ratings */}      
      <button type="button" onClick={onCancel}>Cancel</button>      {/* to cancel the form once you are done giving feedback */}
    </form>
  );
};

export default RatingCourt;
