import styled from "styled-components"

export const HeaderContainer=styled.div`
    width: 100%;
    height:.96rem;
    background-color: rgb(247, 52, 81);
    display: flex;
    align-items: center;
    padding: 0 .3rem;
    font-size: .28rem;
    position:fixed;
    left:0;
    top:0;
    z-index:10;
.search--input{
    width: 6.36rem;
    height: .64rem;
    background-color: #fff;
    border-radius: .32rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0 .3rem;
    position: relative;
}
.search--input input{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: .28rem;
}

input::-webkit-input-placeholder{
    color:#ddd;
}
.cancel{
    color:#fff;
    margin-left: .3rem;
    flex-shrink: 0;
}
`