import React, { useState, useEffect } from "react";

const basketballCourts = [
  {
    id: 1,
    name: "Central Park Court",
    location: "London, ON",
    latitude: 40.7851,
    longitude: -73.9683,
    openHours: "8:00 AM - 10:00 PM",
    features: ["Outdoor", "Full Court", "Membership Required"],
  },
  {
    id: 2,
    name: "Queens Playcourt",
    location: "Ottawa, ON",
    latitude: 40.6782,
    longitude: -73.9442,
    openHours: "9:00 AM - 8:00 PM",
    features: ["Indoor", "Half Court", "Membership Required"],
  },
  {
    id: 3,
    name: "Montreal Court",
    location: "Montreal, QC",
    latitude: 40.7282,
    longitude: -73.7949,
    openHours: "7:00 AM - 9:00 PM",
    features: ["Outdoor", "Full Court", "Free Entry"],
  },
  {
    id: 4,
    name: "Harlem Ballers Court",
    location: "Vancouver, BC",
    latitude: 40.8116,
    longitude: -73.9465,
    openHours: "6:00 AM - 11:00 PM",
    features: ["Indoor", "Full Court", "Public Access"],
  },
];

const getDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6261; 
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2); 
};

const App = () => {
  const [userLocation, setUserLocations] = useState(null);
  const [sortedCourts, setSortedCourts] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocations({ latitude, longitude });
        },
        (error) => {
          console.error("Error while getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      const courtsWithDistance = basketballCourts.map((court) => ({
        ...court,
        distance: getDistance(
          userLocation.latitude,
          userLocation.longitude,
          court.latitude,
          court.longitude
        ),
      }));

      const sorted = courtsWithDistance.sort((a, b) => a.distance - b.distance);
      setSortedCourts(sorted);
    }
  }, [userLocation]);

  return (
    <div style={styles.container}>
      <h1>🏀 Basketball Courts Finder</h1> 

      {userLocation ? (
        <p>
          Your Location: {userLocation.latitude.toFixed(4)}, {userLocation.longitude.toFixed(4)}
        </p>
      ) : (
        <p>Locating you...</p>      /* to locate your live location */
      )}

      <h2>Available Courts (Closest First):</h2>    {/*will show you the closest court first*/}

      {sortedCourts.length > 0 ? (
        <ul style={styles.list}>
          {sortedCourts.map((court) => (
            <li key={court.id} style={styles.card}>
              <h3>{court.name}</h3>
              <p>
                📍 Location: {court.location}   {/* the court location */}
                <br />
                🕒 Hours: {court.openHours}       {/* The time court is open */}
                <br />
                📏 Distance: {court.distance} km away     {/* will show you the distance */}
                <br />
                🏀 Features: {court.features.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading courts...</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif", //font family
    padding: "21px",
    backgroundColor: "#f5f5f5",
  },
  list: {
    listStyleType: "none",  
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",    //this is the border radius
    padding: "15px",
    marginBottom: "10px",  //card margin 
    boxShadow: "0 4px 6px rgba(207, 87, 87, 0.1)",
  },
};

export default App;
