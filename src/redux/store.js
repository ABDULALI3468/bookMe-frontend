/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
