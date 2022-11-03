import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { FiSettings } from 'react-icons/fi';
import { AiFillRightCircle } from 'react-icons/ai';
import { fetchApiDataTours } from '../redux/tours/toursAPI';
import { PostReservationsAPI } from '../redux/reservations/reservations';

import '../styles/reservation.css';

const Reservation = () => {
  const userStore = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore.length < 1) {
      navigate('/login');
    }
  }, [navigate, userStore]);

  const [value, setValue] = useState({
    date: '',
    tour_id: '',
  });

  const onChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
    console.log(value);
  };

  // const con = () => console.log('BUTTON RESERVE');

  const dispatch = useDispatch();
  const Store = useSelector((store) => store.tours);
  useEffect(() => {
    dispatch(fetchApiDataTours());
  }, [dispatch]);

  const Reserve = (e) => {
    e.preventDefault();
    if (value.tour_id > 0 && userStore.length > 0) {
      dispatch(PostReservationsAPI(value, userStore[0].token));
      navigate('/tours/reservations');
    } else {
      // eslint-disable-next-line
      alert('Please select a tour');
    }
  };

  useEffect(() => {
    document.title = 'Create a Reservation';
  }, []);

  return (
    <div className="reservations-container">
      <div className="reservation-background"></div>
      <div className="overlay"></div>
      <div className="reservation-content">
        <h1 className="reservation-heading">Reservations</h1>

        <form onSubmit={Reserve} className="reservation-form" action="">
          <input
            type="date"
            aria-label="Date"
            name=""
            id="date"
            className="reservation-input"
            placeholder=""
            onChange={onChange}
            required
          />
          <input
            type="number"
            name=""
            id="persons_number"
            className="reservation-input"
            min="1"
            placeholder="Number of Persons"
            // onChange={onChange}
            required
          />
          <select
            id="tour_id"
            className="reservation-input"
            onChange={onChange}
          >
            <option key="option">--Option--</option>
            {Store.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
          </select>
        </form>

        <button className="reserve-button" type="submit" onClick={Reserve}>
          <FiSettings className="reserve-symbol-1" />
          Reserve
          <AiFillRightCircle className="reserve-symbol-2" />
        </button>
      </div>
    </div>
  );
};

export default Reservation;
