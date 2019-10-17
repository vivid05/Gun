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
  const [filterList,setfilterlist] = useState([]) //初始化关键词过滤库存列表
  const [keyword,setkeyword] = useState()  //初始化关键词

  //根据相关条件过滤库存列表
  useEffect(()=>{
    if(userid==1){
      if(keyword){
        setCurrentList(filterList)
      }else{
        setCurrentList(userGunList)
      }
    }else if(userid==2){
      if(keyword){
        setCurrentList(filterList)
      }else{
        setCurrentList(robotGunList)
      }
    }
  })

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
  const search=(result,filterList,keyword)=>{
      setfilterlist(filterList)  
      setkeyword(keyword)
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
        />
        <Footer/>
    </div>
  );
}

export default App;

