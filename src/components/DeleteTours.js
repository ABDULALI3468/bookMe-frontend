/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteTourApi, fetchApiDataTours } from '../redux/tours/toursAPI';
import '../styles/delete.css';

const DeleteTours = () => {
  const user = useSelector((store) => store.user);
  const tours = useSelector((store) => store.tours);
  const [filteredTours, setfilteredTours] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiDataTours());
  }, [dispatch]);

  useEffect(() => {
    if (user.length === 0 || tours.length === 0) {
      navigate('/login');
    } else {
      setfilteredTours(
        tours.filter((tour) => user[0].user.user_id === tour.user_id),
      );
      navigate('/tours/delete');
    }
  }, [user.length, tours.length]);

  useEffect(() => {
    if (tours.length < 1) {
      navigate('/');
    }
  }, [navigate, tours]);

  const deleteTour = (id) => {
    if (user.length > 0) {
      dispatch(deleteTourApi(id, user[0].token));
    }
  };

  useEffect(() => {
    document.title = 'Delete Tours';
  }, []);

  if (filteredTours.length > 0) {
    return (
      <div className="delete-tour">
        <div className="tour-container">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="tour-element">
              <img className="tour-del-image" src={tour.image} alt="tour" />
              <div className="tour-overlay"></div>
              <div className="midle">
                <h2 className="tour-heading">{`${tour.name.substr(
                  0,
                  40,
                )}...`}</h2>
                <p className="tour-detail">{`${tour.description.substr(
                  0,
                  50,
                )}...`}</p>
                {user.length > 0 ? (
                  <button type="button" onClick={() => deleteTour(tour.id)}>
                    Delete
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="no-reservations">
      <p>
        You have no Tours under your Ownership. Please consider creating one!
      </p>
      <button
        type="button"
        className="reservation-link"
        onClick={() => navigate('/tours/create')}
      >
        Consider planing a Tour
      </button>
    </div>
  );
};

export default DeleteTours;
