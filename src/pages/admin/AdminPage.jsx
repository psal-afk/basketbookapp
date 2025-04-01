import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EarningsDashboard from "../user/EarningsDashboard";
import TrackRevenue from "../user/TrackRevenue";
import SetCourtEvent from "../user/SetCourtEvent";
import CourtReviews from "../user/CourtReviews";
import {Link} from 'react-router-dom';
const AdminPage = () => {
    
    const basketballCourts = [
        {
          id: 1,
          name: "Central Park Court",
          location: "London, ON",
          latitude: 40.7851,
          longitude: -73.9683,
          openHours: "8:00 AM - 10:00 PM",
          features: ["Outdoor", "Full Court", "Membership Required"],
          contactName: "John Doe",
          contactEmail: "johndoe@mail.com",
          contactNumber: "123-445-1234"
        },
        {
          id: 2,
          name: "Queens Playcourt",
          location: "Ottawa, ON",
          latitude: 40.6782,
          longitude: -73.9442,
          openHours: "9:00 AM - 8:00 PM",
          features: ["Indoor", "Half Court", "Membership Required"],
          contactName: "James Doe",
          contactEmail: "jamesdoe@mail.com",
          contactNumber: "123-445-5644"
        },
        {
          id: 3,
          name: "Montreal Court",
          location: "Montreal, QC",
          latitude: 40.7282,
          longitude: -73.7949,
          openHours: "7:00 AM - 9:00 PM",
          features: ["Outdoor", "Full Court", "Free Entry"],
          contactName: "Jude Doe",
          contactEmail: "judedoe@mail.com",
          contactNumber: "123-445-8865"
        },
        {
          id: 4,
          name: "Harlem Ballers Court",
          location: "Vancouver, BC",
          latitude: 40.8116,
          longitude: -73.9465,
          openHours: "6:00 AM - 11:00 PM",
          features: ["Indoor", "Full Court", "Public Access"],
          contactName: "Joseph Doe",
          contactEmail: "josephdoe@mail.com",
          contactNumber: "123-445-2112"
        },
      ];

      let nextId = basketballCourts.length;

    const [isOpen, setIsOpen] = useState(false);

    const [courtName, setCourtName] = useState("");
    const [location, setLocation] = useState("");
    const [hours, setHours] = useState("");
    const [features, setFeatures] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [courtStatus, setCourtStatus] = useState(false);

    const [htmlContent, setHtmlContent] = useState("");

    const navigate = useNavigate();

    const logoutUser = (e) => {
        e.preventDefault();
        let text = "Want to Logout?";
        if (confirm(text) == true) {
          alert("You are logout!");
          navigate("/admin-login");
        } 
    }

    const showForm = (e) => {
        setIsOpen((isOpen) => !isOpen);
    }

    const addCourtSubmitEvent = (e) => {
        e.preventDefault();

        setHtmlContent('<div class="court-item"><h2>' + courtName + '</h2><p>Location: '+location+'</p><p>Hours: '+hours+'</p><p>Features: '+features+'</p><p>Contact: '+contactName+' | Email: '+contactEmail+' | Phone: '+contactNumber+'</p><p>Satus:<select name="status" ><option >Open</option><option >Close</option></select></p></div>');
        basketballCourts.push({
            id: nextId++,
            name: courtName,
            location: location,
            latitude: 40.8116,
            longitude: -73.9465,
            openHours: hours,
            features: features.split(","),
            contactName: contactName,
            contactEmail: contactEmail,
            contactNumber: contactNumber
        });
        alert("Add new court!");
        setIsOpen(false);
    }

    const editCourt = (e) => {
        e.preventDefault();
        alert("hello");
    };

  return (
    <div className="admin-page">
      <h1>Administration Dashboard</h1>
      <br />
      <EarningsDashboard />
      <TrackRevenue/>
      <SetCourtEvent/>
      <CourtReviews/>
      <div class="content-container">
      <h3>Welcome, Administrator! <a href="#" className="logout-button" onClick={logoutUser}>Logout</a></h3>
        <div>
            <a  className="button-container" href="#"  onClick={showForm}>Add Court</a>
        </div>
       
        {isOpen && (
            <div class="add-new-court-container">
                <form action="#" className="add-court-form" onSubmit={addCourtSubmitEvent}>
                    <h2>Add New Court</h2>
                    <p>Court Name : 
                        <input
                        type="text"
                        className="input-field"
                        value={courtName}
                        onChange={(e) => setCourtName(e.target.value)}
                        />
                    </p>
                    <p>Location : 
                        <input
                        type="text"
                        className="input-field"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        />
                    </p>
                    <p>Hours : 
                        <input
                        type="text"
                        className="input-field"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        />
                    </p>
                    <p>Features : 
                        <input
                        type="text"
                        className="input-field"
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        />
                    </p>
                    <p>Contact Name : 
                        <input
                        type="text"
                        className="input-field"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        />
                    </p>
                    <p>Contact Email : 
                        <input
                        type="text"
                        className="input-field"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        />
                    </p>
                    <p>Contact Number : 
                        <input
                        type="text"
                        className="input-field"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        />
                    </p>
                    <p>Satus :
                        <select name="status" >
                            <option >Open</option>
                            <option >Close</option>
                        </select>
                    </p>
                    <button className="add-button">ADD</button>
                </form>
            </div>
        )}
      <br />
        <div className="court-lists">
        <div>
            { basketballCourts.map((court) => (
                <div className="court-item">
                    <p><Link to={`/admin-update-court?name=${court.name}&location=${court.location}&hours=${court.openHours}&features=${court.features}&contact=${court.contactName},${court.contactEmail},${court.contactNumber}`} className="logout-button">Update Details</Link></p>
                    <p><Link to={`/admin-booking-list?name=${court.name}&location=${court.location}&hours=${court.openHours}&features=${court.features}&contact=${court.contactName},${court.contactEmail},${court.contactNumber}`} className="logout-button">Booking List</Link></p>
                    <h2>{court.name}</h2>
                    <p>Location: {court.location}</p>
                    <p>Hours: {court.openHours}</p>
                    <p>Features: {court.features.join(", ")}</p>
                    <p>Contact: {court.contactName} | Email: {court.contactEmail} | Phone: {court.contactNumber}</p>
                    <p>Satus:
                        <select name="status" >
                            <option >Open</option>
                            <option >Close</option>
                        </select>
                    </p>
                    
                </div>
            ))}
        </div>

            <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
            <br />

        </div>
        </div>
    </div>
  );
};

export default AdminPage;
