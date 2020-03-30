import styled from "styled-components"

export const BarContainer =styled.div`
    height: 1.12rem;
    width:100%;
    display: flex;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom:0;
    .nav{
    display: flex;
    height: 100%;
}
.nav a{
    width:100%;
    height:100%;
    color:#333;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.nav div{
    width: .96rem;
    display: flex;
    position:relative;
}
.quantity{
    position:absolute;
    width:.34rem;
    height:.34rem;
    border-radius:50%;
    background:rgb(247,52,81);
    right:.15rem;
    top:.1rem;
    color:#fff;
    text-align:center;
    line-height:.38rem;
}
.nav .iconfont{
    font-size: .4rem;
}
.buy{
    display: flex;
    flex:1;
    margin: .2rem .2rem .2rem .08rem;
    color:#fff;
    font-size: .32rem;
    
}
.buy div{
    flex: 1;
    text-align: center;
    line-height: .72rem;
}
.buy div:nth-child(1){
    background-color: rgb(251, 94, 118);
    border-radius: .36rem 0 0 .36rem;
}
.buy div:nth-child(2){
    background: rgb(247, 52, 81);
    border-radius:0 .36rem  .36rem 0;
}
`