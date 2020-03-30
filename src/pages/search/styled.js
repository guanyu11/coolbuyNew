import styled from "styled-components"

export const SearchContainer=styled.div`
    height: 100%;
    padding-top:.96rem;
/* 内容 */
.search--tags{
    width: 100%;
    background-color: #fff;
    font-size: .28rem;
    padding: .3rem;  
    margin-bottom: .24rem;
}
.title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: .32rem;
}
.content{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
.content li{
    padding: 0 .2rem;
    border: 1px solid #ddd;
    margin: 0 .2rem .2rem 0;
    line-height: .52rem;
    border-radius: .08rem;
}
.content .active{
    border-color:rgb(247, 52, 81);
    color:rgb(247, 52, 81);
}
`