import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        
        <img src="your-image-url.jpg" alt="Login" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <div className="form-bottom">
            <button type="submit">Log in</button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
