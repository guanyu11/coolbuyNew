import styled from "styled-components"

export const ArticleMainDiv=styled.div`
background-color:#fff;
width:100%;
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
img{
    width:100%;
}  
.playThing {
    display: flex;
    align-items: center;
    margin: .48rem .4rem;
    height: .8rem;

    img {
        height: 100%;
        width:.8rem;
        margin-right: .2rem;
        border-radius: 50%;
    }

    .name {
        font-size: .28rem;
        line-height: .4rem;
        color: rgb(33, 33, 33);
    }

    .description {}
}

.article-con {
    width:100%;
    padding: 0 .28rem;

    img {
        width: 100% !important;
        height: auto !important;
    }
}

`