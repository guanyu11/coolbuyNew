import React, { Component, Fragment } from 'react'
import { SearchContentCon } from "./styled"
import GoodsItem from "@components/goodsItem"
import { connect } from "react-redux"
import { mapStateToPorps, mapDispatchToprops } from "../connect"
import { withRouter } from "react-router-dom"
import DataLoading from "@common/dataLoading/index.jsx"

@withRouter
@connect(mapStateToPorps, mapDispatchToprops)
class SearchContent extends Component {
    constructor() {
        super();
        this.state = {
            success: false
        }
    }
    render() {
        let { keywordList, total } = this.props
        // console.log(keywordList)
        let { success } = this.state
        return (
            <Fragment>
                {
                    !success ? <DataLoading></DataLoading> :
                        <SearchContentCon>
                            <div className="total">共为您找到{total}款好物 </div>
                            <div className="content" >
                                <div className="half">
                                    {
                                        keywordList.map((item, index) => (
                                            index % 2 === 0 ? <GoodsItem item={item} key={item.id} /> : ""
                                        ))
                                    }
                                </div>
                                <div className="half">
                                    {
                                        keywordList.map((item, index) => (
                                            index % 2 !== 0 ? <GoodsItem item={item} key={item.id} /> : ""
                                        ))
                                    }
                                </div>

                            </div>
                        </SearchContentCon>
                }
            </Fragment>
        )
    }
    componentDidMount() {
        // console.log(this.props.match.params)
        this.props.getKeyWordData.call(this,this.props.match.params.keyword)
    }
    componentWillReceiveProps(props) {
        if (props.match.params.keyword !== this.props.match.params.keyword) {
            this.props.getKeyWordData(props.match.params.keyword)
        }
    }
}
export default SearchContent