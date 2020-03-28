import {
    HomeBannerApi,
    HomeActivityApi,
    homeCategoryApi
} from "@api/api"
import {
    HomeBannerType,
    HomeActivityType,
    HomeCategoryType
} from "./homeTypes.js"

export const HomeBannerAsyncAction = (query) => {
    const HomeBannerAction = (data) => ({
        type: HomeBannerType,
        data
    })
    const HomeActivityAction = (data) => ({
        type: HomeActivityType,
        data
    })
    const HomeCategoryAction = (data) => ({
        type: HomeCategoryType,
        data
    })
    
    return async (dispatch) => {
        let Bannerquery = {
            limit: 10,
            offset: 0,
            banner_type: "banner",
            img_size: "medium",
            platform: "mobile"
        }
        let data = await HomeBannerApi(Bannerquery);
        // console.log(data, "HomeBannerAsyncAction")
        dispatch(HomeBannerAction(data))
        let activityquery = {
            img_size: "medium",
            shelf_type: "activity",
            limit: 10
        }
        let activity = await HomeActivityApi(activityquery);
        // console.log(activity, "activity")
        dispatch(HomeActivityAction(activity))

        let Categorydata = await homeCategoryApi({ img_size: "medium", order_by: "-priority" })
        dispatch(HomeCategoryAction(Categorydata))




        

    }

}