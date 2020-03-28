import styled from "styled-components"
export const MediumDiv =styled.div`
.medium {
    width: 100%;

    .slider {
        margin-top:.64rem;
        height: 3.2rem;
        width: 7.5rem;
        img{
            width:100%;
            height:100%
        }
    }

    .shelves {
        .shelves-con {
            display: flex;
         
            flex-wrap: wrap;
            padding: .4rem;
            width: 100%;

            .shelves-item {
                width: .96rem;
                height: 1.3rem;
                margin-right: .45rem;
                margin-bottom: .4rem;

                img {
                    width: 100%;
                }
                div{
                    text-align:center;
                }
            }
            .seeMore{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                .circle{
                    width: .64rem;
                    height: .64rem;
                    background-color: rgb(204, 204, 204);
                    border-radius: 50%; 
                    display: flex;
                    justify-content:center;
                    i{
                    line-height:.64rem;
                    color:#fff;
                    font-weight:900;
                    }
                }
            }

            .shelves-item:nth-of-type(5),
            .shelves-item:nth-of-type(10) {
                margin-right: 0;
            }

        }
    }

}

`