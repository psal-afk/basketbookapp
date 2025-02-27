import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();

    const logoutUser = (e) => {
        e.preventDefault();
        let text = "Want to Logout?";
        if (confirm(text) == true) {
          alert("You are logout!");
          navigate("/admin-login");
        } 
        
    
    };
  return (
    <div className="admin-page">
      <h1>Administration Dashboard</h1>
      <br />
      <h2>Welcome, Administrator! <a href="#"  onClick={logoutUser}>Logout</a></h2>
      <br />
        <div className="court-lists">
            <div className="court-item">
                <h2>Court A</h2>
                <p>Location: 109 Falcon Street, London Ontario</p>
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
                <p>Satus:
                    <select name="status" >
                        <option >Open</option>
                        <option >Close</option>
                    </select>
                </p>
            </div>
        </div>
    </div>
  );
};

export default AdminPage;
