import {asyncArticleMainAction} from "@actions/article/articleActions"

export const mapStateToProps =(state)=>({
    articleMain:state.getIn(["article","articleMain"]),
    articleAbout:state.getIn(["article","articleAbout"])
 
})

export const mapDispatchToProps =(dispatch)=>({
   handleArticleMainData(id){
    dispatch(asyncArticleMainAction(id))
   }
})