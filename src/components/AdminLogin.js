import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  //login credentials
  const storedUsername = "admin";
  const storedPassword = "root";

  //storing the input values including the error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //function that handles the admin login process
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("isAuthenticated", "true"); // Store login state
      navigate("/"); // Redirect to home page
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="admin-login main">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1 style={{ color: "white" }}>Admin Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser style={{ color: "white" }} className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
  );
};

export default AdminLogin;
