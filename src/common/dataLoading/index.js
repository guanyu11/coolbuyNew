import React from "react"
import DataLoading from "./index"
export default (WrapperComponent)=>{
    return class extends WrapperComponent{
        render(){
            if(this.state.success){
                return super.render();
            }else{
                return <DataLoading/>
            }
        }
    }
}