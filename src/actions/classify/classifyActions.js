import {classifyType} from "./classifyType"
import {getClassifyApi} from "@api/api"
export const getClassifyAsyncAction=()=>{
    const getClassifyAction=(data)=>({
        type:classifyType,
        data
    })
    return async(dispatch)=>{
        let data=await getClassifyApi();
        // console.log(data);
         dispatch(getClassifyAction(data.objects))
    }
}