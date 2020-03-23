   import immutable from "immutable"
   import {handleActions   } from "redux-actions"
   import {ArticleAboutType ,ArticleMainType } from "@actions/article/articleTypes"
   let defaultData = immutable.fromJS({
       articleMain:{},
       articleAbout: []
   })

   export default handleActions({
       [ArticleMainType]: (state,actions) => {
        //    console.log(actions,"actions ArticleMainType")
           return state.updateIn(["articleMain"], _ => actions.data)
       },
       [ArticleAboutType]: (state,actions) => {
        // console.log(actions,"actions ArticleMainType")
        return state.updateIn(["articleAbout"], _ => actions.data.objects)
    }
   }, defaultData)