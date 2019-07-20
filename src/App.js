import React from 'react';
import './App.css';
import ReservationsList from './components/reservation/ReservationsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReservationsList/>
      </header>
    </div>
  );
}

export default App;
