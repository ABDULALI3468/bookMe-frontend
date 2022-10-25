import React from 'react';
import '../styles/CreateTour.css';

const CreateTour = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="tour-content">
      <h1>CREATE A TOUR</h1>
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        <br />

        consectetur, adipisci velit...
        There is no one who loves pain itself, who seeks after it and w
      </p>
      <form className="TourForm" onSubmit={submitForm}>
        <div className="form-column">
          <input type="text" placeholder="Tour Title" required />
          <input type="number" placeholder="Duration (weeks)" min="1" required />
          <textarea placeholder="Description" required />
        </div>
        <div className="column-rigth">
          <div>
            <input type="text" placeholder="City" required />
            <input type="number" placeholder="Cost" required />
            <input type="text" placeholder="Photo URL" required />
          </div>
          <div>
            <button className="add-tour-btn" type="submit" value="add-tour">Create Tour</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTour;
