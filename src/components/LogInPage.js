import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../redux/user/userAPI';
import '../styles/LogInPage.css';

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
    console.log(value);
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
    <div className="login">
      <div className="login-wrapper">
        <h1>Welcome!!!</h1>
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
