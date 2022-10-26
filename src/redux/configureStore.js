/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userReducer/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});