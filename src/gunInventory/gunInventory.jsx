import React, { Component } from 'react';
import GunCard from '../gunCard/gunCard';
import './gunInventory.css'
import data from '../mock'
class gunInventory extends Component {
    constructor(props){
        super(props)
        this.state={
            Alldata:data.userdata, //模拟数据
            weapondata:data.userdata,
            userid:1, //用户和机器人库存识别id
            rankid:1, //价格升降序识别id
            price_1:'', //第一个价格输入框的数据
        }
        this.handleclick=this.handleclick.bind(this)
        this.handlerank=this.handlerank.bind(this)
        this.search=this.search.bind(this)
        this.price_1Search=this.price_1Search.bind(this)
        this.price_2Search=this.price_2Search.bind(this)
        this.compare=this.compare.bind(this)
    }

    //页面加载执行价格默认降序排序
    componentDidMount(){ 
        this.setState({weapondata:this.state.weapondata.sort(this.compare('price',1))})
    }

    //切换用户库存和机器人库存
    handleclick(e){
        let id=e.currentTarget.getAttribute("data-id");   
        if(id==2){
           this.setState({weapondata:data.robotdata})
           this.setState({Alldata:data.robotdata}) 
        }else if(id==1){
            this.setState({weapondata:data.userdata})
            this.setState({Alldata:data.userdata}) 
        }
        this.setState({userid:e.target.getAttribute("data-id")})
    }

    //按照价格排序
    handlerank(e){
        let id=e.currentTarget.getAttribute("data-rankid")
        this.setState({rankid:id})
        this.setState({weapondata:this.state.weapondata.sort(this.compare('price',id))})
    }

    //按照关键词搜索
    search(e){
        //this.setState({keyworld:e.target.value})
        let keyworld=e.target.value;
        if(keyworld==''){
            this.setState({weapondata:this.state.Alldata})
        }else{
            let newarr=this.state.Alldata.filter(item=>{
                return item.name==keyworld
            })
            this.setState({weapondata:newarr})
        }
    }

    //根据价格区间筛选
    price_1Search(e){
        this.setState({price_1:e.target.value})
    }
    price_2Search(e){
        let price_1=this.state.price_1;
        let price_2=e.target.value;
        if(price_2==''){
            this.setState({weapondata:this.state.Alldata})
        }else{
            let newarr=this.state.Alldata.filter(item=>{
                return item.price>=price_1&&item.price<=price_2
            })
            this.setState({weapondata:newarr})
        }
   
    }

    //比较函数
    compare(property,rev){
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

    //获取自组件的数据，并带参执行父组件的函数
    getChildrenMsg = (result, msg) => {
        //console.log(msg)
        this.setState({
            childrenMsg: msg
        })
        this.props.getChildrenMsg(this,msg)
    }
    render() {
        return (
            <div className="layout inventory">
                <div className="inventory-tabs">
                    <ul>
                        <li onClick={this.handleclick} data-id='1' className={this.state.userid==1?'active':''}>用户库存</li>
                        <li onClick={this.handleclick} data-id='2' className={this.state.userid==2?'active':''}>机器人库存</li>
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
                        <li data-rankid='1' onClick={this.handlerank} className={this.state.rankid==1?'rankActive':''}>价格↓</li>
                        <li data-rankid='2' onClick={this.handlerank} className={this.state.rankid==2?'rankActive':''}>价格↑</li>
                        <li data-rankid='3' onClick={this.handlerank} className={this.state.rankid==3?'rankActive':''}>磨损值↓</li>
                        <li data-rankid='4' onClick={this.handlerank} className={this.state.rankid==4?'rankActive':''}>磨损值↑</li>
                    </ul>
                    <div className="rank-search">
                        <input type="text" onChange={this.search} placeholder="搜索"/>
                    </div>
                    <div className="money">
                        <span>¥</span><input value={this.state.price_1} onChange={this.price_1Search} type="text"/>
                        <i>-</i>
                        <span>¥</span><input onChange={this.price_2Search} type="text"/>
                        <h5>刷新库存</h5>
                    </div>
                </div>
                <div className="gunlist">
                    <div className="gun-wrapper">
                        {/* 引入武器卡片的组件 */}
                           <GunCard parent={this.getChildrenMsg} numbers={this.state.weapondata}/>
                    </div>     
                </div>
            </div>
        );
    }
}

export default gunInventory;