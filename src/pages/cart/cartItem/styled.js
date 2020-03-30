import styled from "styled-components"
export const CartItemContainer =styled.div`
    
    width: 100%;
    padding: .4rem .32rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: .16rem;
    margin-bottom: .24rem;

&>i{
    font-size: .44rem;
    margin-right: .24rem;
    color: #ccc;
}
 .active{
    color:rgb(250,54,83);
}
.cart--item-img{
    width:1.8rem ;
    height: 1.8rem;
    background-color: rgba(0, 0, 0, 0.02);
    margin-right: .24rem;
    flex-shrink:0
}
.cart--item-img img{
    width: 100%;
    height: 100%;
}
.cart--item-desc{
    /* flex: 1; */
    width:3.8rem;
}
.cart--item-desc>p{
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
    width:100%;
    min-width:1.2rem;
    padding-right:.24rem;
    font-size: .24rem;
    color:#ccc;
    border: 1px solid rgba(149, 149, 149, 0.4);
    border-radius: .08rem;
    /* width: max-content; */
    height: .36rem;
    line-height: 1;
    display: flex;
    align-items: center;
    padding: .04rem;
    margin: .24rem 0;
    position:relative;
}
.cart--select p{
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.cart--select i{

    font-size: .2rem;
    background:#fff;
    position:absolute;
    right:0;
    top:.04rem;
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
`