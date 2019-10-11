import React, { Component } from 'react';
import GunCard from '../gunCard/gunCard';
import './gunInventory.css'
class gunInventory extends Component {
    constructor(props){
        super(props)
        this.state={arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
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
                <div className="gunList">
                    <div className="gun-wrapper">
                        {/* 引入武器卡片的组件 */}
                           <GunCard numbers={this.state.arr}/>
                    </div>     
                </div>
            </div>
        );
    }
}

export default gunInventory;