import React, { Component } from 'react'
import { GoodsItemContainer } from "./styled"
import {withRouter} from "react-router-dom"
@withRouter
class GoodsItem extends Component {
    render() {
        let {item}=this.props
        return (
            <GoodsItemContainer onClick={this.handleToDetails.bind(this,item.id)}>
                <div className="goods-img">
                    <img src={item.cover_image} alt="" />
                </div>
                <div className="detail-content">
                    <div className="detail-title">{item.title}</div>
                    <div className="detail-des">
                        {item.summary}
                    </div>
                    <div className="detail-price">
                        <span>￥</span>
                        <span>{item.highest_original_price}</span>
                    </div>
                </div>
            </GoodsItemContainer>
        )
    }
    // 点击跳转
    handleToDetails(id){
        console.log(id)
        this.props.history.push(`/details/${id}`)
    }
}
export default GoodsItem