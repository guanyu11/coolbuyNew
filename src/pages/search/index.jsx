import React, { Component } from 'react'
import { SearchContainer } from "./styled"
import Header from "./header"
import { mapStateToPorps, mapDispatchToprops } from "./connect"
import { connect } from "react-redux"
import {withRouter} from "react-router-dom"
@connect(mapStateToPorps, mapDispatchToprops)
@withRouter
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            history: localStorage.getItem("searchHistory") ? JSON.parse(localStorage.getItem("searchHistory")) : [],
            keyword:this.props.location.pathname.split("/").length===2?"":this.props.location.pathname.split("/").splice(-1)[0]
        }
    }
    render() {
        let { searchKeyWords, defaultWord } = this.props
        let { history,keyword } = this.state
        return (
            <SearchContainer>
                <Header keyword={keyword} word={defaultWord} handleStoreHistory={this.handleStoreHistory.bind(this)}/>
                {
                    history.length ?
                        <div className="search--tags">
                            <div className="title">
                                <div>历史搜索</div>
                                <span className="iconfont">&#xe609;</span>
                            </div>
                            <ul className="content">
                                {
                                    history.map((item,index) => (
                                        <li key={item}
                                        onClick={this.handleSearch.bind(this,item.keyword)}
                                        >{item}</li>
                                    ))
                                }
                            </ul>
                        </div> : ""
                }
                <div className="search--tags">
                    <div className="title">热门搜索</div>
                    <ul className="content">
                        {
                            searchKeyWords.map((item, index) => (
                                <li className={index < 3 ? "active" : ""} key={item.keyword}
                                onClick={this.handleSearch.bind(this,item.keyword)}
                                >{item.keyword}</li>
                            ))
                        }
                    </ul>
                </div>
            </SearchContainer>
        )
    }
    componentDidMount() {
        this.props.getSearchData()   
    }
    // 传入header中的函数，按下回车保存搜索历史
    handleStoreHistory(keyword){
        let data=this.state.history
        if(!data.includes(keyword)){
            data.push(keyword)
            localStorage.setItem("searchHistory",JSON.stringify(data))
        }  
    }
    // 点击热门搜索等
    handleSearch(keyword){
        this.setState({
            keyword
        })
        this.props.history.push("/search/"+keyword)
        // this.props.getKeyWordData(keyword)
    }
    
}
export default Search