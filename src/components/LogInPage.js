import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../redux/user/userAPI';
import '../styles/registeration.css';
import logo from '../assets/images/apps-logo.webp';

const CriptoJS = require('crypto-js');

const Login = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(login(value));
    if (user.length > 0) {
      const cypherText = CriptoJS.AES.encrypt(
        JSON.stringify(user[0]),
        'user',
      ).toString();
      localStorage.setItem('user', cypherText);
      navigate('/');
    }
  };

  useEffect(() => {
    if (user.length > 0) {
      const cypherText = CriptoJS.AES.encrypt(
        JSON.stringify(user[0]),
        'user',
      ).toString();
      localStorage.setItem('user', cypherText);
      navigate('/');
    }
  }, [navigate, user]);

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="login-page">
      <img className="app-logo" src={logo} alt="" />
      <h1 className="welcome">Welcome to Tourify!</h1>
      <div className="form">
        <form className="login-form" onSubmit={loginUser}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={onChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            onChange={onChange}
          />

          <button type="submit">Login</button>

          <p className="message">
            Not registered?
            <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
