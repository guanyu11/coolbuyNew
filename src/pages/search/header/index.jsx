import React, { Component } from 'react'
import { HeaderContainer } from "./styled"
import { connect } from "react-redux"
import { mapStateToPorps, mapDispatchToprops } from "../connect"
import {withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToPorps, mapDispatchToprops)
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:""
        }
    }
    render() {
        // console.log(this.props)
        return (
            <HeaderContainer>
                <div className="search--input">
                <input type="text" placeholder={this.props.word} value={this.state.inputValue} onChange={this.changeValue.bind(this)} onKeyDown={this.searchKeyWord.bind(this)}/>
                </div>
                <div className="cancel" onClick={this.props.history.goBack}>取消</div>
            </HeaderContainer>
        )
    }
    // 输入内容触发
    changeValue(e){
        // console.log(e.target.value)
        this.setState({
            inputValue:e.target.value
        })

    }
    // 按下键盘回车键触发搜索
    searchKeyWord(e){
        if(e.keyCode===13){
            // 保存搜索数据
            this.props.handleStoreHistory(e.target.value)
            this.props.history.push(`/search/${this.state.inputValue}`)
        }
    }
    componentDidMount(){
        console.log(this.props.keyword)
        this.setState({
            inputValue:this.props.keyword
        })
    }
    componentWillReceiveProps(props){
        if(props.keyword!==this.props.keyword){
            this.setState({
                inputValue:props.keyword
            })
        }
    }
}
export default Header