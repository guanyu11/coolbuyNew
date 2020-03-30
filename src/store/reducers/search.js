import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {searchType,keywordType}  from "@actions/search/searchType"

let defaultState =immutable.fromJS({
    searchKeyWords:[],
    defaultWord:"",
    keywordList:[],
    total:""
})

export default handleActions({
    [searchType]:(state,actions)=>{
        return state.updateIn(["searchKeyWords"],_=>actions.data)
        .updateIn(["defaultWord"],_=>actions.defaultWord)
    },
    [keywordType]:(state,actions)=>{
        return state.updateIn(["keywordList"],_=>actions.data)
        .updateIn(["total"],_=>actions.total)
    }
},defaultState)

