import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {goodsListType,goodsNavType}  from "@actions/goodsList/goodsListType"

let defaultState =immutable.fromJS({
    goodsListData:[],
    goodsNavData:[]
    
})

export default handleActions({
    [goodsListType]:(state,actions)=>{
        // console.log(actions)
        return state.updateIn(["goodsListData"],_=>actions.data)
    },
    [goodsNavType]:(state,actions)=>{
        return state.updateIn(["goodsNavData"],_=>actions.data)
    }
},defaultState)