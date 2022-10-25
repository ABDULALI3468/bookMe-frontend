import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import './styles/index.css';
import TourDetails from './components/TourDetails';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/tourDetails" element={<TourDetails />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
