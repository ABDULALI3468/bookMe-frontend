import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import DeleteTours from './components/DeleteTours';
import TourDetails from './components/TourDetails';
import CreateTour from './components/CreateTour';
import Reservation from './components/Reservation';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import store from './Redux/store';
import './styles/index.css';

function App() {
  return (
    <Provider store={store}>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tours/:tourID" element={<TourDetails />} />
          <Route path="/tours/delete" element={<DeleteTours />} />
          <Route path="/tours/create" element={<CreateTour />} />
          <Route path="/tours/reserve" element={<Reservation />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </>
    </Provider>
  );
}

export default App;
