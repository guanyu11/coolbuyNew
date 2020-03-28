import immutable from "immutable"
import {handleActions}from "redux-actions"
import {CareChooseIndexType}from "@actions/find/findTypes"

let defaultData=immutable.fromJS({
    articleList:[]
})

export default handleActions({
[CareChooseIndexType]:(state,actions)=>{
    console.log(actions,"CareChooseIndexType")
    if(actions.data.length==20){
        return state.updateIn(["articleList"],list=>actions.data)
    }else{
        return state.updateIn(["articleList"],list=>list.concat(actions.data))

    }
}
},defaultData)