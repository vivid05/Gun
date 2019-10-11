import React from 'react';
import Header from './header/header'
import './App.css';
import Tips from './tips/tips';
import Trade from './trade/trade';
import Guninventory from './gunInventory/gunInventory';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tips/>
      <Trade/>
      <Guninventory/>
    </div>
  );
}

export default App;

