import styled from "styled-components"
export const Navdiv =styled.div`
width: 100%;

height: .64rem;
position:fixed;
top:0;
z-index:99999;

background: rgb(247, 52, 81); 
.toggle{
    width:.64rem;
    text-align:center;
    line-height: .64rem;
    height: .64rem;
    position:absolute;
    right:0;
    top:0;
    background: rgba(247, 52, 81,1); 
    color:#fff;
}
a{
    color:#fff;
}
.upnav{
    width:100%;
    overflow-x: hidden;
    padding-right:.7rem;
    color:#fff;
    .navlinkCon{
    display: block;
    width: max-content;
    height: .64rem;
    line-height: .64rem;
    background: rgba(247, 52, 81,1); 
   
    white-space: nowrap;
    padding-left: .24rem;
    a{
        display:inline-block;
        height:100%;
        margin-right: .36rem;
        line-height: .64rem;
    }
    .active{
        border-bottom:2px solid #fff;
    }
    
}
}
.downNav{
    height: .64rem;
    line-height: .64rem;  
    color:#fff;
    padding-left: .24rem;


}
.Navblock{
    // position:absolute;
    // z-index:99999;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: .4rem .7rem 0px .24rem;
    background: rgb(255, 255, 255);
    a{
    position:absolute;
    z-index:99999;
    width: 1.56rem;
    height: .56rem;
    color: rgb(79, 79, 79);
    font-size: .28rem;
    line-height: .56rem;
    
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    flex-shrink: 0;
    margin: 0px .4rem .4rem 0px;
    overflow: hidden;
    border-radius: .08rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    }
    .active{
        color: rgb(247, 52, 81);
        border-color: rgb(247, 52, 81); 
    }
    // .shandom{
    //     width:7rem;
        
    // }
   

} 
.overNav{
        position:absolute;
        height:11.14rem;
        background:rgba(0, 0, 0,.3);
    }
`