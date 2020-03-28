import styled from "styled-components"
export const HomeFixed =styled.div`
.notice {
    color: rgb(247, 52, 81);
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: .72rem;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin-bottom: .16rem;

    i {
        font-size: .32rem;
        display: inline-block;
        padding: 0 .2rem 0 .2rem;
        height: 100%;
        line-height: .72rem;
        // background-color: royalblue;
    }

    div {
        display: inline-block;
        white-space: nowrap;

        span {
            white-space: nowrap;
        }
    }

}

//签到抽奖查物流
.lucknav {
    width: 100%;
    display: flex;
    margin-bottom: .16rem;
    background-color: rgb(255, 255, 255);
    justify-content: space-around;
    padding: .32rem 0px;

    div {
        display: flex;
        width: .88rem;
        height: 1.34rem;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        img {
            width: 100%;
        }
    }
}

.beUser {
    img {
        width: 100%;
    }

    margin-bottom: .16rem;
}


`