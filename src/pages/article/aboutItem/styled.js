import styled from "styled-components"

export const ArticleAboutDiv=styled.div`

.relevant-article {
    padding: 0 .24rem;
    background: rgb(244, 244, 244);

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


    .item-con {
        margin: 0px .24rem;

        .item {
            margin-bottom: .4rem;
            border-radius: .2rem;
            overflow: hidden;

            img {
                width: 100%;
                // border-top-right-radius: .2rem;
            }

            .detail {

                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: .54rem .32rem;
                background-color: #fff;

                .tag {
                    display: flex;
                    position: absolute;
                    top: -0.2rem;
                    white-space: nowrap;

                    div {
                        display: inline-block;
                        line-height: .4rem;
                        font-size: .24rem;
                        background-color: rgb(247, 247, 247);
                        color: rgb(69, 195, 151);
                        border-radius: .24rem;
                        margin: 0px .16rem .05rem 0px;
                        padding: 0px .2rem;
                    }
                }

                .title {
                    font-size: .4rem;
                    line-height: .56rem;
                    color: rgb(33, 33, 33);
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    font-weight: bold;
                    overflow: hidden;
                }
            }
        }

    }

`