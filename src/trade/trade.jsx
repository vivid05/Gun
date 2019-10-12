import React, { Component } from 'react';
import Guncardsmall from '../guncardsmall/guncardsmall'
import './trade.css'
class trade extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                {id:1,name:'钥匙',dec:'全新',imgurl:'./images/key1.png',price:100.00},
                {id:2,name:'钥匙',dec:'久经沙场',imgurl:'./images/key1.png',price:50.00},
                {id:3,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:40.00},
                {id:4,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:5,name:'步枪',dec:'久经沙场',imgurl:'./images/key1.png',price:50.00},
            ],
            list1:[],
            list2:[]
        }
    }
    componentDidMount(){
        
        //console.log(this.props)
    }
    UNSAFE_componentWillReceiveProps(){
        
        this.setState({list1:this.props.list1})
        this.setState({list2:this.props.list2})
    }
    render() {
        return (
            <div className="layout trade">
                <div className="title">
                <div className="title-item">
                    <img src="./images/title1.svg" alt=""/>
                    <span>无需寄存，安全无忧。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title2.svg" alt=""/>
                    <span>全网最低，良心平台。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title3.svg" alt=""/>
                    <span>随时随刻，换你所需。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title4.svg" alt=""/>
                    <span>无需等待，极速交易。</span>
                </div>
            </div>
            <div className="content">
                <div className="content-item">
                    <span>用户报价</span>
                    <p>在 '用户库存' 中选择你要换出的饰品</p>
                    <div className="show">
                        <Guncardsmall numbers={this.state.list1}/>
                    </div>
                    <div className="content-price">
                        <p className="fl">总价：￥ 0.00</p>
                        <p className="fr">自动补差</p>
                    </div>
                </div>
                <div className="content-item">
                    <span>机器人报价</span>
                    <p>在 '机器人库存' 中选择你要换入的饰品</p>
                    <div className="show">
                        <Guncardsmall numbers={this.state.list2}/>
                    </div>
                    <div className="content-price">
                        <p className="fl">总价：￥ 0.00</p>
                        <p className="fr">自动补差</p>
                    </div>
                </div>
            </div>
            <div className="transaction">
                <div className="discounts">
                    <span>兑换优惠券</span>
                    <div>可用优惠券（0）</div>
                </div>
                <span className="balance">
                    <img src="./images/balance.svg" alt=""/>
                    余额:0
                </span>
                <button disabled="disabled" className="transactionBtn">创建交易</button>
            </div>  
        </div>
        );
    }
}

export default trade;