import { useState } from 'react';
import './App.css';
import data from '../data.js';
import Tours from './components/Tours.jsx';

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  }
  function allToursBack() {
    setTours(data); //sara data se fhir se initialize krdo
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours left</h2>
        <button
          onClick={allToursBack}
          className="ref-btn"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Holidays Places</h1>
      <Tours
        tours={tours}
        removeTour={removeTour}
      ></Tours>
    </div>
  );
}

export default App;
