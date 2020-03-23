import React, { Component } from 'react'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect'
import Banner from "@components/swiper"
import Homefinxed from "./fixedCon"
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    render() {
        let { banner } = this.props
        return (
            <div>


                <Banner banner={banner}>
                </Banner>
                <Homefinxed></Homefinxed>
            </div>
        )
    }
    componentDidMount() {
        console.log("componentDidMount home")
        this.props.handleGetHomeBanner()
    }
}
export default Home