/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable object-curly-newline */
import React from 'react';
import '../styles/tourDetails.css';

import { FiSettings } from 'react-icons/fi';
import { AiFillRightCircle } from 'react-icons/ai';
import tour3 from '../assets/images/tour3.jpeg';

const TourDetails = () => {
  return (
    <div className="tour-details-container">
      <div className="tour-image-container">
        <img className="tours-image" src={tour3} alt="Tour" />
      </div>

      <div className="tour-details">
        <h1 className="tour-heading">NORTHEN LIGHTS</h1>
        <p className="tour-exp">
          This is an amazing place in North of Canada which gathers people
          attention from all over the World.
        </p>
        <ul className="specifications">
          <li className="spec">
            City
            <span className="spec-info">Makkah</span>
          </li>
          <li className="spec">
            Duration(weeks)
            <span className="spec-info">5.0</span>
          </li>
          <li className="spec">
            Cost
            <span className="spec-info">$500</span>
          </li>
          <li className="spec">
            Available Now
            <span className="spec-info"></span>
          </li>
        </ul>
        <button type="button" className="reserve-button">
          <FiSettings className="reserve-symbol-1" />
          Reserve
          <AiFillRightCircle className="reserve-symbol-2" />
        </button>
      </div>
    </div>
  );
};

export default TourDetails;
