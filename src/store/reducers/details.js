import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {detailsType}  from "@actions/details/detailsType"

let defaultState =immutable.fromJS({
    bannerData:[],
    detailsData:{},
    specsObj:{},
    choiceList:[],
    priceRange:[]
    

})

export default handleActions({
    [detailsType]:(state,actions)=>{
        // console.log(actions)
        return state.updateIn(["bannerData"],_=>actions.manageData.data.images)
        .updateIn(["detailsData"],_=>actions.manageData.data)
        .updateIn(["specsObj"],_=>actions.manageData.specsObj)
        .updateIn(["choiceList"],_=>actions.manageData.choiceList)
        .updateIn(["priceRange"],_=>actions.manageData.priceRange)
    }
},defaultState)