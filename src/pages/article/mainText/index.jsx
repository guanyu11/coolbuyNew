import React, { Component } from 'react'
import { ArticleMainDiv } from "./styled"
class MainText extends Component {
    render() {
        // console.log(this.props, "mainmain")
        let { main } = this.props;
        if (!main.component) {
            return ""
        } else {
            let htmlCon={__html:main.component[1].html.replace(/!important/g,"")}
            return (
                <ArticleMainDiv>
                    <img className="article-image"
                        src={main.cover_image} />
                    <div className="titleone">
                        {main.title}
                     </div>
                    <div className="playThing">
                        <img
                            src="https://media.ifanrusercontent.com/user_files/canton/e9/a9/e9a96f005e52ffe0ec15fba2c0470ca606b0fda7-64496b8e5dbb3e45076cf19d539bc553a6b4228a.png!large"
                        />
                        <div className="detail">
                            <div className="name">玩物君</div>
                            <div className="description">每天给你一个新奇生活。</div>
                        </div>
                    </div>
                    {/* <!-- 文章内容 component[1].html--> */}
                    <div className="article-con" dangerouslySetInnerHTML={htmlCon} >
                    </div>
                </ArticleMainDiv>


            )
        }

    }
}
export default MainText