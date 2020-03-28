import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from '../connect'
import { withRouter } from 'react-router-dom'
import { MediumDiv } from "./styled"
import  Goodlist from "./goodList"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Medium extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overflow: true,
            idArr:""
        }
        // console.log(this.props,"constructor")

    }
    render() {
        let { category } = this.props;
        // console.log(tis.props)
        let activeMedium = category.filter((item) => {
            return item.id == this.props.match.params.id
        })[0];
        // console.log(activeMedium,"activeMedium")
        
        
        let shelvesItem = (item, index) => {
            if (activeMedium.shelves.length > 10 && index === 8) {
                return (
                    <Fragment>
                        <div key={item.id}className="shelves-item">
                            <img
                                src={item.cover_image}
                            />
                            <div >{item.name}</div>
                        </div>
                        <div className="shelves-item seeMore " >
                            <div className="circle">
                                <i className="iconfont" onClick={this.handleToggleOver.bind(this)}>{this.state.overflow ? "\ue61c" : "\ue62a"}</i>
                            </div>
                            <div >查看更多</div>
                        </div>
                    </Fragment>
                )
            } else {
                return (
                    <div key={item.id} className="shelves-item">
                        <img
                            src={item.cover_image}
                        />
                        <div >{item.name}</div>
                    </div>
                )
            }
        }
         let idArr;
        if (activeMedium) {
            idArr=(activeMedium.shelves).reduce((val,item)=>{
            return val+=(","+item.id)
        },activeMedium.shelves[0].id)
        // console.log(idArr,"idArr")
            return <MediumDiv>
                <div className="medium">
                    <div className="slider">
                        <img src={activeMedium.campaign_banner.image}/>
                    </div>
                    <div className="shelves">
                        <div className="shelves-con" style={this.state.overflow ? { maxHeight: 3.8 + "rem", overflow: "hidden" } : {}} >
                            {
                                activeMedium.shelves.map((item, index) => {
                                    return (shelvesItem(item, index))
                                })
                            }

                        </div>
                    </div>
                    <Goodlist idArr={idArr} shelves={activeMedium.shelves} ></Goodlist>
                </div>
            </MediumDiv>

        } else {
            return <div></div>
        }

    }
    componentDidMount() {
        
    }
    componentWillReceiveProps(next,now) {
        let { category } = this.props;
        // console.log(category,678)
    }
    handleToggleOver() {
        this.setState({
            overflow: !this.state.overflow
        })
    }
}
export default Medium