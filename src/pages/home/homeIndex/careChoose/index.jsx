import React, { Component } from 'react'
import { CarechooseDiv } from "./styled"
import {NavLink} from "react-router-dom"
class Carechoose extends Component {
    render() {
        // console.log(this.props, "care home111")

        let { articleList } = this.props;
        let shortlist = articleList.slice(1);
        // console.log(this.props.articleList, shortlist, "care home")
        if (articleList.length) {
            return (
                <CarechooseDiv>
                    < div className="careChoose" >
                        <div className="relevant-article-title">
                            <span className="title">每日精选</span>
                            <div className="border"></div>
                        </div>
                        <div className="con">
                            <div className="coverImg">
                                <img
                                    src={articleList[0].cover_image || ''}
                                />
                            </div>

                            {/* <!-- 文章卡片 只有一张图片时 --> */}
                            {
                                shortlist.map((item, index) => {
                                    return (
                                    <NavLink key={item.id} to={"/article/"+item.id}>
                                    <div className="article-item" >
                                        <div className="detail">
                                            <div className="title">{item.title}</div>
                                            <div className="tab">
                                                {
                                                    item.tag.map((child, index) => (<div key={index}>{child}</div>))
                                                }
                                            </div>
                                            <div className="homePlayThing">
                                                <img
                                                    src="https://media.ifanrusercontent.com/user_files/canton/e9/a9/e9a96f005e52ffe0ec15fba2c0470ca606b0fda7-64496b8e5dbb3e45076cf19d539bc553a6b4228a.png!large"
                                                />
                                                <div className="name">玩物君</div>
                                            </div>
                                        </div>
                                        <img
                                            src={item.cover_image}
                                        />
                                    </div></NavLink>)
                                })
                            }


                        </div>
                    </div>
                </CarechooseDiv >
            )
        }
        else {
            return (
                <div></div>
            )
        }

    }
}
export default Carechoose