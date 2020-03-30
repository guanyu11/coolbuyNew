import {getDetailsAsyncAction,addGoodsAsyncAction} from "@actions/details/detailsActions"
import {getCartAsyncActions} from "@actions/cart/cartActions"
export const mapStateToProps=(state)=>({
    banner:state.getIn(["details","bannerData"]),
    detailsData:state.getIn(["details","detailsData"]),
    specsObj:state.getIn(["details","specsObj"]),
    choiceList:state.getIn(["details","choiceList"]),
    priceRange:state.getIn(["details","priceRange"]),
    cartData:state.getIn(["cart","cartData"])
})

export const mapDispatchToProps=(dispatch)=>({
    async getDetails(id){
        let data=await dispatch(getDetailsAsyncAction(id))
        if(data==="success"){
            this.setState({
                success:true
            })
            this.refs.scroll.handleRefresh()
        }
    },
    // 添加商品
    async addGoods(data){
         let info=await dispatch(addGoodsAsyncAction(data))
         if(info==="success"){
            dispatch(getCartAsyncActions())
         }
    },
    // 获取购物车数据
    getCart(){
        dispatch(getCartAsyncActions())
    }
})
    