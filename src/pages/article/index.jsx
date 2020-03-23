import React, { Component } from 'react'
import AboutItem from "./aboutItem"
import MainText from "./mainText"
import {connect} from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from "./connect"
import {ArticleDiv} from "./styled"
@connect(mapStateToProps, mapDispatchToProps)
class Article extends Component {
    render() {
        console.log(this.props,"Article")
        let{articleMain,articleAbout}=this.props;
        return (
            <ArticleDiv>
               <MainText  main={articleMain} ></MainText>
               <AboutItem  ref="AboutItem" aboutList={articleAbout}></AboutItem>
            </ArticleDiv>
        )
    }
    componentDidMount(){
        this.props.handleArticleMainData(this.props.match.params.id)
    }
}
export default Article