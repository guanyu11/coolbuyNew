import React, { Component } from 'react'
import { GoodsListContainer } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import BScrollCom from "@common/bscroll"
import GoodsItem from "@components/goodsItem"
@connect(mapStateToProps, mapDispatchToProps)
class GoodsList extends Component {
    constructor(props) {
        super(props)
        let { currentIndex } = this.handlegetParams()
        this.state = {
            currentIndex
        }
    }
    render() {
        let { currentIndex } = this.state
        // console.log(currentIndex)
        let { goodsNavData, goodsListData } = this.props
        return (
            <GoodsListContainer>

                <div className="detail-header">
                    <BScrollCom ref="scroll">
                        <ul ref="series">
                            {
                                goodsNavData.map((item) => (
                                    <li className={item.id == currentIndex ? 'active' : ''} key={item.id}
                                        onClick={this.handleChange.bind(this, item.id)}
                                    >{item.name}</li>
                                ))
                            }

                        </ul>
                    </BScrollCom>
                </div>

                <div className="detail-goods-list">
                    <div className="half">
                        {
                            goodsListData.map((item,index) => (
                                index%2===0? <GoodsItem item={item} key={item.id} onClick={this.handleTodetails.bind(this, item.id)} />:""
                            ))
                        }
                    </div>
                    <div className="half">
                        {
                            goodsListData.map((item,index) => (
                                index%2!==0? <GoodsItem item={item} key={item.id} onClick={this.handleTodetails.bind(this, item.id)} />:""
                            ))
                        }
                    </div>
                </div>
            </GoodsListContainer>
        )
    }
    handlegetParams() {
        let str = this.props.location.search.slice(1);
        let params = str.split("&").reduce((pre, item) => {
            let key = item.split("=")[0];
            let value = item.split("=")[1];
            pre[key] = value;
            return pre
        }, {})
        return params
    }
    componentDidMount() {
        let { currentIndex, categoryId } = this.handlegetParams()
        // console.log(id)
        this.props.getGoodsNav.call(this,categoryId)
        this.props.getGoodsList(currentIndex)
    }
    handleChange(id) {
        this.setState({
            currentIndex: id
        },()=>{
            let left=this.refs.series.getElementsByClassName("active")[0].offsetLeft-15
            if(this.refs.series.offsetWidth-left<=document.documentElement.clientWidth){
                left=this.refs.series.offsetWidth-document.documentElement.offsetWidth
            }
            this.refs.scroll.handleScrollTo(-left)
        })
        this.props.getGoodsList(id)

    }
    handleTodetails(id) {
        this.props.history.push("/details/" + id)
    }
}
export default GoodsList