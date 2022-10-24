import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import './styles/index.css';
import DeleteTours from './components/DeleteTours';

function App() {
  return (
    <>
      <MainPage />
      <div className="app">
        <Nav />

        <Routes>
          <Route path="/DeleteTours" element={<DeleteTours />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
