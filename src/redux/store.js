/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import { tourReducer } from './tours/tours';
import { userReducer } from './user/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tours: tourReducer,
  },
});

export default store;
