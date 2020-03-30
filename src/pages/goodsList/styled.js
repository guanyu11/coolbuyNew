import styled from "styled-components"

export const GoodsListContainer = styled.div`
     width: 100%;
    height: 100%;
    overflow:hidden;
    .detail-header{
    width: 100%;
    height: .8rem;
    background: #fff;
    position:fixed;
    left:0;
    top:0;
}
.detail-header ul{
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left:.48rem ;
}
.detail-header li{
    flex-shrink: 0;
    height: 100%;
    margin-right: .48rem;
    font-size: .3rem;
    line-height: .8rem;
    color: rgb(79, 79, 79);
    position: relative;
}

.detail-header li::after{
    text-align:center;
    content: "";
    width: 0;
    height: .04rem;
    background-color: rgb(247, 52, 81);
    position: absolute;
    left:0;
    bottom: 0;
    transition: width .3s cubic-bezier(.46, 1, .23, 1.52);
}
.detail-header .active::after{
    width: 100%;
}


/* 商品列表 */
.detail-goods-list{
    width: 100%;
    height: 100%;
    padding:1rem .24rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    overflow:auto;
}
.half{
    width:49%;
}
`

