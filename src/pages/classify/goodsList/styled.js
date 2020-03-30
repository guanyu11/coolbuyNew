import styled from "styled-components"

export const GoodsListContainer=styled.div`
   flex:1;
    background: #fff;
.class-banner{
    width: 100%;
    height:2.4rem ;
    padding:.32rem .32rem 0 ;
}
.class-banner img{
    width: 5.2rem;  
}
.class-title{
    width: 100%;
    height: 1rem;
    padding: .32rem;
    font-size: 13px;
    line-height: 18.5px;
    color: rgb(112, 112, 112);
}
.class-goods{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
.class-goods li{
    width: 33%;
    height: 1.78rem;
    margin-bottom: .32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.class-goods li div{
    width:1.44rem ;
    height: 1.44rem;
    margin-bottom: .04rem;

}
.class-goods li img{
    width: 100%;
    height: 100%;

}
.class-goods p{
    width: 100%;
    height: 15px;
    line-height: 15px;
    text-align: center;
    font-size: 11px;
    color: rgb(112, 112, 112);

}
`