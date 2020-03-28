import React, { Component } from 'react'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from '../connect'
import Banner from "@components/swiper"
import Homefixed from "./fixedCon"
import CareChoose from "./careChoose"
import Activity from "./activity"
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    render() {
        let { banner,articleList,activity } = this.props;
        return (
            <div  style={{"marginTop":"0.64rem"}}>
        
                <Banner  banner={banner}>
                </Banner>
                <Homefixed></Homefixed>
                <CareChoose articleList={articleList.slice(0,4)}></CareChoose>
                <Activity activity={activity}>
                <div className="relevant-article-title">
                    <span className="title">活动推荐</span>
                    <div className="border"></div>
                </div>
                </Activity>
            </div>
        )
    }
    componentDidMount() {
        //     console.log(111)
        
    }
}
export default Home