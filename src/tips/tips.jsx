import React, { Component } from 'react';
import './tips.css'

function Tips(props){
    if(props.flag===false){
        return null
    }
    return (
        <div className="layout tips">
            <span>关于近期由于Steam社区访问不稳定造成的网站无法登录和Steam APP无法确认报价的解决方法。</span>
            <a href="#">点击查看</a>
            <i onClick={props.handleClick} className="fr close">X</i>
        </div> 
    )
}
class tips extends Component {
    constructor(props){
        super(props)
        this.state={flag:true}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({flag:!this.state.flag})
    }
    render() {
        return (
            <Tips flag={this.state.flag} handleClick={this.handleClick}  />
        );
    }
}

export default tips;