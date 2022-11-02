/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable object-curly-newline */
import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import '../styles/tourDetails.css';

import { FiSettings } from 'react-icons/fi';
import { AiFillRightCircle } from 'react-icons/ai';
import { GetToursAPI } from '../redux/tours/toursAPI';
// import tour3 from '../assets/images/tour3.jpeg';

const TourDetails = () => {
  const { tourID } = useParams();
  const dispatch = useDispatch();
  const Store = useSelector((store) => store.tours);
  useEffect(() => {
    document.title = dispatch(GetToursAPI(tourID));
  }, [dispatch, tourID]);
  const tour = Store[0];

  useEffect(() => {
    document.title = 'Tour Details';
  }, []);

  return (
    <div className="tour-details-container">
      <div className="tour-image-container">
        <img className="tours-image" src={tour.image} alt="Tour" />
      </div>

      <div className="tour-details">
        <h1 className="tour-heading">{tour.name}</h1>
        <p className="tour-exp">{tour.description}</p>
        <ul className="specifications">
          <li className="spec">
            City
            <span className="spec-info">{tour.city}</span>
          </li>
          <li className="spec">
            Duration(weeks)
            <span className="spec-info">{tour.duration}</span>
          </li>
          <li className="spec">
            Cost
            <span className="spec-info">{tour.price}</span>
          </li>
          <li className="spec">
            Available Now
            <span className="spec-info"></span>
          </li>
        </ul>
        <button type="button" className="reserve-button">
          <FiSettings className="reserve-symbol-1" />
          <Link to="/tours/reservation-form">Reserve</Link>
          <AiFillRightCircle className="reserve-symbol-2" />
        </button>
      </div>
    </div>
  );
};

export default TourDetails;
