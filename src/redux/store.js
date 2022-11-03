/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import { tourReducer } from './tours/tours';
import { reservationReducer } from './reservations/reservations';
import { userReducer } from './user/user';

const store = configureStore({
  reducer: {
    tours: tourReducer,
    reservations: reservationReducer,
    user: userReducer,
  },
});

export default store;
