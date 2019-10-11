import React from 'react';
import Header from './header/header'
import './App.css';
import Tips from './tips/tips';
import Trade from './trade/trade';
import Guninventory from './gunInventory/gunInventory';
import Footer from './footer/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Tips/>
      <Trade/>
      <Guninventory/>
      <Footer/>
    </div>
  );
}

export default App;

