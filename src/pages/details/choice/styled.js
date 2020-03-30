import styled from "styled-components"
export const ChoiceContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    display:${props=>props.choice?"block":"none"};
    .goods--choice{
    background-color: #fff;
    padding: 0 .3rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

.top{
    width: 100%;
    height: 1.88rem;
    padding-bottom:.24rem ;
    border-bottom: 1px solid #eee;
    display: flex;
}
.top img{
    width: 2.18rem;
    height: 2.18rem;
    position: relative;
    top:-.52rem;
}
.top .price-choice{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: .3rem;
}
.choice{
    height: 6.3rem;
}
.choice--title{
    margin: .3rem 0;
    font-size: .3rem;
}
.specs{
    width: 100%;
    display: flex;
    flex-wrap: wrap;

}
.specs .active{
    border-color:#c33;
}
.specs div{
    border: 1px solid #ddd;
    padding: .1rem .16rem;
    line-height: 1;
    margin-right: .2rem;
    margin-bottom: .2rem;
}

.count{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: .3rem;
}

.count--num{
    font-size: .28rem;
    color: #333;
    text-align: center;
    display: flex;
    line-height: .36rem;
}
.count--num span:nth-child(1){
    width: .48rem;
    height: .4rem;
    border: 1px solid rgba(151, 151, 151, 0.5);
    border-radius: .1rem 0 0 .1rem;
}
.count--num span:nth-child(2){
    width: .6rem;
    height: .4rem;
    border-top: 1px solid rgba(151, 151, 151, 0.5);
    border-bottom: 1px solid rgba(151, 151, 151, 0.5);
}
.count--num span:nth-child(3){
    width: .48rem;
    height: .4rem;
    border: 1px solid rgba(151, 151, 151, 0.5);
    border-radius: 0 .1rem .1rem 0;
}
.footer--btn{
    width: 100%;
    height: .88rem;
    background-color: rgb(247, 52, 81);
    color:#fff;
    border-radius: .44rem;
    font-size: .4rem;
    text-align: center;
    line-height: .88rem;
    margin-bottom:.3rem;
}
`