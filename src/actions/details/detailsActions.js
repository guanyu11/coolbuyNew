import {detailsType,addGoodsType}from "./detailsType"
import {getDetailsApi,addGoodsApi,combainGoodsApi} from "@api/api"
export const getDetailsAsyncAction=(id)=>{
    const getDetailsAction=(manageData)=>({
        type:detailsType,
        manageData
    })
    return async (dispatch)=>{
        let data=await getDetailsApi(id);
        console.log(data,11)
        // 处理规格数据
        let specs=Object.keys(data.in_use_specs) 
        let specsObj={}
        
        for(let i=0;i<specs.length;i++){
            let tag=Object.keys(data.in_use_specs[specs[i]]).slice(0,-1)
            let arr=[]
            for(let j=0;j<tag.length;j++){
                arr.push(data.in_use_specs[specs[i]][tag[j]])
            }
            specsObj[data.in_use_specs[specs[i]].spec_key_name]=arr
        }
        // 处理对比数据
        let choiceList=[]
        let priceRange=[]
        let price=[]
        for(let i=0;i<data.sku_list.length;i++){
            let goodsDesc={}
            price.push(data.sku_list[i].discount_price)
            goodsDesc.spec_str=data.sku_list[i].spec_str;
            goodsDesc.sku_image=data.sku_list[i].sku_image;
            goodsDesc.discount_price=data.sku_list[i].discount_price;
            goodsDesc.inventory=data.sku_list[i].inventory;
            goodsDesc.id=data.sku_list[i].id;
            choiceList.push(goodsDesc);
        }
        priceRange.push(Math.min(...price))
        priceRange.push(Math.max(...price))
        
        let manageData={data,specsObj,choiceList,priceRange}
        dispatch(getDetailsAction(manageData));
        return "success"
    }
}

export const addGoodsAsyncAction=(params)=>{
    
    return async (dispatch)=>{
        if(params.type==='first'){
            await addGoodsApi(params.data)
            return "success"
        }else{
            await combainGoodsApi(params.data)
            return "success"
        }
       
        
    }
}