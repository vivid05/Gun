import React, { useState, useEffect } from 'react';

//统计交易列表总价
function UseGetTotal(){ 
    const [usertotal,setusertotal] = useState(0)
    const [robottotal,setrobottotal] = useState(0)
    const UseGetTotalFun=(userlist,robotlist)=>{
        let userarr=[0]
        let robotarr=[0]
        for(var i=0;i<userlist.length;i++){
            userarr.push(userlist[i].price)
        }
        for(var i=0;i<robotlist.length;i++){
            robotarr.push(robotlist[i].price)
        }
        setusertotal(userarr.reduce((pre,cur)=>{
            return pre+cur
        }))
        setrobottotal(robotarr.reduce((pre,cur)=>{
            return pre+cur
        }))
        
    }
    return [usertotal,robottotal,UseGetTotalFun]  
}

//从交易列表删除
function UseDelCard(){
    const UseDelCardFun=(userlist,robotlist,item)=>{
        if(item.type==1){ 
            for(var i=0;i<userlist.length;i++){
                if(userlist[i].id==item.id){
                    userlist.splice(i,1)
                }
            }
          }else if(item.type==2){
              for(var i=0;i<robotlist.length;i++){
                  if(robotlist[i].id==item.id){
                      robotlist.splice(i,1)
                  }
              }
          }
    
    }
    return UseDelCardFun
}
export default {UseGetTotal,UseDelCard}