import styled from "styled-components"
export const ProductDiv = styled.div `
position: fixed;
    height:100%;
    top: 0px;
    right: 0px;
    bottom: 54px;
    left: 0px;
    background-color: rgba(1, 1, 1, 0.6);
    z-index: 9999;

    .goodCon{
        position: fixed;
        bottom: 54px;
        left: 0px;
        right: 0px;
        height: 8rem;
        padding-top: 24px;
        background: rgb(238, 239, 241);
        overflow:auto;
   .gooditem{
    margin-bottom: .2rem;
    padding: .32rem;
    border-radius: .16rem;
        margin: 0px .32rem;
        display: flex;
        background: #fff;

       img{
       width:100%;
       position: relative;
       width: 2.23rem;
       height: 2.23rem;
       background-size: cover;
       margin-right: .24rem;
       background-position: center center;
       background-repeat: no-repeat;
       overflow: hidden;
       }
       .title {
        text-overflow: ellipsis;
        white-space: normal;
        font-size: 15px;
        line-height: 21px;
        color: rgb(21, 21, 21);
        margin-bottom: 4px;
        overflow: hidden;
    }
  .description {
        text-overflow: ellipsis;
        white-space: normal;
        font-size: 12px;
        line-height: 17px;
        color: rgb(149, 149, 149);
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .price{
        display: flex;
        width: 100%;
        line-height: 1;
        bottom: 0px;
        left: 0px;
        align-items: center; 
        justify-content: space-between;
        padding-right:.3rem;
        color: rgb(247, 52, 81)

    }


    .info-bottom-btn{
        margin-left: auto;
    background-color: rgb(247, 52, 81);
    font-size: 13px;
    line-height: 18px;
    color: rgb(255, 255, 255);
    border-radius: 14px;
    padding: 3px 10px;
    }
   }


}

.nomore{
    font-size: .26rrem;
    color: rgb(149, 149, 149);
    line-height: .36rem;
    text-align: center;
    margin-top: .52rem;
    margin-bottom: .72rem;
    .red{
        color: rgb(247, 52, 81)
    }
}
`