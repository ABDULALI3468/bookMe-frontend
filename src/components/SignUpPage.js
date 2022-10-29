import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../redux/user/userAPI';
import '../styles/SignUpPage.css';

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
    console.log(value);
  };

  const createUser = (e) => {
    e.preventDefault();
    dispatch(signup(value, navigate));
    // navigate('/login');
    // if (dispatch(signup(value))) {
    //   navigate('/login');
    // }
  };

  useEffect(() => {
    document.title = 'Register';
  }, []);

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={createUser}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          required
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
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
      </form>
      <div className="form-links">
        <h3>Do you have an account?</h3>
        <p>you may Login!</p>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
