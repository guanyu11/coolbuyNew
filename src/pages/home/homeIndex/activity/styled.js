import styled from "styled-components"
export const ActivityDiv =styled.div`
.relevant-article-title {
    margin: .24rem .24rem .4rem;
    position: relative;
    display: inline-block;

    .title {

        font-size: .4rem;
        line-height: .56rem;
        color: rgb(33, 33, 33);
        font-weight: bold;
    }
}

.border {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 6px;
    background: rgb(22, 179, 124);
}
width: 100%;
overflow:hidden; 

#activety-con{
    width:max-content;
    white-space: nowrap;
    
    div{
        display:inline-flex;;
        width:4.6rem;
        margin-left:.24rem;
        flex-direction: column;
        img{
            width:100%;
            margin-bottom:.24rem;
        }
        div:nth-of-type(1){
            font-size: .3rem;
            color: rgb(1, 1, 1);
            line-height: .42rem;
            margin-bottom:.1rem;
        }
        div:nth-of-type(2){
            font-size: .26remx;
            color: rgb(149, 149, 149);
            line-height:.36rem;
            margin-bottom: .32rem;
        }
    }
}
`