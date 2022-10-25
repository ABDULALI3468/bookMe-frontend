import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

import './styles/index.css';
import DeleteTours from './components/DeleteTours';
import CreateTour from './components/CreateTour';

function App() {
  return (
    <>
      <div className="app">
        <Nav />

        <Routes>
          <Route path="/DeleteTours" element={<DeleteTours />} />
          <Route path="/CreateTour" element={<CreateTour />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
