import styled from "styled-components"

export const ArticleDiv=styled.div`

width: 100%;
height: 100%;
overflow:hidden;
.commandGoogGoods{
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgb(255, 255, 255);
    height: 1.12rem;
    line-height: 1.12rem;
    display: flex;
    padding-left: .48rem;
    padding-right: 16px;
    z-index: 99999;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    .goHome{
    padding-bottom: .8rem;

        width: .48rem;
        height: .48rem;
        line-height: .56rem;
        color: rgb(247, 52, 81);
        // font-size: .48rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: column wrap;
      .text{
        font-size: 10px;
        color: rgb(79, 79, 79);
        line-height: 13px;
      }
    }
    .commandGood{
        height: 40px;
    line-height: 40px;
    background-color: rgb(247, 52, 81);
    font-size: 14px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    padding: 0px 23px;
    border-radius: 20px;
    }
}
#about_arti{
    height:.8rem
}
.article {
    .article-image {
        width: 7.5rem;
        height: auto;
    }

    .titleone {
        margin: .48rem .4rem;
        font-size: .44rem;
        line-height: .64rem;
        color: rgb(48, 48, 48);
        font-weight: bold;
    }

    .head {
        width: 100%;
        height: .68rem;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
    }

    .head>div {
        width: 50%;
        text-align: center;

    }

    .head>div>span {
        display: inline-block;
        font-size: 14px;
        color: rgb(1, 1, 1);
        text-align: center;
        padding: 6px 0px;
    }

    .head>div>.active {
        display: inline-block;
        font-size: 14px;

        text-align: center;
        padding: 6px 0px;
        color: rgb(247, 52, 81);
        font-weight: bold;
        border-bottom: 2px solid rgb(247, 52, 81);
    }



}


// 相关专题
.relevant-article {
    padding: 0 .24rem;
    background: rgb(244, 244, 244);

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
    }

    .border {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 6px;
        background: rgb(22, 179, 124);
    }


    .item-con {
        margin: 0px .24rem;

        .item {
            margin-bottom: .4rem;
            border-radius: .2rem;
            overflow: hidden;

            img {
                width: 100%;
                // border-top-right-radius: .2rem;
            }

            .detail {

                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: .54rem .32rem;
                background-color: #fff;

                .tag {
                    display: flex;
                    position: absolute;
                    top: -0.2rem;
                    white-space: nowrap;

                    div {
                        display: inline-block;
                        line-height: .4rem;
                        font-size: .24rem;
                        background-color: rgb(247, 247, 247);
                        color: rgb(69, 195, 151);
                        border-radius: .24rem;
                        margin: 0px .16rem .05rem 0px;
                        padding: 0px .2rem;
                    }
                }

                .title {
                    font-size: .4rem;
                    line-height: .56rem;
                    color: rgb(33, 33, 33);
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    font-weight: bold;
                    overflow: hidden;
                }
            }
        }

    }

}


`

export const FindHead = styled.div `
.head{
background-color:rgb(245,245,245);
width: 100%;
height: .68rem;
display: flex;
position: fixed;
z-index:10;
top: 0;
left: 0;
}
.head>div{
    width: 50%;
text-align: center;

}
.head>div>a{
    display: inline-block;
    font-size: 14px;
    color: rgb(1, 1, 1);
    text-align: center;
    padding: 6px 0px;
}
.head>div>.active{
    display: inline-block;
    font-size: 14px;
    
    text-align: center;
    padding: 6px 0px;
    color: rgb(247, 52, 81);
    font-weight: bold;
    border-bottom: 2px solid rgb(247, 52, 81);
}
 .con .article-item{
     
    display: flex;
    padding-bottom: .42rem;
    margin-top: .42rem;
    border-bottom: 1px solid rgb(240,240,240);
}

 .con .article-item .detail{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 0%;
}

 .con .article-item .detail  .title {
    font-size: .3rem;
    line-height: .48rem;
    color: rgb(33, 33, 33);
    text-overflow: ellipsis;
    font-weight: bold;
    padding-bottom: .1rem;
    overflow: hidden;
    /* width: 4.22rem; */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

 .con .article-item .detail >.tab>div{
    position: relative;
    display: inline-block;
    font-size: 12px;
    color: rgb(22, 179, 124);
    margin: 0px 5px 0px 0px;
    padding: 0px 8px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(22, 179, 124);
    border-image: initial;
    border-radius: 20px;
}
 .con .article-item>.img{
    height: 1.92rem;
    width: 2.4rem;
    margin-left: 12px;
    background-size: cover;
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;
    background-repeat: no-repeat;
}
 .con .article-item .col-detail{

}
 .con .article-item .col-detail .img-con{
     display: flex;
     width: 100%;
    justify-content: space-around;
    padding-bottom: .2rem;
    padding-top: .14rem;
}
 .con .article-item .col-detail .img-con img{
    height: 2.14rem;
   
}
`