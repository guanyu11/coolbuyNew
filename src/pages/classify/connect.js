import {getClassifyAsyncAction} from "@actions/classify/classifyActions"
export const mapStateToProps=(state)=>({
    classifyData:state.getIn(["classify","classifyData"])
})

export const mapDispatchToProps=(dispatch)=>({
    getClassify(){
        dispatch(getClassifyAsyncAction())
    }
})
    
