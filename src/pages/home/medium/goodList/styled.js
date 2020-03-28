import styled from "styled-components"
export const GoodCon = styled.div `
.relevant-article-title {
    margin: .24rem .24rem .4rem;
    position: relative;
    display: inline-block;

    .title {

        font-size: .4rem;
        line-height: .56rem;
        color: rgb(33, 33, 33);
        font-weight: bold;
    }
    
    .border {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 6px;
        background: rgb(22, 179, 124);
    }

}

.product-list{
    // padding-top: .92rem;
    font-size: .24rem;
    width: 100%;
    padding: .1rem;
    justify-content: space-bettew;
    display: flex;
    flex-wrap: wrap;
    background:#fff;

.product-item{
    background:#fff;
    width: 47%;
    height:5.66rem;
    margin-bottom: .68rem;
    margin-right: .02rem;
    img{
      width: 100%;
      height: 3.9rem;
      margin-bottom: .14rem;  
    }
    .product-info{
        width: 100%;
        overflow: hidden;
        padding-left: .3rem;
        .activityDesc{
           color: #c44747; 
        }
        p{
            // display: block;
            // white-space: nowrap;
            // text-overflow: ellipsis;
        }
        span{
            display: inline-block;
        }
       .title{
        padding-right: .12rem;
        margin-bottom: .08rem;
        max-height: .84rem;
        overflow: hidden;
        color: rgb(33, 33, 33);
    font-size:.3rem;
    line-height: .42rem;
       }
       .summary{
        padding-right: .12rem;
        margin-bottom: .16rem;
        height: .72rem;
        overflow: hidden;
        color: rgb(149, 149, 149);
        font-size: .26rem;
        line-height: .36rem
       }
        .price{

            span{
                font-size: .32rem;
                font-weight: bold;
                color: rgb(247, 52, 81);
            }
            i{
                position: relative;
                display: inline-block;
                div{
                    position: absolute;
                    top: 30%;
                    height: 2px;
                    background: #bbb;
                    width:100%;
                }
                }
            }
        }

    }
}
.no-margin{
    margin-right: 0;
}


}

`