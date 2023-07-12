import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="image-container">
        {/* Place your image here */}
        <img src="path/to/your/image" alt="Signup" />
      </div>
      <div className="signup-details">
        {/* Signup form goes here */}
        <form>
          <h2>Create an Account</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
