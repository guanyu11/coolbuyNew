import React, { Component } from 'react'
import { BSContainer } from "./styled"
import BScroll from "better-scroll"
import { throttle } from "@utils/utils"
// import {withRouter} from "react-router-dom"
// @withRouter
class BScrollCon extends Component {
    render() {
        return (
            <BSContainer ref="wrapper">
                {this.props.children}
            </BSContainer>
        )
    }
    componentDidMount() {
        this.scroll = new BScroll(this.refs.wrapper, {
            scrollX: true,
            probeType: 1,
            click: true,
            tap: true,
            pullUpLoad: true
        })
    }
    //文章页  滚动时监听 
    ArtiHandleScroll(callback) {
        this.scroll.on("scroll", ({ x, y }) => {
            // console.log(x, y, "4444")
            throttle(callback(x, y))
        })
    }
    handleScroll(callback) {

        this.scroll.on("scroll", ({ x, y }) => {
            if (y < -183) {
                callback(true);
            } else {
                //透明度0
                callback(false);
            }
        })
    }
    // 点击nav  确保选中的 元素 在视野范围内  想
    handleGetCurrentPage(navid) {
        console.log(navid, "navid")
        //如果是wow navid是undefined  需要判断
        if (!navid) {
            this.scroll.scrollTo({ x: 0 })
        }
        this.scroll.scrollToElement(navid, .3)
    }

    handlepullingUp(callback) {
        this.scroll.on("pullingUp", () => {
            callback()
            //当数据加载成功后执行一下这个方法
            this.scroll.finishPullUp();
        })
    }


}
export default BScrollCon