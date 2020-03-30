import React, { Component, Fragment } from 'react'
import { DetailsContainer, HeaderContainer } from "./styled"
import Banner from "@components/swiperLeo"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import { connect } from "react-redux"
import Bar from "./bar"
import Choice from "./choice"
import BScrollCom from '../../common/bscroll'
import DataLoading from '@common/dataLoading/index.jsx'
@connect(mapStateToProps, mapDispatchToProps)
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: false,
            opacity: 0,
            activeHeader: "好物",
            success:false
        }
        this.id = this.props.match.params.id
    }
    render() {
        let { banner, detailsData, priceRange, cartData } = this.props
        let {success}=this.state
        return (
            <Fragment>
                {
                !success?<DataLoading></DataLoading>:""
                }
                <BScrollCom ref="scroll">
                    <DetailsContainer>
                        {/* banner */}
                        <Banner banner={banner}></Banner>
                        {/* msg */}
                        <div className="goods-msg">
                            <div className="goods-price">
                                <div className="left">
                                    <div className="price">
                                        <span>￥</span>
                                        {
                                            <span>{priceRange[0]}~{priceRange[1]}</span>
                                        }
                                    </div>
                                    {
                                        <div className="sub-price">
                                            购买得 {priceRange[0]}~{priceRange[1]} 积分
                                </div>
                                    }

                                </div>
                                <div className="right">
                                    <span className="iconfont">&#xe607;</span>
                                    <span>收藏</span>
                                </div>
                            </div>

                            <div className="goods-title">
                                {detailsData.title}
                            </div>
                            <div className="googs-desc">
                                {detailsData.summary}
                            </div>

                            <div className="goods-send">
                                <span>发货地：{detailsData.depot_location}</span>
                                <span>运费：¥0 ~ ¥13</span>
                            </div>
                        </div>
                        {/* 规格 */}
                        <div className="standards">
                            <span>请先择商品规格</span>
                            <span className="iconfont">&#xe61b;</span>
                        </div>
                        {/* serve */}
                        <div className="goods-serve">
                            <div className="standards">
                                <span>包装售后</span>
                                <span className="iconfont">&#xe61b;</span>
                            </div>
                            <div className="serve">
                                <div>
                                    <p>服务</p>
                                    <div >
                                        <ul>
                                            {
                                                detailsData.service_instruction ? detailsData.service_instruction.map((item) => (
                                                    <li key={item.key}>{item.key}</li>
                                                )) : ""
                                            }
                                        </ul>
                                        <span className="iconfont arrow">&#xe61b;</span>
                                    </div>
                                </div>
                                <div>
                                    <span>{detailsData.supplier ? detailsData.supplier.name : ''}</span>
                                    <span className="iconfont arrow">&#xe61b;</span>
                                </div>
                            </div>
                        </div>

                        {/* details */}
                        <div className="goods-details" ref="details">
                            <ul className="goods-nav">
                                <li className="active">图文介绍</li>
                                <li>产品参数</li>
                                <li>包装售后</li>
                            </ul>
                            <div className="goods-info">
                                {
                                    detailsData.attributes ? detailsData.attributes.map((item) => (
                                        <div key={item.key}>
                                            <span>{item.key}</span>
                                            <span>{item.value}</span>
                                        </div>
                                    )) : ''
                                }
                            </div>
                            {
                                this.showhtml(detailsData.description)
                            }
                            <div className="send-info">
                                {
                                    detailsData.notice&&detailsData.notice.map ? detailsData.notice.map((item) => (
                                        <div className="info-item" key={item.key}>
                                            <div>{item.key}</div>
                                            <div>
                                                {item.value}
                                            </div>
                                        </div>
                                    )) : ""
                                }
                            </div>
                            <div className="send-info send-price">
                                <div className="info-item price-item">
                                    <div>价格说明</div>
                                    <div>
                                        划线价格：指商品的正品零售价，专柜价，吊牌价，厂商指导价或者该商曾经展示过的销售价等，并非原价，仅供参考。
                                    </div>
                                    <div>
                                        未划线价格：指商品的实时标价，不因表述的差异改变性质，具体成交价格根据商品参加活动，或者会员使用优惠券、积分等发生变化，最终以订单结算页价格为准
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* recommend */}
                        <div className="goods-recommend">
                            <div className="title">猜你喜欢</div>
                            <div className="recommend-list">
                                <div className="list-item">

                                </div>
                            </div>
                        </div>

                    </DetailsContainer>
                    {/* header */}
                    <HeaderContainer opacity={this.state.opacity}>
                        <div>
                            <div className={this.state.activeHeader === "好物" ? "active" : ""}
                                onClick={this.changeoptions.bind(this, "好物")}
                            >好物</div>
                        </div>
                        <div>
                            <div className={this.state.activeHeader === "详情" ? "active" : ""}
                                onClick={this.changeoptions.bind(this)}
                            >详情</div>
                        </div>
                    </HeaderContainer>
                    <Bar quantity={cartData.quantity} showMaskCart={this.showMaskCart.bind(this)}></Bar>
                    <Choice choice={this.state.choice} showMask={this.showMask.bind(this)}></Choice>
                </BScrollCom>
                
            </Fragment>


        )
    }
    componentDidMount() {
        this.props.getDetails.call(this,this.id)
        this.refs.scroll.handleScroll(this.changeOpacity.bind(this))
    }
    // 优化

    showhtml(htmlString) {
        var html = { __html: htmlString };
        return <div className="content" dangerouslySetInnerHTML={html}></div>
    }
    showMask() {
        this.setState({
            choice: false
        })
    }
    showMaskCart() {
        this.setState({
            choice: true
        })
    }
    // 滑动的时候改变透明度
    changeOpacity(value, y) {
        if (value === this.state.value) return
        if (this.refs.details&&this.refs.details.offsetTop + y <= 30) {
            this.setState({
                opacity: value,
                activeHeader: "详情"
            })
        } else {
            this.setState({
                opacity: value,
                activeHeader: "好物"
            })
        }
    }
    changeoptions(type) {
        this.setState({
            activeHeader: "好物",
        })
        let y;
        if (type === "好物") {
            // this.setState({
            //     activeHeader: "好物",
            //     opacity: 0,
            // })
            y = 0
        } else {
            y = -(this.refs.details.offsetTop - 30)
            this.setState({
                opacity: 1,
                activeHeader: "详情"
            })
        }
        this.refs.scroll.handleScrollTo(0, y)
    }
}

export default Details
