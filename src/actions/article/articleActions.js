import {ArticleAboutType,ArticleMainType} from "./articleTypes"
import{ArticleMainApi,ArticleAboutApi} from "@api/api"
export const asyncArticleMainAction=(id)=>{
//     id__in: 10591
// product_status: all
// limit: 1
    let aboutQuery={
    order_by: "?",
    limit: 20,
    page_type: "article",
    pk__ne: id
    }
    const ArticleMainAction=(data)=>({
        type:ArticleMainType,
        data
    })
    const ArticleAboutAction=(data)=>({
        type:ArticleAboutType,
        data
    })
    
    return async (dispatch)=>{
        let main =await ArticleMainApi(id);
        let about =await ArticleAboutApi(aboutQuery);
        // let preview =main.component[2].
        // console.log(main,about)
        dispatch(ArticleMainAction(main))
        dispatch(ArticleAboutAction(about))

    }
}