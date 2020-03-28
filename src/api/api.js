import http from  "@utils/request.js"
import api from "./index"
// {HotArtIndexApi, CareChooseIndexApi,CareChooseProApi,
export const HomeBannerApi=(data)=>{
    return http.get(api.home.banner,data)
}
//首页活动推荐
export const HomeActivityApi=(data)=>{
    return http.get(api.home.activity,data)
}
export const homeCategoryApi=(data)=>{
    return http.get(api.home.category,data)
}
export const homeMediumListApi=(data)=>{
    return http.get(api.home.mediumList,data)
}

//全部品牌
export const vendorIndexApi=(data)=>{
    return http.get(api.vendor.index,data)
}
//品牌详情
export const vendorDetailApi=(id)=>{
    return http.get(api.vendor.index+id+"/")
}

//发现页 每日精选
export const CareChooseIndexApi=(data)=>{
    return http.get(api.find.careChoose,data)
}
//每日精选横图部分
export const CareChooseProApi=(data)=>{
    return http.get(api.find.careChoosePro,data)
}

export const HotArtIndexApi=(data)=>{
    // return http.get(api.find.careChoosePro,data)
}
//文章详情页 文章内容
export const ArticleMainApi=(id)=>{
    return http.get(api.article.main+id)
}
//文章详情页 相关专题
export const ArticleAboutApi=(query)=>{
    return http.get(api.article.main,query)
}