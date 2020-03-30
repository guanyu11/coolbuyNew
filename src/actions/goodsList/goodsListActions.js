import {goodsListType,goodsNavType} from "./goodsListType"
import {getGoodsListApi,getGoodsNavApi} from "@api/api"
export const getGoodsListAsyncAction=(id)=>{
    const getGoodsListAction=(data)=>({
        type:goodsListType,
        data
    })
    return async (dispatch)=>{
        let data=await getGoodsListApi(id)
        // console.log(data)
        dispatch(getGoodsListAction(data[id]))
    }
}

export const getGoodsNavAsyncAction=(categoryId)=>{
    const getGoodsNavAction=(data)=>({
        type:goodsNavType,
        data
    })
    return async (dispatch)=>{
        let data=await getGoodsNavApi(categoryId)
        dispatch(getGoodsNavAction(data.shelves))
        return "success"
    }
}