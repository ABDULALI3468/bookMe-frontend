const ADD_TOUR = 'ADD_TOUR';
const REMOVE_TOUR = 'REMOVE_TOUR';
const GET_API_DATA_TOUR = 'GET_API_DATA_TOUR';
const GET_API_DATA_TOUR_DETAIL = 'GET_API_DATA_TOUR_DETAIL';

const initialState = [];

export const addTour = (payload) => ({
  type: ADD_TOUR,
  payload,
});

export const removeTour = (payload) => ({
  type: REMOVE_TOUR,
  payload,
});

export const getApiDataTour = (payload) => ({
  type: GET_API_DATA_TOUR,
  payload,
});

export const getApiDataTourDetail = (payload) => ({
  type: GET_API_DATA_TOUR_DETAIL,
  payload,
});

export const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOUR:
      return [...state, action.payload];
    case REMOVE_TOUR:
      return state.filter((tour) => tour.id !== action.payload);
    case GET_API_DATA_TOUR:
      return [...action.payload];
    case GET_API_DATA_TOUR_DETAIL:
      return [action.payload];
    default:
      return state;
  }
};
