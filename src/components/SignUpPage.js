import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUpPage.css';

const SignUp = () => {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form className="signup-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" value="add-tour">Register</button>
      </form>
      <div className="form-links">
        <h3>Do you have an account?</h3>
        <p>you may Login!</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
