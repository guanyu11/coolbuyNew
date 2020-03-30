import React, { Component } from 'react'
import { ClassifyContainer } from "./styled"
import GoodsList from './goodsList'
import {connect} from "react-redux"
import{mapStateToProps,mapDispatchToProps} from "./connect"
import {withRouter} from "react-router-dom"
@connect(mapStateToProps,mapDispatchToProps)
class Classify extends Component {
    constructor(){
        super();
        this.state={
            activeIndex:0
        }
    }
    render() {
        let {classifyData}=this.props
        let{activeIndex}=this.state
        console.log(this.props.classifyData)
        return (
            <ClassifyContainer>
                <div className="class-header">
                    <div onClick={this.handleToSearch.bind(this)}>
                        <span className="iconfont">&#xe60d;</span>
                        <div>寻找称心玩物</div>
                    </div>
                </div>
                <div className="class-container">
                    <div className="class-bar">
                        <ul>
                            {
                                classifyData.map((item,index)=>(
                                <li className={activeIndex===index?"active":""} key={item.id}
                                    onClick={this.handleToggle.bind(this,index)}
                                >{item.name}</li>
                                ))
                            } 
                        </ul>
                    </div>
                    <GoodsList activeItem={activeIndex}></GoodsList>

                </div>
            </ClassifyContainer>
        )
    }
    componentDidMount(){
        this.props.getClassify()
    }
    handleToggle(index){
        this.setState({
            activeIndex:index
        })
    }
    handleToSearch(){
        this.props.history.push("/search")
    }
}
export default Classify