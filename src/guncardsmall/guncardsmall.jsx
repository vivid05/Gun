import React, { Component } from 'react';
import styles from './guncardsmall.module.css'
import Popover from 'antd/es/popover';
import 'antd/es/popover/style/css';
import 'antd/es/button/style/css';

class gunCard extends Component {
    constructor(props){
        super(props)
        this.delcard=this.delcard.bind(this)
    }

    //点击删除对应列表项
    delcard(data){
        this.props.delcard(this,data) //触发父组件的delcard方法
        
    }
 
    render() {
        const text = <span>Title</span>;
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );
        const gunlist = this.props.gunlist;
        const listItems = gunlist.map((item) =>
            <Popover key={item.id} placement="topLeft" title={text} content={content} arrowPointAtCenter>
                <div onClick={this.delcard.bind(this,item)} className={styles.wrapper}>
                    <div className={styles.gunitems}>
                        <img src={item.imgurl} alt=""/>
                        <p>￥{item.price}</p>
                    </div> 
                </div>   
            </Popover>
        );
        return (
            [listItems]          
        );
    }
}

export default gunCard;