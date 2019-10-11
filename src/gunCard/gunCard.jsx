import React, { Component } from 'react';
import './gunCard.css'
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
    const listItems = numbers.map((number) =>
        <Popover key={number} placement="topLeft" title={text} content={content} arrowPointAtCenter>
            <div className='wrapper'>
                <div className="gun-items">
                    <img src="./images/gun1.png" alt=""/>
                    <p>久经沙场{number}</p>
                    <p>暗影双匕（★）|蓝钢</p>
                    <p>￥375.27</p>
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
    render() {
        return (
            <Guncard numbers={this.props.numbers}/>          
        );
    }
}

export default gunCard;