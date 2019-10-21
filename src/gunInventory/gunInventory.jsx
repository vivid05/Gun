import React, { Component,useState,useEffect } from 'react';
import GunCard from '../gunCard/gunCard';
import './gunInventory.css'
import Operation from './Operation.js'
function GunInventory(props) { 
    const [price_1,setprice_1] = useState() //初始化价格输入框的值 

    const [
        CurrentInventoryList, //当前渲染列表
        ListId, //库存列表项id
        RankId, //价格排序方式id
        ChangeListId, //改变库存列表项回调
        Search, //通过关键词过滤回调
        ChangeRank, //改变价格排序回调
        PriceSel //通过价格区间过滤回调
    ]=Operation(props.UserInventoryList,props.RobotInventoryList)  

    return (
        <div className="layout inventory">
            <div className="inventory-tabs">
                <ul>
                    <li onClick={()=>ChangeListId(1)} className={ListId==1?'active':''}>用户库存</li>
                    <li onClick={()=>ChangeListId(2)} className={ListId==2?'active':''}>机器人库存</li>
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
                    <li onClick={()=>ChangeRank(1)} className={RankId==1?'rankActive':''}>价格↓</li>
                    <li onClick={()=>ChangeRank(2)} className={RankId==2?'rankActive':''}>价格↑</li>
                    <li onClick={()=>ChangeRank(3)} className={RankId==3?'rankActive':''}>磨损值↓</li>
                    <li onClick={()=>ChangeRank(4)} className={RankId==4?'rankActive':''}>磨损值↑</li>
                </ul>
                <div className="rank-search">
                    <input type="text" onChange={(e)=>Search(e.target.value)} placeholder="搜索"/>
                </div>
                <div className="money">
                    <span>¥</span><input value={price_1||''} onChange={(e)=>setprice_1(e.target.value)} type="text"/>
                    <i>-</i>
                    <span>¥</span><input onChange={(e)=>PriceSel([price_1,e.target.value])} type="text"/>
                    <h5>刷新库存</h5>
                </div>
            </div>
            <div className="gunlist">
                <div className="gun-wrapper">
                    {/* 引入武器卡片的组件 */}
                    <GunCard onChoose={(result,item)=>props.onChoose(this,item)} gunlist={CurrentInventoryList} />
                </div>     
            </div>
        </div>
    )
}

export default GunInventory;