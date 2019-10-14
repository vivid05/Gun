import React, { Component } from 'react';
import  './header.moudule.css'
class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="layout">
                    <a href="#" className="fl">
                        <img src="./images/logo.png" alt=""/>
                    </a>
                    <a href="#" className="fl TextLink">前往旧版</a>
                    <a href="#" className="fr login">
                        <img src="./images/login.svg" alt=""/>
                        <span>请通过Steam登录</span>
                    </a>
                </div>
            </div>
        );
    }
}
export default header;