/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Link } from 'react-router-dom';
// import Swiper for carrousel
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import tour1 from '../assets/images/tour1.jpeg';
import tour2 from '../assets/images/tour2.jpg';
import tour3 from '../assets/images/tour3.jpeg';
import tour4 from '../assets/images/tour4.jpeg';

import '../styles/main.css';
import Dots from './Dots';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainPage = () => {
  return (
    <main className="main-page">
      <div className="header">
        <h1>OUR LATEST TOURS</h1>
        <p>Please select a Tour</p>
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
        <SwiperSlide>
          <Link to="/TourDetails">
            <div className="each-tour">
              <img src={tour1} className="tour-image" alt="Tour" />
              <h2 className="tour-heading">NORTHEN LIGHTS</h2>
              <Dots />
              <p className="tour-detail">
                This is an amazing place in North of Canada which gathers people
                attention from all over the World.
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/TourDetails">
            <div className="each-tour">
              <img src={tour2} className="tour-image" alt="Tour" />
              <h2 className="tour-heading">NORTHEN LIGHTS</h2>
              <Dots />
              <p className="tour-detail">
                This is an amazing place in North of Canada which gathers people
                attention from all over the World
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/TourDetails">
            <div className="each-tour">
              <img src={tour3} className="tour-image" alt="Tour" />
              <h2 className="tour-heading">NORTHEN LIGHTS</h2>
              <Dots />
              <p className="tour-detail">
                This is an amazing place in North of Canada which gathers people
                attention from all over the World
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/TourDetails">
            <div className="each-tour">
              <img src={tour4} className="tour-image" alt="Tour" />
              <h2 className="tour-heading">NORTHEN LIGHTS</h2>
              <Dots />
              <p className="tour-detail">
                This is an amazing place in North of Canada which gathers people
                attention from all over the World
              </p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default MainPage;
