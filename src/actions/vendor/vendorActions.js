import {    vendorIndexApi,vendorDetailApi} from "@api/api"
import {    VendorIndexType,VendorDetailType} from "./vendorTypes.js"

export const VendorIndexAsyncAction = (query)=> {
    const VendorIndexAction = (data) => ({
        type: VendorIndexType,
        data
    })
    const VendorDetailAction = (data) => ({
        type: VendorDetailType,
        data
    })
    if(query.id){
        // console.log(query.id)
        return async (dispatch)=>{
            let data = await vendorDetailApi(query.id);
            // console.log(data,"HomeBannerAsyncAction")
            dispatch(VendorDetailAction(data))
        } 
    }else{
        console.log("无id")
     return async (dispatch)=>{
      
        let data = await vendorIndexApi(query);
        // console.log(data,"HomeBannerAsyncAction")
        dispatch(VendorIndexAction(data))
    }   
    }
    

}