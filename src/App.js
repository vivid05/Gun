import React, { Component } from 'react';
import Header from './header/header'
import './App.css';
import Tips from './tips/tips';
import Trade from './trade/trade';
import Guninventory from './gunInventory/gunInventory';
import Footer from './footer/footer'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      childrenMsg:[],
      userlist:[], //用户报价列表
      robotlist:[] //机器人报价列表
    }
}
 //此方法由子组件调用
  getChildrenMsg = (result, msg) => {
    if(msg.type==1){
      this.state.userlist.push(msg)
    }else if(msg.type==2){
      this.state.robotlist.push(msg)
    }
    this.setState({childrenMsg:this.state.userlist})
    this.setState({childrenMsg:this.state.robotlist}) 
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Tips/>
        <Trade userlist={this.state.userlist} robotlist={this.state.robotlist}/>
        <Guninventory getChildrenMsg={this.getChildrenMsg}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;

