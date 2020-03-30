import { searchType, keywordType } from "./searchType"
import { searchApi, keywordApi } from "@api/api"
export const getSearchAsyncActions = () => {
    const getSearchActions = (data, defaultWord) => ({
        type: searchType,
        data,
        defaultWord
    })
    return async (dispatch) => {
        let data = await searchApi()
        // console.log(data)
        let defaultWord
        for (let i = 0; i < data.objects.length; i++) {
            if (data.objects[i].is_default) {
                defaultWord = data.objects[i].keyword;
                break;
            }
        }
        console.log(defaultWord)
        dispatch(getSearchActions(data.objects.slice(1), defaultWord))
    }
}

export const getKeyWordAsyncActions = (keyword) => {
    const getKeyWordActions = (data,total) => ({
        type: keywordType,
        data,
        total

    })
    return async (dispatch) => {
        let sendData = {
            params: "", 
            query: keyword,
            hitsPerPage: 20,
            page: 0,
            attributesToHighlight: ["title"],
            facets: "*",
            facetFilters: ["status: -off_shelf", "status: -deleted"],
            numericFilters: ["mchid=1"]
        }
        let data = await keywordApi(sendData)
        console.log(data)
        dispatch(getKeyWordActions(data.hits,data.nbHits))
        return "success"
    }
}