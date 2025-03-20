import React, { useState, useEffect } from 'react';

const SpecialOffers = () => {
  const [offerVisible, setOfferVisible] = useState(false);
  const [offerMessages, setOfferMessages] = useState([]); 

  useEffect(() => {
    // Show the first offer after 550ms
    const timer = setTimeout(() => {   
      setOfferMessages(prevOffers => [...prevOffers, 'Exclusive Offer just for 2 days: Get 55% off on Basketball! 🎉']);       
      setOfferVisible(true);
    }, 750); 

    // Show the second offer after 350ms
    const timer1 = setTimeout(() => {   
      setOfferMessages(prevOffers => [...prevOffers, 'Exclusive Offer: Get 75% off on Basketball Gears! 🎉']);       
    }, 350); 

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);

  const closeNotification = () => {
    setOfferVisible(false);
  };

  return (
    <div>
      <h1>Basketball Store!</h1>

      {offerVisible && (
        <div className="notification">
          <ul>
            {offerMessages.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
          <button onClick={closeNotification}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SpecialOffers;
