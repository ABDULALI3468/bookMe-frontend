/* eslint-disable  no-unused-vars */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { AiFillRightCircle } from 'react-icons/ai';
import {
  GetReservationsAPI,
  deleteReservationApi,
} from '../redux/reservations/reservations';
import '../styles/tourDetails.css';
import '../styles/showReservation.css';

const ShowReservation = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.length < 1) {
      navigate('/login');
    }
  }, [navigate, user]);

  const dispatch = useDispatch();
  const reservations = useSelector((store) => store.reservations);
  useEffect(() => {
    if (user.length > 0) {
      dispatch(GetReservationsAPI(user[0].token));
    }
  }, [dispatch, user]);

  const deleteReservation = (obj) => {
    if (user.length > 0) {
      dispatch(deleteReservationApi(obj, user[0].token));
    }
    navigate('/tours/reservations');
  };
  useEffect(() => {
    document.title = 'My reservations';
  }, []);

  if (reservations.length > 0) {
    return (
      <div className="show-reservation-container">
        {reservations.map((obj) => (
          <div className="reservation-container" key={obj.reservation_id}>
            <img src={obj.tour.image} alt="" className="reservation-image" />
            <div className="reservation-details">
              <h1 className="reservation-headline">
                {obj.tour.name.length > 20
                  ? `${obj.tour.name.substr(0, 15)}...`
                  : obj.tour.name}
              </h1>
              <p className="reservation-description">
                {obj.tour.description.length > 40
                  ? `${obj.tour.description.substr(0, 40)}...`
                  : obj.tour.description}
              </p>
              <p className="reservation-city">{obj.tour.city}</p>
              <button
                type="button"
                className="reserve-button cancel-reservation"
                onClick={() => deleteReservation(obj)}
              >
                Cancel Reservation
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="no-reservations">
      <p>You have no reservations yet. Please create one!</p>
      <button
        type="button"
        className="reservation-link"
        onClick={() => navigate('/tours/reservation-form')}
      >
        Create Reservation!
      </button>
    </div>
  );
};

export default ShowReservation;
