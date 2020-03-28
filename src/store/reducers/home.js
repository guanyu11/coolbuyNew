import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {HomeBannerType,HomeActivityType,HomeCategoryType}  from "@actions/home/homeTypes"

let defaultState =immutable.fromJS({
    banner:[],
    activity:[],
    category:[]

})

export default handleActions({
    [HomeBannerType]:(state,actions)=>{
        // console.log(actions,"HomeBannerType action")
        return state.updateIn(["banner"],_=>actions.data.objects||[])
    },
    [HomeActivityType]:(state,actions)=>{
        // console.log(actions,"HomeActivityType action")
        return state.updateIn(["activity"],_=>actions.data.objects||[])
    },
    [HomeCategoryType]:(state,actions)=>{
        // console.log(actions,"HomeActivityType action")
        return state.updateIn(["category"],_=>actions.data.objects||[])
    }

    
},defaultState)