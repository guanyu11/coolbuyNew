import {getSearchAsyncActions,getKeyWordAsyncActions} from "@actions/search/searchActions"

export const mapStateToPorps=(state)=>({
    searchKeyWords:state.getIn(["search","searchKeyWords"]),
    defaultWord:state.getIn(["search","defaultWord"]),
    keywordList:state.getIn(["search","keywordList"]),
    total:state.getIn(["search","total"])
})

export const mapDispatchToprops=(dispatch)=>({
    getSearchData(){
        dispatch(getSearchAsyncActions())
    },
    async getKeyWordData(keyword){
        let data=await dispatch(getKeyWordAsyncActions(keyword))
        if(data==="success"){
            this.setState({
                success:true
            })
        }
    }
})