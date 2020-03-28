import {HomeBannerAsyncAction} from "@actions/home/homeActions"
import {AsyncCareChooseIndexAction} from "@actions/find/findActions"
export const mapStateToProps=(state)=>({
    banner:state.getIn(["home","banner"]),
    notice:state.getIn(["home","notice"]),
    activity:state.getIn(["home","activity"]),
    category:state.getIn(["home","category"]),
    articleList:state.getIn(["find","articleList"]),

})

var query= {
    offset: 0,
    page_type: "article",
    limit: 20,
    order_by: "-published_at"
}
export const mapDispatchToProps=(dispatch)=>({
    handleGetHomeBanner(){
        dispatch(HomeBannerAsyncAction())
    },
    //如果文章store列表没数据  就自己请求
    
    handleCareChooseIndex(){
        dispatch(AsyncCareChooseIndexAction(query))
       }
})