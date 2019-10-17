import React, { useState, useEffect } from 'react';
import data from '../mock.js'

//加入到交易列表
function UseToTradeList(){
    const [userlist,setuserlist]=useState([])
    const [robotlist,setrobotlist]=useState([])
    const ToTradeListFun = (item) => {    
      if(item.type==1){
        setuserlist([...userlist,item])
      }else if(item.type==2){
        setrobotlist([...robotlist, item])
      }
    }
    
    return  [userlist,robotlist,ToTradeListFun]
}

//加入到库存列表
function UseToGunList(){
    const [NewuserGunList,setusergunlist]=useState(data.userdata)
    const [NewrobotGunList,setrobotgunlist]=useState(data.robotdata)
    const ToGunListFun=(item)=>{
        if(item.type==1){
            setusergunlist([...NewuserGunList,item])
          }else if(item.type==2){
            setrobotgunlist([...NewrobotGunList,item])
          } 
          //console.log(NewuserGunList)
    }
    return [NewuserGunList.sort(compare('price',1)),NewrobotGunList.sort(compare('price',1)),ToGunListFun]
}


//比较函数
function compare(property,rev){
  if(rev==2){
     return function(a,b){
          var value1 = a[property];
          var value2 = b[property];
          return value1 - value2;
      } 
  }else if(rev==1){
      return function(a,b){
          var value1 = a[property];
          var value2 = b[property];
          return value2 - value1;
      } 
  }
  
}


export default {UseToTradeList,UseToGunList}