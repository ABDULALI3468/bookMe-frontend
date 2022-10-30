/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
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
  }, [navigate, user.length]);

  const deleteTour = (id) => {
    if (user.length > 0) {
      dispatch(deleteTourApi(id, user[0].token));
    }
  };

  useEffect(() => {
    document.title = 'Delete Tours';
  }, []);

  useEffect(() => {
    dispatch(fetchApiDataTours());
  }, [dispatch]);

  return (
    <div className="delete-tour">
      <div className="tour-container">
        {tours.map((tour) => (
          <div className="tour-element" key={tour.id}>
            <img className="tour-del-image" src={tour.photo} alt="tour" />
            <div className="tour-overlay"></div>
            <div className="midle">
              <h2 className="tour-heading">{`${tour.title.substr(
                0,
                40,
              )}...`}</h2>
              <p className="tour-detail">{`${tour.description.substr(
                0,
                50,
              )}...`}</p>
              {user.length > 0 ? (
                <button
                  type="button"
                  className={`${
                    user[0].user.user_id === tour.user_id ? '' : 'disable'
                  }`}
                  onClick={() => deleteTour(tour.id)}
                >
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
