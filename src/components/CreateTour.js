import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { postTourApi } from '../redux/tours/toursAPI';
import '../styles/CreateTour.css';

const CreateTour = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.length === 0) {
      navigate('/login');
    }
  }, [navigate, user]);

  const newTour = {
    name: '',
    duration: '',
    description: '',
    city: '',
    price: '',
    image: '',
  };

  const [state, setState] = useState(newTour);
  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    let formCompleted = true;
    Object.keys(state).forEach((key) => {
      if (state[key] === '') {
        formCompleted = false;
      }
    });
    if (formCompleted) {
      dispatch(postTourApi(state, user[0].token));
      setState(newTour);
      navigate('/');
    }
  };

  useEffect(() => {
    document.title = 'Create New Tour';
  }, []);

  return (
    <div className="tour-content">
      <h1>CREATE A TOUR</h1>
      <form className="TourForm" onSubmit={submitForm}>
        <div className="form-column">
          <input
            type="text"
            placeholder="Tour Title"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Duration (weeks)"
            min="1"
            value={state.duration}
            onChange={(e) => setState({ ...state, duration: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={state.description}
            onChange={(e) => setState({ ...state, description: e.target.value })}
            required
          />
        </div>
        <div className="column-rigth">
          <div>
            <input
              type="text"
              placeholder="City"
              value={state.city}
              onChange={(e) => setState({ ...state, city: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Cost"
              value={state.price}
              onChange={(e) => setState({ ...state, price: e.target.value })}
              required
            />
            <input
              type="url"
              placeholder="Photo URL"
              value={state.image}
              onChange={(e) => setState({ ...state, image: e.target.value })}
              required
            />
          </div>
          <div>
            <button className="add-tour-btn" type="submit" value="add-tour">
              Create Tour
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTour;
