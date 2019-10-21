//统计交易列表总价
const UseGetTotal=(userlist,robotlist)=>{ 
        let userarr=[0]
        let robotarr=[0]
        for(var i=0;i<userlist.length;i++){
            userarr.push(userlist[i].price)
        }
        for(var i=0;i<robotlist.length;i++){
            robotarr.push(robotlist[i].price)
        }
        const usertotal= userarr.reduce((pre,cur)=>{
            return pre+cur
        })
        const robottotal= robotarr.reduce((pre,cur)=>{
            return pre+cur
        })
       
    return [usertotal,robottotal]  
}


export default UseGetTotal