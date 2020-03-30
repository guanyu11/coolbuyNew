import React, { Component } from 'react'
import {BarContainer} from "./styled"
import {Link} from "react-router-dom"
export default class Bar extends Component {
    render() {
        return (
            <BarContainer>
                <div className="nav">
                <div>
                    <Link to="/home">
                    <span className="iconfont">&#xe60b;</span>
                    <span>首页</span>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/home">
                    <span className="iconfont">&#xe604;</span>
                    <span>客服</span>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/cart">
                    <span className="iconfont">&#xe62d;</span>
                    <span>购物车</span>
                    {
                        this.props.quantity?<span className="quantity">{this.props.quantity}</span>:""
                    }
                    
                    </Link>
                    
                </div>
            </div>
            <div className="buy">
                <div onClick={this.props.showMaskCart}>加入购物车</div>
                <div>立即购买</div>
            </div>
            </BarContainer>
        )
    }
}
