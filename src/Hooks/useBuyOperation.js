import  { useState } from 'react';
import data from '../mock.js'

const UseOperation = () => {
  const [UserCartList,setusercartlist] = useState([]) //初始化用户购物车列表
  const [RobotCartList,setrobotcartlist] = useState([]) //初始化机器人购物车列表
  const [UserInventoryList,setuserinventorylist] = useState(data.userdata.sort(compare('price',1))) //初始化用户库存列表，默认降序排序
  const [RobotInventoryList,setrobotinventorylist] = useState(data.robotdata.sort(compare('price',1))) //初始化机器人库存列表，默认降序排序


  //加入到购物车列表
  const AddToCartList=(item)=>{
    if(item.type==1){
      setusercartlist([...UserCartList,item])
      UserInventoryList.forEach((element,index) => {
        if(element.id==item.id){
          UserInventoryList.splice(index,1)
        }
      });
    }else if(item.type==2){
      setrobotcartlist([...RobotCartList,item])
      RobotInventoryList.forEach((element,index) => {
        if(element.id==item.id){
          RobotInventoryList.splice(index,1)
        }
      });
    }
  }

  //从购物车列表移除
  const DelFromCartlist=(item)=>{
    if(item.type==1){
      setuserinventorylist([...UserInventoryList,item])
      UserCartList.forEach((element,index) => {
        if(element.id==item.id){
          UserCartList.splice(index,1)
        }
      });
    }else if(item.type==2){
      setrobotinventorylist([...RobotInventoryList,item])
      RobotCartList.forEach((element,index) => {
        if(element.id==item.id){
          RobotCartList.splice(index,1)
        }
      });
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



export default UseOperation