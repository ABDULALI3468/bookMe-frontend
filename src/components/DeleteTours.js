/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteTourApi, fetchApiDataTours } from '../redux/tours/toursAPI';
import '../styles/delete.css';

const DeleteTours = () => {
  const user = useSelector((store) => store.user);
  const tours = useSelector((store) => store.tours);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.length === 0) {
      navigate('/login');
    } else {
      navigate('/tours/delete');
    }
  }, [navigate, user]);

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

  return (
    <div className="delete-tour">
      <div className="tour-container">
        {tours.map((tour) => (
          <div
            className={`${
              user[0].user.user_id === tour.user_id ? 'tour-element' : 'disable'
            }`}
            key={tour.id}
          >
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
};

export default DeleteTours;
