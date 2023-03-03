/* eslint-disable */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getApiDataTour } from '../redux/tours/tours';
import { fetchApiDataTours } from '../redux/tours/toursAPI';
import '../styles/main.css';
import Dots from './Dots';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainPage = () => {
  const user = useSelector((store) => store.user);
  const tours = useSelector((store) => store.tours);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchApiDataTours());
  }, [dispatch]);

  useEffect(() => {
    document.title =
      'Bookme World: Deals on Things to do, Activities & Attractions';
  }, []);

  return (
    <main className="main-page">
      <div className="header">
        <h1>OUR LATEST TOURS</h1>
        <p>
          {user.length > 0 ? `Hello ${user[0].user.name}, ` : ''}
          Please select a Tour
        </p>
        <Dots />
      </div>

      <Swiper
        className="tours-container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        slidesPerView={2}
        // loop
        // centeredSlides
        grabCursor="true"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          850: {
            slidesPerView: 2,
          },
        }}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <Link to={`/tours/${tour.id}`}>
              <div className="each-tour">
                <img src={tour.image} className="tour-image" alt="Tour" />
                <h2 className="tour-heading">
                  {tour.name && tour.name.length > 20
                    ? `${tour.name.substr(0, 50)}...`
                    : tour.name}
                </h2>
                <Dots />
                <p className="tour-detail">{`${
                  tour.description && tour.description.substr(0, 50)
                }...`}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {tours.length === 0 ? (
        <>
          <p className="no-tours">WE ARE SORRY CURRENTLY NO TOURS AVAILABLE</p>
          <button
            type="button"
            className="reservation-link"
            onClick={() => navigate('/tours/create')}
          >
            Plan a Tour!
          </button>
        </>
      ) : (
        ''
      )}
    </main>
  );
};

export default MainPage;
