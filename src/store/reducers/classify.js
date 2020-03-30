import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {classifyType}  from "@actions/classify/classifyType"

let defaultState =immutable.fromJS({
    classifyData:[],
    

})

export default handleActions({
    [classifyType]:(state,actions)=>{
        // console.log(actions)
        return state.updateIn(["classifyData"],_=>actions.data)
    }
},defaultState)