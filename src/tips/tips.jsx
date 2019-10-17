import React, { Component,useState } from 'react';
import styles from './tips.module.css'

function Tips(props) {
   const [flag,setFlag]= useState(true)
   if(flag){
        return (
            <div className={`${styles.layout} ${styles.tips}`}>
                <span>关于近期由于Steam社区访问不稳定造成的网站无法登录和Steam APP无法确认报价的解决方法。</span>
                <a href="#">点击查看</a>
                <i onClick={()=>setFlag(!flag)} className={styles.close}>X</i>
            </div> 
    )
   }else{
       return null
   }
   
}
/* class tips extends Component {
    constructor(props){
        super(props)
        this.state={flag:true}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({flag:!this.state.flag})
    }
    render() {
        if(this.state.flag===false){
            return null
        }else{
           return (
                <div className={`${styles.layout} ${styles.tips}`}>
                    <span>关于近期由于Steam社区访问不稳定造成的网站无法登录和Steam APP无法确认报价的解决方法。</span>
                    <a href="#">点击查看</a>
                    <i onClick={this.handleClick} className={styles.close}>X</i>
                </div> 
            ) 
        }
        
    }
} */

export default Tips;