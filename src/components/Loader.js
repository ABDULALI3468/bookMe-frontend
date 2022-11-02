import React from 'react';
import '../styles/loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="shadow"></div>
    </div>
  );
};

export default Loader;
