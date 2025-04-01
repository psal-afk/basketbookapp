import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const AdminUpdateCourt = () => {



    
    const urlSearchString = window.location.search;

    const params = new URLSearchParams(urlSearchString);

    const ulCourtName = params.get('name');
    
    const ulLocation = params.get('location');
    const ulHours= params.get('hours');
    const ulFeatures= params.get('features');
    const contact = params.get('contact').split(',');
    const ulContactName = contact[0];
    const ulContactEmail = contact[1];
    const ulContactNumber = contact[2];

    const [courtName, setCourtName] = useState(ulCourtName);
    const [location, setLocation] = useState(ulLocation);
    const [hours, setHours] = useState(ulHours);
    const [features, setFeatures] = useState(ulFeatures);
    const [contactName, setContactName] = useState(ulContactName);
    const [contactEmail, setContactEmail] = useState(ulContactEmail);
    const [contactNumber, setContactNumber] = useState(ulContactNumber);

    const navigate = useNavigate();
    const logoutUser = (e) => {
        e.preventDefault();
        let text = "Want to Logout?";
        if (confirm(text) == true) {
          alert("You are logout!");
          navigate("/admin-login");
        } 
    }

    const dashboard = (e) => {
        e.preventDefault();
          navigate("/admin-page");
    }

    const addCourtSubmitEvent = (e) => {
        e.preventDefault();

       alert("Data updated!");
    }
    return (
        <div className="admin-page">
            <div class="content-container container-grid">
            <h3>Welcome, Administrator! <a href="#" className="logout-button" onClick={logoutUser}>Logout</a> <a href="#" className="logout-button" onClick={dashboard}>Admin Dashboard</a>  </h3>
            <br />
            <hr />
            <div  className="content-grid">
            <h1>Update Court <br /> {ulCourtName}</h1>
            <br />
            <form action="#" className="add-court-form" onSubmit={addCourtSubmitEvent}>
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
                    <button className="add-button">UPDATE</button>
                </form>
            </div>
            <div className="content-grid">
                <h1>Court Availability</h1>

                <p><a href="#" className="logout-button">Add Availability</a></p>

                <table>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>April 12, 2025</td>
                        <td>8:00 AM to 8:00 PM</td>
                    </tr>
                    <tr>
                        <td>April 13, 2025</td>
                        <td>8:00 AM to 8:00 PM</td>
                    </tr>
                    <tr>
                        <td>April 14, 2025</td>
                        <td>8:00 AM to 8:00 PM</td>
                    </tr>
                    <tr>
                        <td>April 15, 2025</td>
                        <td>8:00 AM to 8:00 PM</td>
                    </tr>
                    <tr>
                        <td>April 16, 2025</td>
                        <td>8:00 AM to 8:00 PM</td>
                    </tr>
                    <tr>
                        <td>April 17, 2025</td>
                        <td>8:00 AM to 8:00 PM</td>
                    </tr>
                </table>
            </div>
                
            </div>
        </div>
    );
};
export default AdminUpdateCourt;