import React, { Component } from 'react';
import styles from  './header.module.css'
class header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.layout}>
                    <a href="#" className={styles.fl}>
                        <img src="./images/logo.png" alt=""/>
                    </a>
                    <a href="#" className={styles.TextLink}>前往旧版</a>
                    <a href="#" className={styles.login}>
                        <img src="./images/login.svg" alt=""/>
                        <span>请通过Steam登录</span>
                    </a>
                </div>
            </div>
        );
    }
}
export default header;