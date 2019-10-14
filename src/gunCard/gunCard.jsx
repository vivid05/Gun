import React, { Component } from 'react';
import './gunCard.css'
import Popover from 'antd/es/popover';
import 'antd/es/popover/style/css';
import 'antd/es/button/style/css';

class gunCard extends Component {
    constructor(props){
        super(props)
        this.toParent=this.toParent.bind(this)
    }
    toParent(data){
        this.props.parent(this,data)
    } 
    render() {
        const text = <span>Title</span>;
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );
        const numbers = this.props.numbers
        const listItems = numbers.map((item) =>
            <Popover key={item.id} placement="topLeft" title={text} content={content} arrowPointAtCenter>
                <div onClick={this.toParent.bind(this,item)} className='wrapper'>
                    <div  className="gun-items">
                        <img src={item.imgurl} alt=""/>
                        <p>{item.dec}</p>
                        <p>{item.name}</p>
                        <p>￥{item.price}</p>
                    </div> 
                </div>   
            </Popover> 
        ) 
        return (
            [listItems]         
        );
    }
}

export default gunCard;