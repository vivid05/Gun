import React, { Component } from 'react';
import Header from './header/header'
import './App.css';
import Tips from './tips/tips';
import Trade from './trade/trade';
import Guninventory from './gunInventory/gunInventory';
import Footer from './footer/footer'
import data from './mock'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      userGunList:data.userdata, //用户库存列表
      robotGunList:data.robotdata, //机器人库存列表
      childrenMsg:[],
      userlist:[], //用户报价列表
      robotlist:[],//机器人报价列表
      arr:[]
    }
}

 //此方法由子组件调用
  ToTradeList = (result, msg) => {
    if(msg.type==1){
      this.state.userlist.push(msg)
    }else if(msg.type==2){
      this.state.robotlist.push(msg)
    }
    this.setState({childrenMsg:this.state.userlist})
    this.setState({childrenMsg:this.state.robotlist}) 
  }
  
//排序函数
  compare(property,rev){
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

  //此方法由子组件调用
  ToGunlist=((result,msg)=>{
    if(msg.type==1){
      this.state.userGunList.push(msg)
    }else if(msg.type==2){
      this.state.robotGunList.push(msg)
    }
    this.setState({userGunList:this.state.userGunList.sort(this.compare('price',1))})
    this.setState({robotGunList:this.state.robotGunList.sort(this.compare('price',1))}) 
  })

  render(){
    return (
      <div className="App">
        <Header/>
        <Tips/>
        <Trade userlist={this.state.userlist} robotlist={this.state.robotlist} onChoose={this.ToGunlist}/>
        <Guninventory onChoose={this.ToTradeList} userGunList={this.state.userGunList} robotGunList={this.state.robotGunList}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;

