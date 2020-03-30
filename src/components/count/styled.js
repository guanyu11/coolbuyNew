import styled from "styled-components"

export const CountContainer =styled.div`
    font-size: .28rem;
    color: #333;
    text-align: center;
    display: flex;
    line-height: .36rem;

 span:nth-child(1){
    width: .48rem;
    height: .4rem;
    border: 1px solid rgba(151, 151, 151, 0.5);
    border-radius: .1rem 0 0 .1rem;
}
 span:nth-child(2){
    width: .6rem;
    height: .4rem;
    border-top: 1px solid rgba(151, 151, 151, 0.5);
    border-bottom: 1px solid rgba(151, 151, 151, 0.5);
}
 span:nth-child(3){
    width: .48rem;
    height: .4rem;
    border: 1px solid rgba(151, 151, 151, 0.5);
    border-radius: 0 .1rem .1rem 0;
}
`