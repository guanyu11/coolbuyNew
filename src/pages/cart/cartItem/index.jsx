import React, { Component } from 'react'
import { CartItemContainer } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "../connect"
import { connect } from "react-redux"
import Count from "@components/count"
@connect(mapStateToProps, mapDispatchToProps)
class CartItem extends Component {
    constructor() {
        super();
        this.state = {
            checked: 0,

        }
    }
    render() {
        let { item, willCollect } = this.props
        // 点击触发两次，四次？？？？？？？？？？？？？？？？
        console.log(this.props)
        return (
            <CartItemContainer>
                {
                    this.props.set ? <i
                        onClick={
                            this.props.goodsSelect.bind(this, item.item.product_sku_id)}
                        className={
                            willCollect.includes(item.item.product_sku_id) ? "active iconfont" : "iconfont"
                        }

                    >&#xe626;</i> : <i
                        onClick={

                            this.props.select.bind(this, { objects: [{ sku_id: item.item.product_sku_id, is_checked: !item.item.is_checked }] })}
                        className={
                            this.props.is_checked ? "active iconfont" : "iconfont"
                        }

                    >&#xe626;</i>
                }
                
                <div className="cart--item-img" >
                    <img src={item.item.cover_image} alt="" />
                </div>
                <div className="cart--item-desc">
                    <p>{item.item.title}</p>
                    <div className="cart--select">
                        <p>{item.item.spec_str}</p>
                        <i className="iconfont">&#xe61c;</i>
                    </div>

                    <div className="cart--bottom">
                        <div className="cart--price">
                            <span>￥</span>
                            <span>{item.item.price}</span>
                        </div>
                        <Count count={item.item.quantity} changeCount={this.props.changeCount.bind(this, item.item.product_sku_id)}></Count>
                    </div>
                </div>

            </CartItemContainer>
        )
    }
    // selectToggle(id) {
    //     // console.log(123)
    //     this.setState((state) => {
    //         return {
    //             checked: !state.checked
    //         }
    //     }, () => {
    //         this.props.goodsSelect.call(this, id, this.state.checked)
    //     })

    // }


}

export default CartItem
CartItem.defaultProps = {
    item: {}
}

