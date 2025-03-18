import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [courtName, setCourtName] = useState("");
    const [location, setLocation] = useState("");
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
        
    
    };

    const showForm = (e) => {
        setIsOpen((isOpen) => !isOpen);
    }

    const addCourtSubmitEvent = (e) => {
        e.preventDefault();

        setHtmlContent('<div class="court-item"><h2>' + courtName + '</h2><p>Location: '+location+'</p><p>Contact: '+contactName+' | Email: '+contactEmail+' | Phone: '+contactNumber+'</p><p>Satus:<select name="status" ><option >Open</option><option >Close</option></select></p></div>');
        
        alert("Add new court!");
    }
  return (
    <div className="admin-page">
      <h1>Administration Dashboard</h1>
      <br />
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
            <div className="court-item">
                <h2>Court A</h2>
                <p>Location: 109 Falcon Street, London Ontario</p>
                <p>Contact: John Doe | Email: jd12@gmail.com | Phone: 123-456-7890</p>
                <p>Satus:
                    <select name="status" >
                        <option >Open</option>
                        <option >Close</option>
                    </select>
                </p>
            </div>

            <div className="court-item">
                <h2>Court B</h2>
                <p>Location: Boyle Community, London Ontario</p>
                <p>Contact: James Doe | Email: jsd12@gmail.com | Phone: 321-456-7890</p>
                <p>Satus:
                    <select name="status" >
                        <option >Open</option>
                        <option selected>Close</option>
                    </select>
                </p>
            </div>

            <div className="court-item">
                <h2>Court C</h2>
                <p>Location: Westlion, London Ontario</p>
                <p>Contact: Jude Doe | Email: jdtt12@gmail.com | Phone: 433-456-7890</p>
                <p>Satus:
                    <select name="status" >
                        <option >Open</option>
                        <option >Close</option>
                    </select>
                </p>
            </div>

            <div className="court-item">
                <h2>Court D</h2>
                <p>Location: Stronach, London Ontario</p>
                <p>Contact: Jacob Doe | Email: jdcx12@gmail.com | Phone: 224-456-7890</p>
                <p>Satus:
                    <select name="status" >
                        <option >Open</option>
                        <option >Close</option>
                    </select>
                </p>
            </div>

            <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
            <br />
        </div>
        </div>
    </div>
  );
};

export default AdminPage;
