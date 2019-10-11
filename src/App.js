import React from 'react';
import Header from './header/header'
import './App.css';
import Tips from './tips/tips';
import Trade from './trade/trade';
import GunCard from './gunCard/gunCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tips/>
      <Trade/>
      <GunCard/>
    </div>
  );
}

export default App;

