import {getGoodsListAsyncAction,getGoodsNavAsyncAction} from "@actions/goodsList/goodsListActions"
export const mapStateToProps=(state)=>({
    goodsListData:state.getIn(["goodsList","goodsListData"]),
    classifyData:state.getIn(["classify","classifyData"]),
    goodsNavData:state.getIn(["goodsList","goodsNavData"])
})

export const mapDispatchToProps=(dispatch)=>({
    getGoodsList(id){
        dispatch(getGoodsListAsyncAction(id))
    },
    async getGoodsNav(categoryId){
       let data=await dispatch(getGoodsNavAsyncAction(categoryId))
        if(data){
            let left=this.refs.series.getElementsByClassName("active")[0].offsetLeft-15
            if(this.refs.series.offsetWidth-left<=document.documentElement.clientWidth){
                left=this.refs.series.offsetWidth-document.documentElement.offsetWidth
            }
            this.refs.scroll.handleScrollTo(-left)
        }
    }
})
    