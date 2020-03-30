import {getCartAsyncActions,setSelectAsyncActions,countAsyncActions,goodsSelectActions,changeSelectAllActions,delAsyncActions,collectAsyncAction} from "@actions/cart/cartActions"
export const mapStateToProps=(state)=>({
    cartData:state.getIn(["cart","cartData"]),
    willCollect:state.getIn(["cart","willCollect"])
})

export const mapDispatchToProps=(dispatch)=>({
    async getCart(){
        let data=await dispatch(getCartAsyncActions())
        if(data==="success"){
            console.log(this)
            this.handleAll()
        }
    },
    async select(params){
        let data=await dispatch(setSelectAsyncActions(params))
        if(data==="success"){
            this.props.handleAll()
        }
    },
    // 点击加减触发的函数，发送请求告诉服务器
    async changeCount(id,count){
        // console.log(id)
       let data=await dispatch(countAsyncActions({objects:[{product_sku_id: id, quantity: count}]}))
       if(data==="success"){
        this.props.handleAll()
        }
    },
    // 选中商品后存储到公共状态中，点击收藏时获取存储的所有状态发送请求
    goodsSelect(id){
        dispatch(goodsSelectActions(id))
    },
    // 在设置状态下点击全选按钮更改数据从而更改视图
    changeSelectAll(arr){
        dispatch(changeSelectAllActions(arr))
    },
    
    // 点击按钮进行删除
    handleDel(){
        let list=this.props.willCollect;
        let data=list.reduce((prev,item)=>{
            prev.objects.push({product_sku_id:item,quantity: 0})
            return prev
        },{objects:[]})
        console.log(data)
        dispatch(delAsyncActions(data))
    },
    // 收藏
    handleCollect(){
        let list=this.props.willCollect.toArray();
        let data={product_id:list}
        dispatch(collectAsyncAction(data))
        this.props.handleDel.call(this)
    },
    
})
    