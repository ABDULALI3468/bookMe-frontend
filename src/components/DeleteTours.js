/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiDataTours } from '../redux/tours/toursAPI';
import '../styles/delete.css';

const DeleteTours = () => {
  const tours = useSelector((store) => store.tours);
  const dispatch = useDispatch();

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
              <button type="button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteTours;
