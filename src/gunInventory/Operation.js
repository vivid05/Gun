import React, { useState, useEffect } from 'react';

const UseOperation=(UserInventoryList,RobotInventoryList)=>{
    let FilterInventoryList=UserInventoryList //默认为用户库存列表
    const [keyword,setKeyword]=useState("") //初始化搜索关键词
    const [ListId,setListId]=useState(1) //初始化库存列表项id
    const [RankId,setRankId]=useState(1) //初始化价格排序id
    const [Price,setPrice]=useState([]) //初始化价格区间
    

    //设置价格排序id
    const ChangeRank=(id)=>{
        setRankId(id)
    }

    //设置库存列表项id
    const ChangeListId=(ListId)=>{
        setListId(ListId)
    }

    //设置搜索关键词
    const Search=(keyword)=>{
        setKeyword(keyword)
    }

    //设置价格区间
    const PriceSel=(Price)=>{
        setPrice(Price)
    }


    //根据列表项id返回对应列表
    if(ListId==1){
        FilterInventoryList=UserInventoryList
    }else if(ListId==2){
        FilterInventoryList=RobotInventoryList
    }

    //根据价格排序id排序
    FilterInventoryList.sort(compare('price',RankId))

    //根据关键词过滤数据
    if(keyword){
        FilterInventoryList=FilterInventoryList.filter(item=>{
            return item.name==keyword
        })
    }
    
    //根据价格区间过滤数据
    if(Price[1]){
        FilterInventoryList=FilterInventoryList.filter(item=>item.price>=Price[0]&&item.price<=Price[1])
    }
    

    //比较函数
    function compare(property,rev){
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

    
    return [FilterInventoryList,ListId,RankId,ChangeListId,Search,ChangeRank,PriceSel]
}


export default UseOperation