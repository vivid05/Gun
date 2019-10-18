import React, { useState, useEffect } from 'react';
import data from '../mock.js'


const UseOperation = () => {
  const [UserCartList,setusercartlist] = useState([])
  const [RobotCartList,setrobotcartlist] = useState([])
  const [UserInventoryList,setuserinventorylist] = useState(data.userdata.sort(compare('price',1)))
  const [RobotInventoryList,setrobotinventorylist] = useState(data.robotdata.sort(compare('price',1)))

  const AddToCartList=(item)=>{
    if(item.type==1){
      setusercartlist([...UserCartList,item])
      for(var i=0;i<UserInventoryList.length;i++){
        if(UserInventoryList[i].id==item.id){
          UserInventoryList.splice(i,1)
        }
    }
    }else if(item.type==2){
      setrobotcartlist([...RobotCartList,item])
      for(var i=0;i<RobotInventoryList.length;i++){
        if(RobotInventoryList[i].id==item.id){
          RobotInventoryList.splice(i,1)
        }
      }
    }
  }

  const DelFromCartlist=(item)=>{
    if(item.type==1){
      setuserinventorylist([...UserInventoryList,item])
      for(var i=0;i<UserCartList.length;i++){
        if(UserCartList[i].id==item.id){
          UserCartList.splice(i,1)
        }
    }
    }else if(item.type==2){
      setrobotinventorylist([...RobotInventoryList,item])
      for(var i=0;i<RobotCartList.length;i++){
        if(RobotCartList[i].id==item.id){
          RobotCartList.splice(i,1)
        }
      }
    }
  }


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
  
  return [UserInventoryList,RobotInventoryList,UserCartList,RobotCartList,AddToCartList,DelFromCartlist]
}




/* //加入到交易列表
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
  
} */


export default UseOperation