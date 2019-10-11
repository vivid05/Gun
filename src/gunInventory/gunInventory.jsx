import React, { Component } from 'react';
import GunCard from '../gunCard/gunCard';
import './gunInventory.css'
import data from '../mock'
class gunInventory extends Component {
    constructor(props){
        super(props)
        this.state={
            data:data.data
            /* data:[
                {id:1,name:'钥匙',dec:'全新',imgurl:'./images/key1.png',price:100.00},
                {id:2,name:'钥匙',dec:'久经沙场',imgurl:'./images/key2.png',price:100.00},
                {id:3,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:4,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:5,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:6,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:7,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:8,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:9,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:10,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:11,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:12,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:13,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:14,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:15,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:16,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:17,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:18,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:19,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:20,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:21,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:22,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:23,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:24,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:25,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:26,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:27,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
                {id:28,name:'步枪',dec:'久经沙场',imgurl:'./images/gun1.png',price:100.00},
            ] */
        }
    }
    render() {
        return (
            <div className="layout inventory">
                <div className="inventory-tabs">
                    <ul>
                        <li>用户库存</li>
                        <li className="active">机器人库存</li>
                        <li>使用Tab键快速切换</li>
                    </ul>
                </div>
                <div className="filter">
                    <ul>
                        <li>
                            <span>类型筛选:</span>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                所有类型 <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                <li><a href="#">所有类型</a></li>
                                <li><a href="#">武器</a></li>
                                <li><a href="#">武器</a></li>
                                <li><a href="#">武器</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span>库存显示:</span>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    所有机器人 <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">所有机器人</a></li>
                                    <li><a href="#">机器人</a></li>
                                    <li><a href="#">机器人</a></li>
                                    <li><a href="#">机器人</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>+更多筛选条件</li>
                    </ul>
                </div>
                <div className="rank">
                    <ul>
                        <li className="rankActive">价格↓</li>
                        <li>价格↑</li>
                        <li>磨损值↓</li>
                        <li>磨损值↑</li>
                    </ul>
                    <div className="rank-search">
                        <input type="text" placeholder="搜索"/>
                    </div>
                    <div className="money">
                        <span>¥</span><input type="text"/>
                        <i>-</i>
                        <span>¥</span><input type="text"/>
                        <h5>刷新库存</h5>
                    </div>
                </div>
                <div className="gunlist">
                    <div className="gun-wrapper">
                        {/* 引入武器卡片的组件 */}
                           <GunCard numbers={this.state.data}/>
                    </div>     
                </div>
            </div>
        );
    }
}

export default gunInventory;