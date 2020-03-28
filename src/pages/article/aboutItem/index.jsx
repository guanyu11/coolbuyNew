import React, { Component } from 'react'
import { ArticleAboutDiv } from "./styled"
class AobutItem extends Component {

    render() {
        let { aboutList } = this.props;
        if (aboutList.length == 0) {
            return ""
        } else {
            return (
                <ArticleAboutDiv>
                    <div className="relevant-article">
                        {/* <!-- 题目 --> */}
                        <div className="relevant-article-title">
                            <span className="title">相关专题</span>
                            <div className="border"></div>
                        </div>
                        <div className="item-con">
                            {
                                aboutList.map((item, index) => {
                                    {
                                        return <div key={item.id} className="item">
                                            <img src={item.cover_image} />
                                            <div className="detail">
                                                <div className="tag">
                                                    {
                                                        item.tag.map((child, num) => {
                                                            return <div key={num} >{child}</div>
                                                        })
                                                    }
                                                </div>
                                                <div className="title">{item.title}</div>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div></div></ArticleAboutDiv>
            )
        }

    }
}
export default AobutItem