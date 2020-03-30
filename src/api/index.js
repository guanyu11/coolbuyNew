export default{
    home:{
        banner:"api/v1.4/campaign_banner"
    },
    vendor:{
        index:"api/v3/canton/vendor/"
        //品牌详情直接在后面+id
        //全部品牌 加query
    },
    cart:{
        cart:"/api/v3/canton/shopping-cart",
        select:"/api/v3/canton/shopping-cart/check/",
        count:"/api/v3/canton/shopping-cart",
        collection:"/api/v1.4/product-like/",
        addGoods:"/api/v1.4/shopping_cart/",
        combainGoods:"/api/v1.4/shopping_cart/656448/"
    },
    find:{
        careChoose:"api/v1.4/page/",
        careChoosePro:"api/v1.4/product_preview/"
    },
    mine:{

    },
    login:{

    },
    classify:{
        classify:"/api/v1.4/category/"
    },
    goodsList:{
        goodsList:"/api/v1.4/shelf_preview/",
        goodsNav:"/api/v1.4/category/"
    },
    // 商品详情
    details:{
        details:"/api/v1.4/product/detail/"
    },
    // search
    search:{
        search:"/api/v1.4/search-keyword/",
        keyword:"/1/indexes/prod_canton_product/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.27.1&x-algolia-application-id=7TN0U2FL3Q&x-algolia-api-key=a65c81d3dc71fd11eb7a1d6fbc57f9f9"
    },
    article:{

    }
}


//品牌馆
//https://coolbuy.com/
//api/v3/canton/vendor/
//?

// query:{
//     img_size:"medium",
//     offset:0,
//     limit:20
// }