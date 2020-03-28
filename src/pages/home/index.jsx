import React, { Component } from 'react'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect'
import HomeIndex from "./homeIndex"
import DownNav from "./downNav"
import Medium from "./medium"
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    render() {
        // console.log("this,home render")
        // console.log(this.props.match.params.id,"this.props.match.params.id,home")
        let { activity,category } = this.props;
        // console.log(activity,"activity home")
            if( !this.props.match.params.id){
                return (
                    <div>
                  <DownNav category={category}></DownNav>
                 <HomeIndex></HomeIndex></div>
                )
            }else{
                return (
                  <div>
                  <DownNav  category={category}></DownNav>
                  <Medium></Medium>
                 </div>
                )
            }
    }
    componentDidMount() {
        this.props.handleGetHomeBanner()
        if(!this.props.articleList.length){
            this.props.handleCareChooseIndex()

        }
    }
}
export default Home