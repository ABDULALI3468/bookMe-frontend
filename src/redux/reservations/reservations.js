const ADD_RESERVATION = 'ADD_RESERVATION';
const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
const GET_API_DATA_RESERVATION = 'GET_API_DATA_RESERVATION';
const URL = 'https://booking-tour-app.herokuapp.com/reserve';
const URL2 = 'https://booking-tour-app.herokuapp.com/user_reservations';

const initialState = [];

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const removeReservation = (payload) => ({
  type: REMOVE_RESERVATION,
  payload,
});

export const getApiDataReservation = (payload) => ({
  type: GET_API_DATA_RESERVATION,
  payload,
});

export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    case REMOVE_RESERVATION:
      return state.filter(
        (reservation) => reservation.reservation_id !== action.payload,
      );
    case GET_API_DATA_RESERVATION:
      return [...action.payload];
    default:
      return state;
  }
};

export const GetReservationsAPI = (token) => async (dispatch) => {
  const response = await fetch(URL2, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const tours = await response.json();
  if (response.status === 200) {
    dispatch(getApiDataReservation(tours));
  }
};

export const PostReservationsAPI = (data, token) => async () => {
  const response = await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  if (response.status === 201) {
    // alert('Your Reservation Created Successfully!');
    GetReservationsAPI();
  } else {
    alert('OOPS! Your Reservation DID NOT Created!');
  }
};

export const deleteReservationApi = (obj, token) => async (dispatch) => {
  await fetch(`${URL2}/${obj.reservation_id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  dispatch(removeReservation(obj.reservation_id));
};
