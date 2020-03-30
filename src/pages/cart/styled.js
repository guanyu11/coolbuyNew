import styled from "styled-components"

export const CartContainer =styled.div`
    width: 100%;
    height: 100%;
    overflow:auto;
    background: #eee;
    .hide{
        display:none;
    }
    .cart--header{
    width: 100%;
    height:.8rem ;
    background: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    overflow:auto;
}
.cart--header{
    background:#fff;
}
.cart--header>div{
    padding:.03rem .16rem;
    border:1px solid rgba(204, 204, 204, 0.5);
    color:#ccc;
    border-radius: .56rem;
    font-size: .28rem;
}
/* cart--list */
/* .cart--list{
    width: 100%;
    height:100%;
    padding:1rem .24rem 1.8rem ;
    background:#eee;
} */

/* .cart--item{
    width: 100%;
    padding: .4rem .32rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: .16rem;
    margin-bottom: .24rem;
}
.cart--item>i{
    font-size: .44rem;
    margin-right: .24rem;
    color: #ccc;
}
.cart--item .active{
    color:rgb(250,54,83);
}
.cart--item-img{
    width:1.8rem ;
    height: 1.8rem;
    background-color: rgba(0, 0, 0, 0.02);
    margin-right: .24rem;
}
.cart--item-img img{
    width: 100%;
    height: 100%;
}
.cart--item-desc{
    flex: 1;
}
.cart--item-desc p{
    font-size: .28rem;
    color:#111;
    line-height: .4rem;
    min-height: .8rem;
    letter-spacing: .0078rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.cart--select{
    font-size: .24rem;
    color:#ccc;
    border: 1px solid rgba(149, 149, 149, 0.4);
    border-radius: .08rem;
    width: max-content;
    height: .36rem;
    line-height: 1;
    display: flex;
    align-items: center;
    padding: .04rem;
    margin: .24rem 0;
}
.cart--select i{
    font-size: .2rem;
}
.cart--bottom{
    flex:1;
    display: flex;
    justify-content: space-between;
}
.cart--price{
    color: #c33;
    font-size: .26rem;
    font-weight: 600;

}
.cart--count{
    font-size: .28rem;
    color: #333;
    text-align: center;
    display: flex;
    line-height: .36rem;
}
.cart--count span:nth-child(1){
    width: .48rem;
    height: .4rem;
    border: 1px solid rgba(151, 151, 151, 0.5);
    border-radius: .1rem 0 0 .1rem;
}
.cart--count span:nth-child(2){
    width: .6rem;
    height: .4rem;
    border-top: 1px solid rgba(151, 151, 151, 0.5);
    border-bottom: 1px solid rgba(151, 151, 151, 0.5);
}
.cart--count span:nth-child(3){
    width: .48rem;
    height: .4rem;
    border: 1px solid rgba(151, 151, 151, 0.5);
    border-radius: 0 .1rem .1rem 0;
} */

/* footer */
/* .footer{
    width: 100%;
    height: .96rem;
    background: #fff;
    position: fixed;
    left:0;
    bottom:.84rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .32rem;
    color: #212121;
}
.footer--select-all{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#212121;
    font-size: .32rem;
    height: 100%;
}
.footer--select-all i {
    font-size: .44rem;
    margin-right: .2rem;
    color:#ccc;
}
.footer--select-all .active{
    color:rgb(250,54,83);
}
.footer--pay{
    display: flex;
    height: 100%;
    align-items: center;
}
.footer--sum{
    display: flex;
    font-size:.32rem;
    height: 100%;
    align-items: center;
    margin-right: .3rem;
}
.footer--sum span:nth-child(2){
    font-size: .24rem;
    color: rgb(250, 54, 83);
    font-weight: 600;
}
.footer--sum span:nth-child(3){
    font-size: .36rem;
    font-weight: 600;
    color: rgb(250, 54, 83); 
}
.footer--pay-btn{
    padding: .2rem .52rem;
    background: rgb(250, 54, 83);
    font-size:.32rem ;
    font-weight: 600;
    line-height: 1;
    color:#fff;
    border-radius: .4rem;
} */
`