import React, { Component } from 'react'
import { CartContainer } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"
// import Count from "@components/count"
import CartBar from "./cartBar"
import CartShow from "./show"
import CartSet from "./set"
@connect(mapStateToProps, mapDispatchToProps)
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            selectAll: false,
            set: false
        }
    }
    render() {
        let { set } = this.state
        let { cartData } = this.props
        return (
            <CartContainer>
                {/* header */}
                <div className="cart--header">
                    {
                        set ? <i onClick={this.handleChange.bind(this)}>完成</i> : <i className="iconfont"
                            onClick={this.handleChange.bind(this)}
                        >&#xe605;</i>
                    }
                    {
                        set ? "" : <div ref="bar">
                            优惠券
                                </div>
                    }

                </div>
                {/* list */}
                {
                    this.state.set ? <CartSet set={this.state.set} handleAll={this.handleAll.bind(this)}></CartSet> : <CartShow handleAll={this.handleAll.bind(this)}></CartShow>
                }

                {/* footer */}
                {
                    cartData.group ? cartData.group.length ? <CartBar set={this.state.set} selectAll={this.state.selectAll} handleAll={this.handleAll.bind(this)}></CartBar> : "" : ""
                }


            </CartContainer>
        )

    }
    componentDidMount() {
        this.props.getCart.call(this)

    }
    // 数据回来后判断是否全选
    handleAll() {
        let flag = this.props.cartData.group.every((item) => {
            return item.item.is_checked
        })
        // console.log(flag)
        this.setState({
            selectAll: flag
        })
    }
    handleChange() {
        this.setState((state) => {
            return { set: !state.set }
        })
    }
}
export default Cart