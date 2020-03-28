import React, { Component } from 'react'
import AboutItem from "./aboutItem"
import MainText from "./mainText"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from "./connect"
import { ArticleDiv, FindHead } from "./styled"
import BScrollCon from "@common/scroll"
import Product from './product';
import { throttle } from "@utils/utils"

@connect(mapStateToProps, mapDispatchToProps)
class Article extends Component {
    constructor() {
        super()
        this.state = {
            active: "main",
            opacity: 0,
            status: true
        }
    }
    render() {
        // console.log(this.props, "Article")
        let { articleMain, articleAbout } = this.props;
        let statusDiv;
        if (this.state.status) {
            statusDiv = <div className="commandGood" onClick={this.toggleCommand.bind(this)} >推荐好物 ({articleMain.component ? articleMain.component[2].product.length : ''})</div>
        } else {
            statusDiv = <div className="commandGood" onClick={this.toggleCommand.bind(this)} >收起</div>
        }
        return (
            <ArticleDiv>

                {/* <!-- 头部 --> */}
                <FindHead ref="artiHead" style={{ opacity: this.state.opacity }} >
                    <div className="head">
                        <div onClick={this.toggleActive.bind(this, "main")}  >
                            <a className={this.state.active === "main" ? "active" : ''}>正文</a>
                        </div>
                        <div onClick={this.toggleActive.bind(this, "about")} >
                            <a className={this.state.active === "about" ? "active" : ''}>相关专题</a>
                        </div>
                    </div>
                </FindHead>
                {/*推荐好物 */}
                
                {!this.state.status ? <Product product={
                    articleMain.component ? articleMain.component[2].product : ''
                }  ></Product> : ""}

                
                <BScrollCon ref="scroll" >
                    <div>
                        <MainText id="main_arti" ref="main" main={articleMain} ></MainText>
                        <div id="about_arti"></div>
                        <AboutItem ref="AboutItem" aboutList={articleAbout}></AboutItem>
                    </div>

                </BScrollCon>
                <div className="commandGoogGoods" >
                    <div className="goHome" >
                        <div >
                            <div className="iconfont">&#xe60b;</div>
                            <div className="text">首页</div>
                        </div>
                    </div>
                    {statusDiv}
                </div>
            </ArticleDiv>
        )
    }
    componentDidMount() {
        this.props.handleArticleMainData(this.props.match.params.id)
        this.refs.scroll.ArtiHandleScroll(this.HandleArtiScroll.bind(this))
    }
    async toggleActive(data) {
        await this.setState({
            active: data
        })
        this.refs.scroll.handleGetCurrentPage("#" + data + "_arti")
    }

    //滚动的时候  检测top 
    HandleArtiScroll(x, y) {
        var aboutTop = document.getElementById("about_arti").offsetTop;
        if (-y >= aboutTop) {
            this.setState({
                active: "about"
            })
        } else {
            this.setState({
                active: "main"
            })
        }
        if (-y < 375) {
            // this.refs.artiHead.style.opacity= (-y/180);
            this.setState({
                opacity: (-y / 180).toFixed(1)
                //这里的375  应该是那个大图高度  之前没给ref
            })
        } else {
            this.setState({
                opacity: 1
            })
        }
        // console.log(this.refs.AboutItem)


    }
    toggleCommand() {
        this.setState({
            status: !this.state.status
        })
    }

}
export default Article