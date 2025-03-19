import { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserPage = () => {
    const navigate = useNavigate();

    const handleSubmitUserInfoEvent = (e) => {
        e.preventDefault();
        alert("Personal Information Updated!")
    
    };

    const handleSubmitPaymentInfoEvent = (e) => {
        e.preventDefault();
        alert("Payment Information Updated!")
    
    };

    const logoutUser = (e) => {
        e.preventDefault();
        let text = "Want to Logout?";
        if (confirm(text) == true) {
          alert("You are logout!");
          navigate("/user-login");
        } 
        
    
    };
  return (
    <div className="admin-page">
      <h1>Basketball Player Dashboard</h1>
        <div className="user-dash">
            <h3>Welcome, John Doe.. <a className="logout-button" href="#"  onClick={logoutUser}>Logout</a></h3>
            <h4>Booking points: 0</h4>
            <div className="user-container">

            <div className="user-info">
                <h3>Personal Information</h3>
                <form action="#" className="user-info-form"  onSubmit={handleSubmitUserInfoEvent}>
                    <div className="input-wrapper">
                        <div className="label">Photo: </div>
                        <img src="/src/assets/img/user1.png" />
                        <br />
                        <input
                            type="file"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">First Name: </div>
                        <input
                            type="text"
                            value="John"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">Last Name: </div>
                        <input
                            type="text"
                            value="Doe"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">Email Address: </div>
                        <input
                            type="text"
                            value="user1@basketbook.ca"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">Password: </div>
                        <input
                            type="password"
                            value="pass1"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">Gender: </div>
                        <select name="gender" >
                            <option >Male</option>
                            <option >Female</option>
                        </select>
                    </div>
                    <button className="update-button">UPDATE</button>
                </form>
            </div>

            <div className="user-info">
                <h3>Payment Information</h3>
                <form action="#" className="payment-info-form"  onSubmit={handleSubmitPaymentInfoEvent}>
                    <div className="input-wrapper">
                        <div className="label">Card Name: </div>
                        <input
                            type="text"
                            value="John Doe"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">Card Number: </div>
                        <input
                            type="password"
                            value="1234567890"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">Expiration Date: </div>
                        <input
                            type="text"
                            value="01/28"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">Pass Code: </div>
                        <input
                            type="password"
                            value="123"
                        />
                    </div>
                    <button className="update-button">UPDATE</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default UserPage;