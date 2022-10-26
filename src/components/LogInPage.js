import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LogInPage.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <h1>Welcome!!!</h1>
        <form className="login-form">
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="links">
          <h3>Don&apos;t you have an account yet?</h3>
          <Link to="/SignUp">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
