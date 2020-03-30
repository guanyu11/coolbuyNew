import React, { Component } from 'react'
import {BScrollContainer} from "./styled"
import BScroll from "better-scroll"
import { throttle } from '../../utils/throttle'
class BScrollCom extends Component {
    render() {
        return (
            <BScrollContainer ref="wrapper">
                {this.props.children}
            </BScrollContainer>
        )
    }
    componentDidMount(){
        this.scroll=new BScroll(this.refs.wrapper,{
            probeType:3,
            scrollX:true,
            click:true,
            mouseWheel: true,
            bounce:false
        })
    }
    handleScroll(callback){
        console.log(123)
        this.scroll.on("scroll",({x,y})=>{
            
            let opacity
            if(y>=-10){
                opacity=0
            }else if(-10>y&&y>-60){
                opacity=0.3
            }else if(y<-60&&y>=-110){
                opacity=0.6
            }else if(-110>y){
                opacity=1
            }
            throttle(callback.bind(this,opacity,y)) 
        })
    }
    handleScrollTo(l=0,t=0){
        this.scroll.scrollTo(l,t,250)
    }
    // dom变化刷新重新计算
    handleRefresh(){
        this.scroll.refresh()
    }
}   
export default BScrollCom