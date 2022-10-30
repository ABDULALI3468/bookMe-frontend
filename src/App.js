import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useDispatch } from 'react-redux';
import { addUSER } from './redux/user/user';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import DeleteTours from './components/DeleteTours';
import TourDetails from './components/TourDetails';
import CreateTour from './components/CreateTour';
import Reservation from './components/Reservation';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import './styles/index.css';

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
      <Nav />
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/LogIn" element={<LogInPage />} />
        <Route path="/CreateTour" element={<CreateTour />} />
        <Route path="/DeleteTours" element={<DeleteTours />} />
        <Route path="/tourDetails" element={<TourDetails />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
