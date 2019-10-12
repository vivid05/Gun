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
    const numbers = props.numbers
    const listItems = numbers.map((item) =>
        <Popover key={item.id} placement="topLeft" title={text} content={content} arrowPointAtCenter>
            <div onClick={toParent.bind(this,item)} className='wrapper'>
                <div  className="gun-items">
                    <img src={item.imgurl} alt=""/>
                    <p>{item.dec}</p>
                    <p>{item.name}</p>
                    <p>￥{item.price}</p>
                </div> 
            </div>   
        </Popover>
    );
    function toParent(data){
        props.parent(this,data)
    }
    return (
        [listItems]
    );
}
function toCart(e){
    console.log(e)
}

class gunCard extends Component {
    constructor(props){
        super(props)
    }
    toCart(data){
        console.log(data)
    }
    render() {
        return (
            <Guncard parent={this.props.parent} numbers={this.props.numbers}/>          
        );
        /* return(
            [this.state.listItems]
        ) */
    }
}

export default gunCard;