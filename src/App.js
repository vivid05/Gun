import React, { Component } from 'react';
import Header from './header/header'
import './App.css';
import Tips from './tips/tips';
import Trade from './trade/trade';
import Guninventory from './gunInventory/gunInventory';
import Footer from './footer/footer'

/* function App() {
  return (
    <div className="App">
      <Header/>
      <Tips/>
      <Trade/>
      <Guninventory/>
      <Footer/>
    </div>
  );
} */
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      childrenMsg:[],
      list1:[],
      list2:[]
    }
}
  getChildrenMsg = (result, msg) => {
    if(msg.type==1){
      this.state.list1.push(msg)
    }else if(msg.type==2){
      this.state.list2.push(msg)
    }
    //this.state.list.push(msg)
    this.setState({childrenMsg:this.state.list1})
    this.setState({childrenMsg:this.state.list2})
    console.log(this.state.list1)
    
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Tips/>
        <Trade list1={this.state.list1} list2={this.state.list2}/>
        <Guninventory parent={this.getChildrenMsg}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;

