import styled from "styled-components"

export const BarContainer=styled.div`
    
    width: 100%;
    height: .96rem;
    background: #fff;
    position: fixed;
    left:0;
    bottom:.84rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .32rem;
    color: #212121;
.footer--select-all{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#212121;
    font-size: .32rem;
    height: 100%;
}
.footer--select-all i {
    font-size: .44rem;
    margin-right: .2rem;
    color:#ccc;
}
.footer--select-all .active{
    color:rgb(250,54,83);
}
.footer--pay{
    display: flex;
    height: 100%;
    align-items: center;
}
.footer--sum{
    display: flex;
    font-size:.32rem;
    height: 100%;
    align-items: center;
    margin-right: .3rem;
}
.footer--sum span:nth-child(2){
    font-size: .24rem;
    color: rgb(250, 54, 83);
    font-weight: 600;
}
.footer--sum span:nth-child(3){
    font-size: .36rem;
    font-weight: 600;
    color: rgb(250, 54, 83); 
}
.footer--pay-btn{
    padding: .2rem .52rem;
    background: rgb(250, 54, 83);
    font-size:.32rem ;
    font-weight: 600;
    line-height: 1;
    color:#fff;
    border-radius: .4rem;
}
.footer--del{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content:center;
}
.btn{
    border:1px solid #eee;
    line-height:1;
    padding:.2rem;
    border-radius:.34rem;
    width:1.4rem;
    text-align:center;
    margin-left:.3rem;
    color:#999;
}
`