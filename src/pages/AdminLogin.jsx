import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const navigate = useNavigate();
  const database = [
    {
      username: "admin1@basketbook.ca",
      password: "pass1"
    },
    {
      username: "admin2@basketbook.ca",
      password: "pass2"
    }
  ];

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitEvent = (e) => {
      e.preventDefault();
      if (username!== "" && password !== "") {
            // Find user login info
            const userData = database.find((user) => user.username === username);
            // Compare user info
            if (userData) {
              if (userData.password !== password) {
                // Invalid password
                alert("Wrong password");
              } else {
                alert("Login success");
                navigate('/admin-page');
              }
            } else {
              // Username not found
            alert("Login error");
            }
      }else{
        alert("please provide a valid input");
      }
      
    };
  

  return (
    <div className="main-container">
      <div className="login-container admin-login">
        <h2 className="form-title">Admin Login</h2>

        <form action="#" className="login-form" onSubmit={handleSubmitEvent}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Username or Email"
              className="input-field"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="material-symbols-rounded">person</i>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="material-symbols-rounded">lock</i>
          </div>

          <button className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
