const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

const initialState = [];

export const addUSER = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const removeUSER = (payload) => {
  return {
    type: REMOVE_USER,
    payload,
  };
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [action.payload];
    case REMOVE_USER:
      return [];
    default:
      return state;
  }
};
