import React, { Component } from 'react';
import Guncardsmall from '../guncardsmall/guncardsmall'
import './trade.css'
class trade extends Component {
    constructor(props){
        super(props)
        this.state={
            userlist:[], //用户库存列表
            robotlist:[] //机器人库存列表
        }
    }

    //监听props数据变化，实时更新传过来的数据
    UNSAFE_componentWillReceiveProps(){
        this.setState({userlist:this.props.userlist})
        this.setState({robotlist:this.props.robotlist})
    }

    //点击根据id删除列表中的数据
    delcard = (result,msg) => {    
        if(msg.type==1){ 
          for(var i=0;i<this.state.userlist.length;i++){
              if(this.state.userlist[i].id==msg.id){
                  this.state.userlist.splice(i,1)
              }
          }
        }else if(msg.type==2){
            for(var i=0;i<this.state.robotlist.length;i++){
                if(this.state.robotlist[i].id==msg.id){
                    this.state.robotlist.splice(i,1)
                }
            }
        }
        this.setState({childrenMsg:this.state.userlist})
        this.setState({childrenMsg:this.state.robotlist})
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
                        {/* 引入武器小卡片组件并传入用户库存列表 */}
                        <Guncardsmall delcard={this.delcard} gunlist={this.state.userlist}/>
                    </div>
                    <div className="content-price">
                        <p className="fl">总价：￥ 0.00</p>
                        <p className="fr">自动补差</p>
                    </div>
                </div>
                <div className="content-item">
                    <span>机器人报价</span>
                    <p>在 '机器人库存' 中选择你要换入的饰品</p>
                    <div className="show">
                        {/* 引入武器小卡片组件并传入机器人库存列表 */}
                        <Guncardsmall delcard={this.delcard} gunlist={this.state.robotlist}/>
                    </div>
                    <div className="content-price">
                        <p className="fl">总价：￥ 0.00</p>
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
}

export default trade;