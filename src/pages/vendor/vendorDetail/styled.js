import styled from "styled-components"
export const VenderDetail =styled.div`
background-color:${props=>props.background};
color:#fff;
.vendor {
    color: #fff;
 
    .image {
       width: 100%;
       position: fixed;
       top: 0;
       z-index: 0;
 
       img {
          width: 100%;
 
       }
    }
 
    .vendorDetailcon {
       margin-top: 5.5rem;
       position: relative;
       z-index: 9;
    }
 
    .vendor-head {
       height: 1.12rem;
       position: relative;
 
       .vendorLogo {
          background-color: #fff;
          width: 1.44rem;
          height: 1.44rem;
          margin-left: .3rem;
          position: absolute;
          top: -.3rem;
 
          img {
 
             width: 100%;
          }
       }
 
       .vendorText {
 
          margin-left: 1.74rem;
          padding-left: .3rem;
 
          div:nth-of-type(1) {
 
             font-size: .38rem;
             padding-top: .16rem;
             line-height: 1;
 
          }
 
          div:nth-of-type(2) {
             font-size: .26rem;
             margin-top: .08rem;
             line-height: 1;
          }
       }
 
 
    }
 
    .detail-text {
       margin-top: .32rem;
       font-size: .3rem;
       line-height: .48rem;
       height: 1.02rem;
       position: relative;
       padding: 0px .2rem;
       overflow: hidden
    }
 
    .downUp {
       padding-bottom: .24rem;
       text-align: center;
       div {
          position: relative;
          width: 1.76rem;
          height: .56rem;
          display: inline-block;
          vertical-align: middle;
          margin: .04rem auto;
 
          a {
             position: absolute;
             text-align: center;
             left: -50%;
             right: -50%;
             top: -50%;
             bottom: -50%;
             line-height: 200%;
             transform: scale(0.5);
             font-size: .52rem;
             border-radius: .56rem;
             border-width: 1px;
             border-style: solid;
             border-color: rgb(255, 255, 255);
             border-image: initial;
             span{
                color: rgb(255, 255, 255);
             }
             i{
                 line-height: .56rem;
                 margin-left:.1rem;
                color: rgb(255, 255, 255);
 
             }
          }
       }
    }
 }
`