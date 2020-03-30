import React, { Component } from 'react'
import { BarContainer } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "../connect"
import { connect } from "react-redux"
@connect(mapStateToProps, mapDispatchToProps)
class CartBar extends Component {

    render() {
        let { cartData, set ,willCollect} = this.props
        let selectAll
        if(cartData.group&&set){
            selectAll= willCollect.size===cartData.group.length? true:false
            //  console.log(99,willCollect,selectAll)
        }
        return (
            <BarContainer>
                <div className="footer--select-all">
                    {
                        set ? <i onClick={this.changeSelectAll.bind(this)} className={
                            selectAll ? "active iconfont" : "iconfont"
                        }>&#xe626;</i> : 
                        <i
                            onClick={this.setSelectAll.bind(this)}
                            className={
                                this.props.selectAll ? "active iconfont" : "iconfont"
                            }
                        >&#xe626;</i>
                    }

                    <span>全选</span>
                </div>
                {
                    set ? <div className="footer--del">
                        <div className="btn" onClick={this.props.handleCollect.bind(this)}>移至收藏</div>
                        <div className="btn"onClick={this.props.handleDel.bind(this)}>删除</div>
                    </div> : <div className="footer--pay">
                            <div className="footer--sum">
                                <span>合计：</span>
                                <span>￥</span>
                                <span>{cartData.amount}</span>
                            </div>
                            <div className="footer--pay-btn">
                                去结算
                            </div>
                        </div>
                }


            </BarContainer>
        )
    }
    // 处理点击全选按钮后要发送的数据
    setSelectAll() {
        let goods = this.props.cartData.group;
        let data = goods.reduce((prev, item) => {
            let goodsItem = { sku_id: item.item.product_sku_id, is_checked: !this.props.selectAll }
            prev.objects.push(goodsItem)
            return prev
        }, { objects: [] })
        this.props.select.call(this, data)
    }
    // 设置的情况下进行全选反选
    changeSelectAll(){
        if(this.props.willCollect.size===this.props.cartData.group.length){
            this.props.changeSelectAll()
        }else{
           
            let arr=this.props.cartData.group.reduce((prev,item)=>{
                prev.push(item.item.product_sku_id);
                return prev
            },[])
            // console.log(arr)
            this.props.changeSelectAll(arr)
        }
    }
}
export default CartBar 