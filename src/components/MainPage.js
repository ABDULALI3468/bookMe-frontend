/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import Swiper for carrousel
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchApiDataTours } from '../redux/tours/toursAPI';
import '../styles/main.css';
import Dots from './Dots';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainPage = () => {
  const tours = useSelector((store) => store.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiDataTours());
  }, [dispatch]);

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
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <Link to={`/tours/${tour.id}`}>
              <div className="each-tour">
                <img src={tour.photo} className="tour-image" alt="Tour" />
                <h2 className="tour-heading">{`${tour.title.substr(
                  0,
                  30,
                )}...`}</h2>
                <Dots />
                <p className="tour-detail">{`${tour.description.substr(
                  0,
                  50,
                )}...`}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default MainPage;
