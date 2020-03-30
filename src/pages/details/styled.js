import styled from "styled-components"
export const DetailsContainer = styled.div`
    height: max-content;
    width:100%;
    .detail-banner{
    width: 100%;
    height: 7.5rem;
    /* overflow: hidden; */
}


/* goods-msg */
.goods-msg{
    width: 100%;
   padding: .26rem .24rem;
   background: #fff;
   margin-bottom: .2rem;
}
.goods-price{
    width: 100%;
    height:.88rem ;
    display: flex;
    justify-content: space-between;
    margin-bottom: .24rem;
}
.goods-price .left{
    font-size: .48rem;
    color: rgb(247, 52, 81);
    font-weight: 500;
}
.price{
    height: .48rem;
    line-height: .48rem;
    display: flex;
    align-items: flex-end;
}
.price span:nth-child(1){
    font-size: .36rem;

}
.sub-price{
    
    margin-top: 5px;
    color: rgb(247, 52, 81);
    font-size: 10px;
    line-height: 14px;
    background-color: rgba(251, 94, 118, 0.1);
    padding: 0px 6px;
    border-radius: 14px;
}
.right{
    font-size:.24rem ;
    color: rgb(149, 149, 149);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.right span:nth-child(1){
    font-size: .45rem;
}
.goods-title{
    font-size: 17px;
    line-height: 20px;
    color: rgb(79, 79, 79);
    margin-bottom: 4px;
    font-weight: 500;
}
.googs-desc{
    font-size: 13px;
    line-height: 18px;
    color: rgb(149, 149, 149);
    word-break: break-all;
}
.goods-send{
    font-size: 12px;
    color: rgb(149, 149, 149);
    margin-top: .32rem;
    display: flex;
}
.goods-send span{
    width: 50%;
}

.standards{
    width: 100%;
    padding: 0 .24rem;
    margin-bottom: .16rem;
    height: .84rem;
    font-size: .26rem;
    line-height: .84rem;
    color: rgb(1, 1, 1);
    background: #fff;
    display: flex;
    justify-content:space-between;
}

.goods-serve{
    width: 100%;
    padding: 0 .24rem;
    background: #fff;

}
.goods-serve .standards{
    border-bottom: 1px solid #eee;
    padding: 0;
}
.serve>div:nth-child(1){
    padding-bottom: .08rem;
    font-size: .26rem;
    color: rgb(149, 149, 149);
    display: flex;
}
.serve p{
    width: .6rem;
    height: 1.04rem;
    color: #111;
}
.serve>div:nth-child(1) div{
    width: 100%;
    display: flex;
}
.serve ul{
    width:5.94rem ;
    height: 1.04rem;
    display: flex;
    flex-wrap: wrap;
    margin-left:.16rem ;
    align-items: flex-start;
}
.serve ul li{
    flex-shrink: 0;
    margin: 0 .28rem .16rem .16rem;
    position: relative;
}
.serve ul li::before{
    content: "";
    width: .08rem;
    height: .08rem;
    border-radius: 50%;
    background: rgb(247, 52, 81);
    left: -0.16rem;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
}
.arrow{
     color: rgb(1, 1, 1);
}

.serve>div:nth-child(2){
    flex: 1;
    height: 1rem;
    padding-top: .16rem;
    margin-left:.7rem ;
    font-size: 13px;
    color: rgb(149, 149, 149);
    display: flex;
    border-top: 1px #ccc dashed;
    justify-content: space-between;
}
.serve>div:nth-child(2) span:nth-child(1){
    width: 5.5rem;
    margin: 0 .24rem .16rem .16rem;
    position: relative;

}
.serve>div:nth-child(2) span:nth-child(1)::before{
    content: "";
    width: .08rem;
    height: .08rem;
    border-radius: 50%;
    background: rgb(247, 52, 81);
    left: -0.16rem;
    top: 25%;
    transform: translateY(-50%);
    position: absolute;
}

/* details */
.goods-details{
    width: 100%;
    background: #fff;
    margin-top: .2rem;
}
.goods-nav{
    width: 100%;
    height: .92rem;
    display: flex;
    margin-bottom: .36rem;
}
.goods-nav li{
    width: 33.33%;
    height: 100%;
    color: rgb(1, 1, 1);
    font-size: 14px;
    border-bottom: 1px solid rgb(222, 222, 222);
    text-align: center;
    line-height:.92rem ;
}
.goods-nav .active{
    color: rgb(247, 52, 81);
    border-bottom: 2px solid rgb(247, 52, 81);
}
.goods-info{
    width: 100%;
    /* height:2.44rem ; */
    padding: 0 .28rem .96rem;
}
.goods-info div{
    width: 100%;
    height: .74rem;
    display: flex;
    align-items: center;
    color: rgb(69, 69, 69);
    font-size: .24rem;
    border-bottom: 1px dashed #ccc;
    padding: 0 .24rem;
}
.goods-info div span:nth-child(1){
    color: rgb(149, 149, 149);
    flex: 1 0 0px;
}
.goods-info div span:nth-child(2){
    flex: 3 0 0px;
}
.content img{
    width: 100%;
}
.content {
    padding:0 .3rem;
    font-size:.3rem;
}

/* send info */
.send-info{
    margin-top: .48rem;
    padding: 0 .28rem;
    margin-bottom: .96rem;
}
.info-item{
    width: 100%;
    padding: .2rem .24rem;
    border-bottom: 1px dashed rgb(222, 222, 222);
    color: rgb(69, 69, 69);
    font-size: .28rem;
    line-height: .4rem;
    /* white-space: pre-wrap; */
}
.info-item div:nth-child(1){
    font-weight: 600;
    color: rgb(1, 1, 1);
    margin-bottom: .2rem;
}
.price-item{
    padding: 0 .24rem 1rem;
}
.price-item div:nth-child(1){
    margin-bottom: .2rem;
}
`
export const HeaderContainer =styled.div`
        width:100%;
        height:.6rem;
        background:#fff;
        border-bottom:1px solid #ddd;
        position:fixed;
        left:0;
        top:0;
        z-index:10;
        display:flex;
        opacity:${props=>props.opacity};
        transition:opacity .5s ease;
        &>div{
            width:50%;
            height:100%;
            display:flex;
            justify-content:center;
            div{
                line-height:.6rem;
                font-size:.3rem;
                padding:.12rem;
                line-height:1;
                
            }
            .active{
                border-bottom:.004rem solid rgb(247, 52, 81);
                color:rgb(247, 52, 81);
            }
        }
`