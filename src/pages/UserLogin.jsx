import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {

  const navigate = useNavigate();
  const database = [
    {
      username: "user1@basketbook.ca",
      password: "pass1"
    },
    {
      username: "user2@basketbook.ca",
      password: "pass2"
    }
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

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
              navigate('/user-page');
            }
          } else {
            // Username not found
            alert("Login error");
          }
    }else{
      alert("please provide a valid input");
    }
    
  };

  const loginWithRedirectGoogle = (e) => {
    e.preventDefault();
    alert("Google Login");
    navigate('/user-page');
  };

  const loginWithRedirectApple = (e) => {
    e.preventDefault();
    alert("Apple Login");
    navigate('/user-page');
  };

  return (
    <div className="main-container">
      <div className="login-container user-login">
        <h2 className="form-title">Login in with</h2>
        <div className="social-login">
              <button className="social-button" onClick={loginWithRedirectGoogle}>
                <img src="googs.svg" alt="Google" className="social-icon" />
                Google
              </button>
          <button className="social-button" onClick={loginWithRedirectApple}>
            <img src="apple.svg" alt="Apple" className="social-icon" />
            Apple
          </button>
        </div>
        <p className="separator">
          <span>or</span>
        </p>

        <form action="#" className="login-form" onSubmit={handleSubmitEvent}>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Email address"
              className="input-field"
              required
            />
            <i className="material-symbols-rounded">mail</i>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
            />
            <i className="material-symbols-rounded eye-icon">visibility_off</i>
            <i className="material-symbols-rounded">lock</i>
          </div>
          <a href="#" className="forgot-pass-link">
            Forgot Password?
          </a>

          <button className="login-button">Log In</button>
        </form>

        <p className="signup-text">
          <a href="#">Don&apos;t have an account? Sign up now</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
