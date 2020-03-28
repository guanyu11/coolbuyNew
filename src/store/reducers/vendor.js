import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {VendorIndexType,VendorDetailType}  from "@actions/vendor/vendorTypes"

let defaultState =immutable.fromJS({
    vendorList:[],
    notice:[],
    vendorDetail:{}
})

export default handleActions({
    [VendorIndexType]:(state,actions)=>{
        // console.log(actions,"VendorIndexType action")
        return state.updateIn(["vendorList"],_=>actions.data.objects||[])
    },
    [VendorDetailType]:(state,actions)=>{
        // console.log(11111,"1111111VendorDetailType action")
        // console.log(actions,"VendorDetailType action")
        return state.updateIn(["vendorDetail"],_=>actions.data)
    },
},defaultState)