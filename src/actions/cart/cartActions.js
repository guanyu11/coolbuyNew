import {getCartApi,selectApi,countApi,delApi,collectApi} from "@api/api"
import {cartType,selectType,countType,goodsSelectType,changeSelectAllType,delType,collectType} from "./cartType"
export const getCartAsyncActions=()=>{
    const getCartActions=(data)=>({
        type:cartType,
        data
    })
    return async(dispatch)=>{
        let data=await getCartApi();
        console.log(data)
        dispatch(getCartActions(data))
        return "success"
        
    }
}
export const setSelectAsyncActions=(sku_id,is_checked)=>{
    const setSelectActions=(data)=>({
        type:selectType,
        data
})
    return async (dispatch)=>{
        let data=await selectApi(sku_id,is_checked)
        // console.log(data)
        dispatch(setSelectActions(data))
        return "success"
    }
}

export const countAsyncActions=(params)=>{
    const countActions=(data)=>({
        type:countType,
        data
})
    return async (dispatch)=>{
        let data=await countApi(params)
        console.log(data)
        dispatch(countActions(data))
        return "success"
    }
}
// 添加将要收藏或取消收藏的商品
export const goodsSelectActions=(id)=>({
    type:goodsSelectType,
    id
})

// 设置修改全部
export const changeSelectAllActions=(arr)=>({
    type:changeSelectAllType,
    arr
})
// del
export const delAsyncActions=(params)=>{
    const delActions=(data)=>({
        type:delType,
        data
    })
    return async (dispatch)=>{
        let data=await delApi(params)
        console.log(data)
        dispatch(delActions(data))
    }
}
// collect
export const collectAsyncAction=(params)=>{
    const collectActions=(data)=>({
        type:collectType,
        data
    })
    return async (dispatch)=>{
        // console.log(params)
        let data=await collectApi(params)
        // console.log(data)
        dispatch(collectActions(data))
    }
}