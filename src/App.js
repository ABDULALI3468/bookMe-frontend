/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import CryptoJS from 'crypto-js';

import { addUSER } from './redux/user/user';
import Loader from './components/Loader';
import Nav from './components/Nav';
// import MainPage from './components/MainPage';
import DeleteTours from './components/DeleteTours';
import TourDetails from './components/TourDetails';
import CreateTour from './components/CreateTour';
import Reservation from './components/Reservation';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import './styles/index.css';

const MainPage = lazy(() => import('./components/MainPage'));

function App() {
  const loggedUser = localStorage.getItem('user');
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedUser) {
      const bytes = CryptoJS.AES.decrypt(loggedUser, 'user');
      const originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      dispatch(addUSER(originalText));
    }
  }, [loggedUser, dispatch]);

  return (
    <>
      {/* <Router> */}
      <Nav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/l" element={<Loader />} />
          <Route path="/tours/:tourID" element={<TourDetails />} />
          <Route path="/tours/delete" element={<DeleteTours />} />
          <Route path="/tours/create" element={<CreateTour />} />
          <Route path="/tours/reserve" element={<Reservation />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </Suspense>
      {/* </Router> */}
    </>
  );
}

export default App;
