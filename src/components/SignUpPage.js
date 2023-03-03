import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../redux/user/userAPI';
import '../styles/registeration.css';
import logo from '../assets/images/apps-logo.webp';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    dispatch(signup(value, navigate));
  };

  useEffect(() => {
    document.title = 'Register';
  }, []);

  return (
    <div className="login-page">
      <img className="app-logo" src={logo} alt="" />
      <h1 className="welcome">Welcome back to Tourify!</h1>
      <div className="form">
        <form className="register-form" onSubmit={createUser}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            required
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            required
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
            onChange={onChange}
          />

          <button type="submit" value="add-tour">
            Register
          </button>
          <p className="message">
            Already registered?
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
