/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import { tourReducer } from './tours/tours';

const store = configureStore({
  reducer: {
    tours: tourReducer,
  },
});

export default store;
