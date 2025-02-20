import React from "react";
import "../styles/AdminLogin.css";
import { FaUser, FaLock } from "react-icons/fa";

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <div className="main">
        <div className="wrapper">
          <form action={""}>
            <h1 style={{ color: "white" }}>Admin Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser style={{ color: "white" }} className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock style={{ color: "white" }} className="icon" />
            </div>
            <div className="remember-forgot">
              <label style={{ color: "white" }}>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
