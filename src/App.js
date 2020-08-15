import React from 'react';

import Navbar from './components/Navbar/Navbar'

import './App.css';

import PomodoreTimer from './components/PomodoreTimer/PomodoreTimer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PomodoreTimer />
    </div>
  );
}

export default App;
