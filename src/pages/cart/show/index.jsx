import React, { Component } from 'react'
import  {CartShowContainer} from "./styled"
import {mapStateToProps,mapDispatchToProps} from "../connect"
import {connect} from "react-redux"
import CartItem from "../cartItem"

@connect(mapStateToProps,mapDispatchToProps)
class CartShow extends Component {
    render() {
        let { cartData } = this.props
        return (
            <CartShowContainer>
                {
                    cartData.group?cartData.group.map((item,index)=>(
                        <CartItem is_checked={item.item.is_checked} item={item} handleAll={this.props.handleAll} key={item.created_at}
                        ></CartItem>
                    )):''
                }
            </CartShowContainer>
        )
    }
}
export default CartShow