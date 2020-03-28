import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect'
import VenderItem from "./vendorItem"
import Vendortail from "./vendorDetail"

@connect(mapStateToProps, mapDispatchToProps)
class vendor extends Component {
    constructor() {
        super()
        this.state = {
            query: {
                mg_size: "medium",
                offset: 0,
                limit: 20
            },
           
        }
    }
    render() {
        // console.log(this.props,"vendorProps")
        let { vendorList,vendorDetail } = this.props;
        // console.log(vendorList, "vendorList")
        // console.log(vendorDetail, "vendorDetail")
        // if(!this.props.match.params.id){
             return (
            <div>
                {
                    vendorList.map((item, index) => (
                    <Link key={item.id} to={"/vendor/"+item.id}>
                        <VenderItem item={item} index={index}>
                        </VenderItem></Link>))
                }
            </div>
        )
        // }else{
        //     return (
        //     <Vendortail detail={vendorDetail}></Vendortail>
        //     )
        // }
       
    }
    componentDidMount() {
     
        this.props.handleGetVendorIndex(this.state.query)
        
    }
    componentWillReceiveProps(){
        // console.log("props变化了")

        // this.foreUpdate()

        // if(this.props.match.params.id){
        //     console.log(this.props.match.params.id)
        // this.props.handleGetVendorIndex({id:this.props.match.params.id})

        // }else{
        //      console.log(111)
        // console.log(this.props,"vendorProps,componentDidMount 111")
        // this.props.handleGetVendorIndex(this.state.query)
        // } 
    }

    // shouldComponentUpdate(...rest){
    //     console.log(rest,"rest")
    //     return false
    // }
}
export default vendor