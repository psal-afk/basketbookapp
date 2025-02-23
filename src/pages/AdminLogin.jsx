const AdminLogin = () => {
  return (
    <div className="main-container">
      <div className="login-container admin-login">
        <h2 className="form-title">Admin Login</h2>

        <form action="#" className="login-form">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Username or Email"
              className="input-field"
              required
            />
            <i className="material-symbols-rounded">person</i>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
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
