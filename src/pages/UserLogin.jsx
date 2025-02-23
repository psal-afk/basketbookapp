const UserLogin = () => {
  return (
    <div className="main-container">
      <div className="login-container user-login">
        <h2 className="form-title">Login in with</h2>
        <div className="social-login">
          <button className="social-button">
            <img src="googs.svg" alt="Google" className="social-icon" />
            Google
          </button>
          <button className="social-button">
            <img src="apple.svg" alt="Apple" className="social-icon" />
            Apple
          </button>
        </div>
        <p className="separator">
          <span>or</span>
        </p>

        <form action="#" className="login-form">
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
