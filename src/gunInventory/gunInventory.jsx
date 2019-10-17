import React, { Component,useState,useEffect } from 'react';
import GunCard from '../gunCard/gunCard';
import './gunInventory.css'
function GunInventory(props) {
    const [userid,setuserid] = useState(1)
    const [rankid,setrankid] = useState(1)
    const [keyword,setkeyword] = useState('')
    const [price_1,setprice_1] = useState()
    const [price_2,setprice_2] = useState()
    const [searchList,setsearchlist] = useState([])
    const [gunList,setgunlist] = useState(props.GunList)  

    //切换用户和机器人库存列表
    const handleclick=(e)=>{
        let userid=e.target.getAttribute("data-id")
        setuserid(userid)
        props.onUseridClick(this,userid)  
    }

    //切换排序方式
    const handlerank=(e)=>{
        let rankid=e.target.getAttribute("data-rankid")
        setrankid(rankid)
        setgunlist(props.GunList.sort(compare('price',rankid)))
    }

    //根据关键词搜索
    const search=(e)=>{
        let keyword=e.target.value
        setkeyword(keyword)
        let newarr=gunList.filter(item=>{
            return item.name==keyword
        })
        props.search(this,newarr)
          
    } 

    //加入到交易列表同时删除当前卡片
    const ToTradeList = (result, msg) => {
        props.onChoose(this,msg)
        for(var i=0;i<props.GunList.length;i++){
            if(props.GunList[i].id==msg.id){
                props.GunList.splice(i,1)
            }
        }
    }

    //比较函数
    const compare=(property,rev)=>{
        if(rev==2){
           return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            } 
        }else if(rev==1){
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return value2 - value1;
            } 
        }
        
    }

    const price_1Search=(e)=>{
        setprice_1(e.target.value)
    }

    const price_2Search=(e)=>{
        let newarr=gunList.filter(item=>{
            return item.price>=price_1&&item.price<=e.target.value
        })
        props.Pricesel(this,newarr)
        //setsearchlist(newarr)  
    }

    return (
        <div className="layout inventory">
            <div className="inventory-tabs">
                <ul>
                    <li onClick={handleclick} data-id='1' className={userid==1?'active':''}>用户库存</li>
                    <li onClick={handleclick} data-id='2' className={userid==2?'active':''}>机器人库存</li>
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
                    <li data-rankid='1' onClick={handlerank} className={rankid==1?'rankActive':''}>价格↓</li>
                    <li data-rankid='2' onClick={handlerank} className={rankid==2?'rankActive':''}>价格↑</li>
                    <li data-rankid='3' onClick={handlerank} className={rankid==3?'rankActive':''}>磨损值↓</li>
                    <li data-rankid='4' onClick={handlerank} className={rankid==4?'rankActive':''}>磨损值↑</li>
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
                    <GunCard onChoose={ToTradeList} gunlist={props.GunList} />
                </div>     
            </div>
        </div>
    )
}

export default GunInventory;