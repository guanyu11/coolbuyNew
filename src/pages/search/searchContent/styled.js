import styled from "styled-components"

export const SearchContentCon = styled.div`
    position:fixed;
    left:0;
    top:0;
    background:#f5f5f5;
    width:100%;
    height:100%;
    overflow:auto;
    padding-top:.96rem;
    .total{
        width:100%;
        height:.88rem;
        padding:0 .24rem;
        line-height:.88rem;
        color:#ddd;
        background:#fff;
    }
    .content{
        width: 100%;
        height: 100%;
        padding:.2rem .24rem 0;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        
    }
    .half{
        width:49%;
    }
`