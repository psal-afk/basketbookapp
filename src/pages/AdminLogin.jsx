import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  // State for username
  const [username, setUsername] = useState("");
  // State for password
  const [password, setPassword] = useState("");
  // State for error message
  const [error, setError] = useState("");

  //Handles AdminLogin function
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" || username === "root") {
      navigate("/admin-page");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };
  return (
    <div className="main-container">
      <div className="login-container admin-login">
        <h2 className="form-title">Admin Login</h2>

        {error && <p className="error-message text-red-600 mb-2 ">{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
          {/* Username Div */}
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Username or Email"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="material-symbols-rounded">person</i>
          </div>

          {/* Password Div*/}
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="material-symbols-rounded">lock</i>
          </div>

          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
