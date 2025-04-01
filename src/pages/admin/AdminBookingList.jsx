import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const AdminBookingList = () => {

    const urlSearchString = window.location.search;

    const params = new URLSearchParams(urlSearchString);
    const name = params.get('name');

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
    return (
        <div className="admin-page">
            <div class="content-container">
            <h3>Welcome, Administrator! <a href="#" className="logout-button" onClick={logoutUser}>Logout</a> <a href="#" className="logout-button" onClick={dashboard}>Admin Dashboard</a>  </h3>
            <br />
            <hr />
            <h1>Booking List of <br />Court {name}</h1>
            <br />
            <hr />
            <table>
                <tr>
                    <th>SUN</th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THU</th>
                    <th>FRI</th>
                    <th>SAT</th>
                </tr>
                <tr>
                    <td>April 6, 2025 <br /> 8:00 AM - 10:00 AM <br /> by London Ballers</td>
                    <td></td>
                    <td>April 8, 2025 <br /> 4:00 PM - 6:00 PM <br /> by London Hoopers</td>
                    <td>April 9, 2025 <br /> 6:00 PM - 8:00 PM <br /> by London Dad's club</td>
                    <td></td>
                    <td></td>
                    <td>April 12, 2025 <br /> 8:00 AM - 10:00 AM <br /> by London Ballers</td>
                </tr>
                <tr>
                    <td>April 13, 2025 <br /> 8:00 AM - 10:00 AM <br /> by London Ballers</td>
                    <td>April 14, 2025 <br /> 4:00 PM - 6:00 PM <br /> by FP Days Ballers</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>April 18, 2025 <br /> 4:00 PM - 6:00 PM <br /> by FP Days Ballers</td>
                    <td></td>
                </tr>
                <tr>
                    <td>April 20, 2025 <br /> 8:00 AM - 10:00 AM <br /> by London Ballers</td>
                    <td>April 21, 2025 <br /> 4:00 PM - 6:00 PM <br /> by FP Days Ballers</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>April 25, 2025 <br /> 4:00 PM - 6:00 PM <br /> by FP Days Ballers</td>
                    <td></td>
                </tr>
                <tr>
                    <td>April 27, 2025 <br /> 8:00 AM - 10:00 AM <br /> by London Ballers</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>May 1, 2025 <br /> 4:00 PM - 6:00 PM <br /> by FP Days Ballers</td>
                    <td></td>
                    <td></td>
                </tr>
                </table>
            </div>
        </div>
    );
};
export default AdminBookingList;