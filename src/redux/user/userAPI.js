import { addUSER, removeUSER } from './user';

const SIGNUP = 'https://booking-tour-app.herokuapp.com/signup';
const LOGIN = 'https://booking-tour-app.herokuapp.com/login';

export const login = (data) => async (dispatch) => {
  const response = await fetch(LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    const data = await response.json();
    dispatch(addUSER(data));
  } else {
    alert('You are not logged in, Kindly consider rechecking your credentials');
  }
};

export const signup = (data, navigate) => async () => {
  const response = await fetch(SIGNUP, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status !== 201) {
    alert('Your Sign Up Request was not successful');
    navigate('/SignUp');
  } else {
    navigate('/login');
  }
};

export const logout = (id, token) => async (dispatch) => {
  const response = await fetch(`SIGNUP/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  if (response.status === 200) {
    dispatch(removeUSER(id));
  }
};
