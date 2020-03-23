import React, { Component } from 'react'
import { VenderDetail } from './styled'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from '../connect'
@connect(mapStateToProps,mapDispatchToProps)
class Venderdetail extends Component {
    render() {
        let detail=this.props.vendorDetail
        return (
            <VenderDetail background={detail.background_color||"#000"} >
                <div className="vendor" >
                    <div className="image">
                        <img
                            src={detail.cover_image}/>
                    </div>
                     {/* style="background:rgb(223, 187, 169);" */}
                    <div className="vendorDetailcon" >
                        {/* <!-- logo部分 --> */}
                        <div className="vendor-head">
                            <div className="vendorLogo">
                                <img
                                    src={detail.logo}/>
                            </div>
                            <div className="vendorText">
                                <div>{detail.name}</div>
                                <div>{detail.summary}</div>
                            </div>
                        </div>

                        <div className="detail-text" dangerouslySetInnerHTML={{__html:detail.description}}>
                        </div>
                        <div className="downUp">
                            <div>
                                <a>
                                    <span className="text">收起</span>
                                    <i className="iconfont">&#xe62a;</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </VenderDetail>
        )
    }
    componentDidMount() {
        if(this.props.match.params.id){
            // console.log(this.props.match.params.id)
        this.props.handleGetVendorIndex({id:this.props.match.params.id})

        }else{
             console.log(111)
        // console.log(this.props,"vendorProps,componentDidMount 111")
        // this.props.handleGetVendorIndex(this.state.query)
        }
    }
}
export default Venderdetail

