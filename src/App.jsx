import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import data from './data.js';
import Tours from './components/Tours.jsx';

function App() {
  const [tours, settours] = useState(data);

  return (
    <div>
      <h1>Holidays Places</h1>
      <Tours tours={tours}></Tours>
    </div>
  );
}

export default App;
