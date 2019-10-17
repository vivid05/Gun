import React, { Component,useState,useEffect } from 'react';
import Header from './header/header'
import './App.css';
import Tips from './tips/tips';
import Trade from './trade/trade';
import Guninventory from './gunInventory/gunInventory';
import Footer from './footer/footer'
import useBuyOperation from './Hooks/useBuyOperation.js'

function App(props) {
  const [userlist,robotlist,ToTradeListFun] = useBuyOperation.UseToTradeList()  //交易列表区操作Hook
  const [userGunList,robotGunList,ToGunListFun] = useBuyOperation.UseToGunList() //库存列表区操作Hook
  const [CurrentList,setCurrentList] = useState(userGunList) //初始化库存列表
  const [userid,setuserid] = useState(1) //初始化库存id
  const [KeywordfilterList,setkeywordfilterlist] = useState([]) //初始化关键词过滤库存列表
  const [PricefilterList,setpricefilter] = useState([])

  //根据相关条件过滤库存列表
  useEffect(()=>{
    if(KeywordfilterList.length==0){
      ToggleList()
    }else{
      setCurrentList(KeywordfilterList)
    }
  },[KeywordfilterList])

  useEffect(()=>{
    if(PricefilterList.length==0){
      ToggleList()
    }else{
      setCurrentList(PricefilterList)
    }
  },[PricefilterList])


  //切换库存列表项
  const ToggleList=()=>{
    if(userid==1){
      setCurrentList(userGunList)
    }else if(userid==2){
      setCurrentList(robotGunList)
    }
  }

  //库存列表卡片点击回调
  const ToTradeList = (result, msg) => {
    ToTradeListFun(msg)
  }


  //交易列表卡片点击回调
  const ToGunlist=(result,msg)=>{
    ToGunListFun(msg)
  }

  //切换库存列表项回调
  const ChangeList=(result,msg)=>{
    setuserid(msg)
  }

  //根据关键词搜索回调
  const search=(result,KeywordfilterList)=>{
      setkeywordfilterlist(KeywordfilterList)  

  }

  const Pricesel=(result,Newarr)=>{
    setpricefilter(Newarr)
  }

  return (
    <div className="App">
        <Header/>
        <Tips/>
        <Trade userlist={userlist} robotlist={robotlist} onChoose={ToGunlist}/>
        <Guninventory
         onChoose={ToTradeList} 
         onUseridClick={ChangeList} 
         GunList={CurrentList} 
         search={search}
         Pricesel={Pricesel}
        />
        <Footer/>
    </div>
  );
}

export default App;

