import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {cartType,selectType,countType,goodsSelectType,changeSelectAllType,delType,collectType}  from "@actions/cart/cartType"

let defaultState =immutable.fromJS({
    cartData:{},
    willCollect:[],
    

})

export default handleActions({
    [cartType]:(state,actions)=>{
        // console.log(actions)
        return state.updateIn(["cartData"],_=>actions.data)
    },
    [selectType]:(state,actions)=>{
        return state.updateIn(["cartData"],_=>actions.data)
    },
    [countType]:(state,actions)=>{
        return state.updateIn(["cartData"],_=>actions.data)
    },
    // 设置是否保存将要收藏的商品id
    [goodsSelectType]:(state,actions)=>{
        // console.log(actions)
        return state.updateIn(['willCollect'],willCollect=>{
            let index=willCollect.indexOf(actions.id)
            // console.log(index)
            if(index===-1){
                // console.log("添加",willCollect.push(666))
                return (willCollect.push(actions.id))
            }else{
                // console.log("删除",willCollect.splice(index,1))
                return willCollect.splice(index,1)
            }
           
        })
        
    },
    [changeSelectAllType]:(state,actions)=>{
        if(actions.arr){
            console.log(state.updateIn(["willCollect"],_=>actions.arr))
            return state.updateIn(["willCollect"],_=>immutable.fromJS(actions.arr))
        }else{
            console.log(state.updateIn(['willCollect'],willCollect=>willCollect.splice()))
            return state.updateIn(['willCollect'],willCollect=>willCollect.splice(0))
        }
    },
    // 删除
    [delType]:(state,actions)=>{
        return state.updateIn(["cartData"],_=>actions.data)
    },
    // 收藏
    [collectType]:(state,actions)=>{
        return state.updateIn(['cartData'],_=>actions.data)
    }
},defaultState)