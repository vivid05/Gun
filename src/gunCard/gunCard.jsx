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
    return (
        <div className="gun-items">
            <img src="./images/gun1.png" alt=""/>
            <p>久经沙场</p>
            <p>暗影双匕（★）|蓝钢</p>
            <p>￥375.27</p>
        </div>
    )
}
class gunCard extends Component {
    render() {
        return (
            <div>
                <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
                    <div className='wrapper'>
                       <Guncard/> 
                    </div>   
                </Popover>
            </div>
            
        );
    }
}

export default gunCard;