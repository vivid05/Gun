import React, { Component,useState,useEffect } from 'react';
import GunCard from '../gunCard/gunCard';
import './gunInventory.css'
import Operation from './Operation.js'
function GunInventory(props) {
    const [isUerInventory,setisUerInventory] = useState(true)
    const [userid,setuserid] = useState(1)
    const [rankid,setrankid] = useState(1)
    const [UserInventoryList,RobotInventoryList,ChangeListId,Search,ChangeRank]=Operation(props.UserInventoryList,props.RobotInventoryList)
    
    const changeInventoryList=(e)=>{
        let id=e.target.getAttribute("data-id")
        ChangeListId(id)
        setuserid(id)  
    }

    const OnChangeRank=(id)=>{
        setrankid(id)
        ChangeRank(id)
    }

    const search=(e)=>{
        let keyword=e.target.value
        Search(keyword)   
    }

    const price_2Search=(e)=>{
         
    }
    
    const [price_1,setprice_1] = useState()
    const [gunList,setgunlist] = useState(props.GunList)  

    //加入到交易列表同时删除当前卡片
    const ToTradeList = (result, msg) => {
        props.onChoose(this,msg)
    }

    const price_1Search=(e)=>{
        setprice_1(e.target.value)
    }

    //通过价格区间筛选
    

    return (
        <div className="layout inventory">
            <div className="inventory-tabs">
                <ul>
                    <li onClick={changeInventoryList} data-id='1' className={userid==1?'active':''}>用户库存</li>
                    <li onClick={changeInventoryList} data-id='2' className={userid==2?'active':''}>机器人库存</li>
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
                    <li data-rankid='1' onClick={()=>OnChangeRank(1)} className={rankid==1?'rankActive':''}>价格↓</li>
                    <li data-rankid='2' onClick={()=>OnChangeRank(2)} className={rankid==2?'rankActive':''}>价格↑</li>
                    <li data-rankid='3' onClick={()=>OnChangeRank(3)} className={rankid==3?'rankActive':''}>磨损值↓</li>
                    <li data-rankid='4' onClick={()=>OnChangeRank(4)} className={rankid==4?'rankActive':''}>磨损值↑</li>
                </ul>
                <div className="rank-search">
                    <input type="text" onChange={search} placeholder="搜索"/>
                </div>
                <div className="money">
                    <span>¥</span><input value={price_1||''} onChange={price_1Search} type="text"/>
                    <i>-</i>
                    <span>¥</span><input onChange={price_2Search} type="text"/>
                    <h5>刷新库存</h5>
                </div>
            </div>
            <div className="gunlist">
                <div className="gun-wrapper">
                    {/* 引入武器卡片的组件 */}
                    <GunCard onChoose={ToTradeList} gunlist={isUerInventory?UserInventoryList:RobotInventoryList} />
                </div>     
            </div>
        </div>
    )
}

export default GunInventory;