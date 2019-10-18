import React, { useState, useEffect } from 'react';

const UseOperation=(UserInventoryList,RobotInventoryList)=>{
    // const userInventoryList = UserInventoryList;
    let FilteredUserInventoryList=UserInventoryList
    // const [userInventoryList,setuserInventoryList]=useState(UserInventoryList)
    
    const [keyword,setKeyword]=useState("")
    const [ListId,setListId]=useState(1)
    const [RankId,setRankId]=useState(1)
    
    

    const ChangeRank=(id)=>{
        setRankId(id)
    }

    const ChangeListId=(ListId)=>{
        setListId(ListId)
    }

    const Search=(keyword)=>{
        setKeyword(keyword)
    }

    const PriceSel=()=>{

    }

    if(ListId==1){
        FilteredUserInventoryList=UserInventoryList
    }else if(ListId==2){
        FilteredUserInventoryList=RobotInventoryList
    }

    FilteredUserInventoryList.sort(compare('price',RankId))

    if(keyword){
        FilteredUserInventoryList=FilteredUserInventoryList.filter(item=>{
            return item.name==keyword
        })
    }
    

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

    
    
    return [FilteredUserInventoryList, RobotInventoryList,ChangeListId,Search,ChangeRank]
}


export default UseOperation