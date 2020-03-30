import React, { Component } from 'react'
import {CartSetContainer} from "./styled"
import {mapStateToProps,mapDispatchToProps} from "../connect"
import {connect} from "react-redux"
import CartItem from "../cartItem"
@connect(mapStateToProps,mapDispatchToProps)
class CartSet extends Component {
    render() {
        let { cartData } = this.props
        return (
            <CartSetContainer>
                 {
                    cartData.group?cartData.group.map((item)=>(
                        <CartItem set={this.props.set} item={item} handleAll={this.props.handleAll} key={item.created_at}></CartItem>
                    )):''
                }
            </CartSetContainer>
        )
    }
}
export default CartSet