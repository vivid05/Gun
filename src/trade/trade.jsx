import React, { Component,useEffect } from 'react';
import Guncardsmall from '../guncardsmall/guncardsmall'
import UseTradeOperation from '../Hooks/useTradeOperation.js'
import './trade.css'

function Trade(props) {

    const [user_total,robot_total,UseGetTotalFun] = UseTradeOperation.UseGetTotal()
    const UseDelCardFun = UseTradeOperation.UseDelCard()
    useEffect(()=>{
        UseGetTotalFun(props.userlist,props.robotlist)
    })
    
    const delcard = (result,msg) => {
        props.onChoose(this,msg)   
        UseDelCardFun(props.userlist,props.robotlist,msg)
      }
    return (
        <div className="layout trade">
            <div className="title">
                <div className="title-item">
                    <img src="./images/title1.svg" alt=""/>
                    <span>无需寄存，安全无忧。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title2.svg" alt=""/>
                    <span>全网最低，良心平台。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title3.svg" alt=""/>
                    <span>随时随刻，换你所需。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title4.svg" alt=""/>
                    <span>无需等待，极速交易。</span>
                </div>
            </div>
            <div className="content">
                <div className="content-item">
                    <span>用户报价</span>
                    <p>在 '用户库存' 中选择你要换出的饰品</p>
                    <div className="show">
                        {/* 引入武器小卡片组件并传入用户库存列表 */}
                        <Guncardsmall delcard={delcard} gunlist={props.userlist}/>
                    </div>
                    <div className="content-price">
                        <p className="fl">总价：￥{user_total}</p>
                        <p className="fr">自动补差</p>
                    </div>
                </div>
                <div className="content-item">
                    <span>机器人报价</span>
                    <p>在 '机器人库存' 中选择你要换入的饰品</p>
                    <div className="show">
                        {/* 引入武器小卡片组件并传入机器人库存列表 */}
                        <Guncardsmall delcard={delcard} gunlist={props.robotlist}/>
                    </div>
                    <div className="content-price">
                        <p className="fl">总价：￥{robot_total}</p>
                        <p className="fr">自动补差</p>
                    </div>
                </div>
            </div>
            <div className="transaction">
                <div className="discounts">
                    <span>兑换优惠券</span>
                    <div>可用优惠券（0）</div>
                </div>
                <span className="balance">
                    <img src="./images/balance.svg" alt=""/>
                    余额:0
                </span>
                <button disabled="disabled" className="transactionBtn">创建交易</button>
            </div>  
        </div>
    );
}
/* class trade extends Component {
    constructor(props){
        super(props)
        this.state={
            user_total:0,
            robot_total:0
        }
    }
     
    componentDidMount(){
        //console.log(this.props)
    }
    UNSAFE_componentWillReceiveProps(){
        this.TotalPrice()
    }
    //计算总价
    TotalPrice(){
        let userarr=[0]
        let robotarr=[0]
        for(var i=0;i<this.props.userlist.length;i++){
            userarr.push(this.props.userlist[i].price)
        }
        for(var i=0;i<this.props.robotlist.length;i++){
            robotarr.push(this.props.robotlist[i].price)
        }
        let usertotal=userarr.reduce((pre,cur)=>{
            return pre+cur
        })
        let robottotal=robotarr.reduce((pre,cur)=>{
            return pre+cur
        })
        this.setState({user_total:usertotal})
        this.setState({robot_total:robottotal})
    }

    //点击根据id删除列表中的数据
    delcard = (result,msg) => {
        this.props.onChoose(this,msg)   
        if(msg.type==1){ 
          for(var i=0;i<this.props.userlist.length;i++){
              if(this.props.userlist[i].id==msg.id){
                  this.props.userlist.splice(i,1)
                  this.state.user_total-=msg.price
              }
          }
        }else if(msg.type==2){
            for(var i=0;i<this.state.robotlist.length;i++){
                if(this.state.robotlist[i].id==msg.id){
                    this.state.robotlist.splice(i,1)
                    this.state.robot_total-=msg.price
                }
            }
        }
      }

    render() {
        return (
            <div className="layout trade">
                <div className="title">
                <div className="title-item">
                    <img src="./images/title1.svg" alt=""/>
                    <span>无需寄存，安全无忧。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title2.svg" alt=""/>
                    <span>全网最低，良心平台。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title3.svg" alt=""/>
                    <span>随时随刻，换你所需。</span>
                </div>
                <div className="title-item">
                    <img src="./images/title4.svg" alt=""/>
                    <span>无需等待，极速交易。</span>
                </div>
            </div>
            <div className="content">
                <div className="content-item">
                    <span>用户报价</span>
                    <p>在 '用户库存' 中选择你要换出的饰品</p>
                    <div className="show">
                        //引入武器小卡片组件并传入用户库存列表 
                        <Guncardsmall delcard={this.delcard} gunlist={this.props.userlist}/>
                    </div>
                    <div className="content-price">
                        <p className="fl">总价：￥{this.state.user_total}</p>
                        <p className="fr">自动补差</p>
                    </div>
                </div>
                <div className="content-item">
                    <span>机器人报价</span>
                    <p>在 '机器人库存' 中选择你要换入的饰品</p>
                    <div className="show">
                        //引入武器小卡片组件并传入机器人库存列表
                        <Guncardsmall delcard={this.delcard} gunlist={this.props.robotlist}/>
                    </div>
                    <div className="content-price">
                        <p className="fl">总价：￥{this.state.robot_total}</p>
                        <p className="fr">自动补差</p>
                    </div>
                </div>
            </div>
            <div className="transaction">
                <div className="discounts">
                    <span>兑换优惠券</span>
                    <div>可用优惠券（0）</div>
                </div>
                <span className="balance">
                    <img src="./images/balance.svg" alt=""/>
                    余额:0
                </span>
                <button disabled="disabled" className="transactionBtn">创建交易</button>
            </div>  
        </div>
        );
    }
} */

export default Trade;