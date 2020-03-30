import styled from "styled-components"

export const ClassifyContainer=styled.div`
     height: 100%;
     padding-top:1.12rem;
     .class-header{
    width: 100%;
    height: 1.12rem;
    background: #fff;
    padding: .24rem;
    border-bottom: 1px solid #ddd;
    position:fixed;
    left:0;
    top:0;

}
.class-header div{
    width: 100%;
    height: 100%;
    background: rgb(238, 239, 241);
    display: flex;
    align-items: center;
    padding: .24rem;
    color: rgb(149, 149, 149);
    font-size: .28rem;
}
.class-container{
    height: 100%;
    display: flex;
}
/* bar */
.class-bar{
    flex-shrink: 0;
    width: 1.68rem;
    height: 100%;
    background: #fff;
    border-right: 1px solid #ddd;
    padding-top: .32rem;
}
.class-bar li{
    font-size:.26rem;
    width: 100%;
    height: .36rem;
    margin-bottom: .48rem;
    text-align: center;
    border-left:.08rem solid #fff;
}
.class-bar .active{
    border-left:.08rem solid #c33;
    font-weight: 800;
}

`