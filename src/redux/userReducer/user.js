const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const GET_DATA_USER = 'GET_DATA_USER';

const initialState = [];

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const getDataUser = (payload) => ({
  type: GET_DATA_USER,
  payload,
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [action.payload];
    case REMOVE_USER:
      return [];
    case GET_DATA_USER:
      return [action.payload];
    default:
      return state;
  }
};
