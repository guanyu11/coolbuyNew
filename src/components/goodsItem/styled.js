import styled from "styled-components"

export const GoodsItemContainer=styled.div`
    width: 100%;
    background: #fff;
    margin-bottom: .14rem;
    border-radius: .12rem;
    overflow: hidden;
    align-self:flex-start;
.goods-img{
    width: 3.42rem;
    height: 3.42rem;
}
.goods-img img{
    width: 100%;
    height: 100%;
}
.detail-content{
    padding: .16rem .24rem;
    
}
.detail-title{
    font-size: .3rem;
    color: rgb(48, 48, 48);
    line-height: .42rem;
    margin-bottom: .08rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
}
.detail-des{
    font-size: .24rem;
    color: rgb(149, 149, 149);
    line-height: .34rem;
    margin-bottom: .16rem;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
    display: -webkit-box;
    overflow: hidden;  
}
.detail-price{
    display: flex;
    color:rgb(247, 52, 81) ;
    align-items: flex-end;
}
.detail-price span:nth-child(1){
    font-size: .24rem;
    line-height: .28rem;
    font-weight: 500;
}
.detail-price span:nth-child(2){
    font-size: .36rem;
    line-height: 1;
    font-weight: 500;
}
`