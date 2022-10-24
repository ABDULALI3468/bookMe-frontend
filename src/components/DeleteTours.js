import React from 'react';
import tour1 from '../assets/images/tour1.jpeg';

import '../styles/delete.css';

const DeleteTours = () => {
  return (
    <div className="delete-tour">
      <div className="tour-container">
        <div className="tour-element">
          <img src={tour1} className="tour-image" alt="Tour" />
          <div className="midle">
            <h2 className="tour-heading">NORTHEN LIGHTS</h2>
            <p className="tour-detail">
              This is an amazing place in North of Canada which gathers people
              attention from all over the World
            </p>
            <button type="button">Delete</button>
          </div>
        </div>
        <div className="tour-element">
          <img src={tour1} className="tour-image" alt="Tour" />
          <div className="midle">
            <h2 className="tour-heading">NORTHEN LIGHTS</h2>
            <p className="tour-detail">
              This is an amazing place in North of Canada which gathers people
              attention from all over the World
            </p>
            <button type="button">Delete</button>
          </div>
        </div>
        <div className="tour-element">
          <img src={tour1} className="tour-image" alt="Tour" />
          <div className="midle">
            <h2 className="tour-heading">NORTHEN LIGHTS</h2>
            <p className="tour-detail">
              This is an amazing place in North of Canada which gathers people
              attention from all over the World
            </p>
            <button type="button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTours;
