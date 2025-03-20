import React, { useState } from 'react';

const SaveCardButton = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "",               //name on the card
    cardNumber: "",         //card number of the user
    expiryDate: "",         //expiry date of the card
    cvv: "",                //cvv number
  });

  const handleCardDetailsChange = (e) => {          //to handle the card details change
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const saveCardDetails = () => {               //save the card details
   
    localStorage.setItem('savedCard', JSON.stringify({
      name: cardDetails.name,               //name
      cardNumber: cardDetails.cardNumber.replace(/\s/g, ""),            //card number
      expiryDate: cardDetails.expiryDate,       //expiry date
    }));

    alert('Card details saved for the future use!');
  };

  return (
    <div>
      <label>
        Name on the Card:               {/* name on the card */}
        <input
          type="text"               //type is text
          name="name"               //name
          value={cardDetails.name}
          onChange={handleCardDetailsChange}
          placeholder="Cardholder Name"                 //placeholder
        />
      </label>
      <label>
        Enter Card Number:
        <input
          type="text"
          name="cardNumber"
          value={cardDetails.cardNumber}
          onChange={handleCardDetailsChange}
          maxLength="19"
        />
      </label>
      <label>
        Expiry Date (MM/YY):
        <input
          type="text"
          name="expiryDate"
          value={cardDetails.expiryDate}
          onChange={handleCardDetailsChange}
          maxLength="5"
          placeholder="MM/YY"
        />
      </label>
      <label>
        CVV:
        <input
          type="text"
          name="cvv"
          value={cardDetails.cvv}
          onChange={handleCardDetailsChange}
          maxLength="3"
        />
      </label>

      <button onClick={saveCardDetails}>Save This Card Details</button>         {/* this is onclick button to save the card details */}
    </div>
  );
};

export default SaveCardButton;
