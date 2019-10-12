import React, { Component } from 'react';
import styles from './guncardsmall.module.css'
import Popover from 'antd/es/popover';
import 'antd/es/popover/style/css';
import 'antd/es/button/style/css';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
function Guncard(props){
    const numbers = props.numbers;
    const listItems = numbers.map((item) =>
        <Popover key={item.id} placement="topLeft" title={text} content={content} arrowPointAtCenter>
            <div className={styles.wrapper}>
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
class gunCard extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <Guncard numbers={this.props.numbers}/>          
        );
    }
}

export default gunCard;