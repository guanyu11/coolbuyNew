import React, { Component } from 'react'
import {CountContainer} from "./styled"
export default class Count extends Component {
    constructor(props){
        super(props);
        this.state={
            count:this.props.count
        }
        
    }
    render() {
        let {count} =this.state
        return (
            <CountContainer>
                <span onClick={this.changeCount.bind(this, "reduce")}>-</span>
                <span>{count}</span>
                <span onClick={this.changeCount.bind(this)}>+</span>
            </CountContainer>
        )
    }
    changeCount(flag) {
        if (flag === "reduce") {
            this.setState((state) => {
                if (state.count === 1) {
                    return {
                        count: 1
                    }
                } else {
                    return {
                        count: --state.count
                    }
                }
            },()=>{
                this.props.changeCount(this.state.count)
            })
        } else {
            this.setState((state) => {
                return {
                    count: ++state.count
                }
            },()=>{
                this.props.changeCount(this.state.count)
            })
        }
        
    }
}

Count.defaultProps={
    count:1,
    changeCount:()=>{}
}