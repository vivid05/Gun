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
    const listItems = numbers.map((item) =>
        <Popover key={item.id} placement="topLeft" title={text} content={content} arrowPointAtCenter>
            <div className='wrapper'>
                <div className="gun-items">
                    <img src={item.imgurl} alt=""/>
                    <p>{item.dec}</p>
                    <p>{item.name}</p>
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
    render() {
        return (
            <Guncard numbers={this.props.numbers}/>          
        );
    }
}

export default gunCard;