import React, { Component,useState,useEffect } from 'react';
import Header from './header/header'
import './App.css';
import Tips from './tips/tips';
import Trade from './trade/trade';
import Guninventory from './gunInventory/gunInventory';
import Footer from './footer/footer'
import useBuyOperation from './Hooks/useBuyOperation.js'

function App(props) {
  
  const [
    UserInventoryList, //用户库存列表
    RobotInventoryList, //机器人库存列表
    UserCartList, //用户购物车列表
    RobotCartList, //机器人购物车列表
    AddToCartList, //添加到购物车回调
    DelFromCartlist //从购物车移除回调
  ] = useBuyOperation()

  return (
    <div className="App">
        <Header/>
        <Tips/>
        <Trade userlist={UserCartList} robotlist={RobotCartList} onChoose={(result,item)=>DelFromCartlist(item)}/>
        <Guninventory
         onChoose={(result,item)=>AddToCartList(item)}
         UserInventoryList={UserInventoryList}
         RobotInventoryList={RobotInventoryList}
        />
        <Footer/>
    </div>
  );
}

export default App;

