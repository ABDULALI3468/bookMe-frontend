import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiFillRightCircle } from 'react-icons/ai';
import '../styles/reservation.css';

const Reservation = () => {
  return (
    <div className="reservations-container">
      <div className="reservation-background"></div>
      <div className="overlay"></div>
      <div className="reservation-content">
        <h1 className="reservation-heading">Reservations</h1>
        <form action="" method="post" className="reservation-form">
          <input
            type="date"
            aria-label="Date"
            name=""
            id=""
            className="reservation-input"
            placeholder=""
            required
          />
          <input
            type="number"
            name=""
            id=""
            className="reservation-input"
            min="1"
            placeholder="Number of Persons"
            required
          />
          <select id="tour_id" className="reservation-input">
            <option>--Option--</option>
            <option value="1">Mars Tour</option>
            <option value="10">
              White Desert Tour Black Desert camping safari
            </option>
            <option value="11">Maldives Full Fun Adventure</option>
            <option value="15">Europe Express Winter</option>
            <option value="26">Korean Tour</option>
            <option value="30">ggi</option>
          </select>
        </form>
        {/* <button className="reservation-button" type="button">
          Reserve
        </button> */}
        <button type="button" className="reserve-button">
          <FiSettings className="reserve-symbol-1" />
          Reserve
          <AiFillRightCircle className="reserve-symbol-2" />
        </button>
      </div>
    </div>
  );
};

export default Reservation;
