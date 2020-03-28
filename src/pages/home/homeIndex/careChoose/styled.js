import styled from "styled-components"
export const CarechooseDiv =styled.div`
.careChoose {
    background-color: #fff;

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

    .con {
        padding: 0 .32rem .42rem;

        .coverImg {
            border-radius: .2rem;
            height: 3.2rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            background-color: rgba(0, 0, 0, .8);
        }

        img:nth-of-type(1) {
            width: 100%;
            // height: 3.2rem;
        }

        .article-item {
            display: flex;
            padding-bottom: .42rem;
            margin-top: .42rem;
            border-bottom: 1px solid rgb(240, 240, 240);
        }

        .detail {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1 1 0%;

            .homePlayThing {
                margin-top: .16rem;
                display: flex;
                height: .34rem;
                padding: 0;

                img {
                    height: 100%;
                    border-radius: 50%;
                    width: .34rem;
                    margin-right: .16rem;
                }
            }
        }

        .detail .title {
            font-size: .3rem;
            line-height: .48rem;
            color: rgb(33, 33, 33);
            text-overflow: ellipsis;
            font-weight: bold;
            padding-bottom: .1rem;
            overflow: hidden;
            /* width: 4.22rem; */
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .article-item .detail >.tab{
            display:flex;
            flex-wrap:nowrap;
        }
        
        .article-item .detail>.tab>div {
            position: relative;
            display: inline-block;
            white-space: nowrap;
            font-size: 12px;
            color: rgb(22, 179, 124);
            margin: 0px 5px 0px 0px;
            padding: 0px 8px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(22, 179, 124);
            border-image: initial;
            border-radius: 20px;
        }

        .article-item>img {
            height: 1.92rem;
            width: 2.4rem;
            margin-left: 12px;
            background-size: cover;
            flex-shrink: 0;
            border-radius: .1rem;
            overflow: hidden;
            background-repeat: no-repeat;
        }


    }
}
`