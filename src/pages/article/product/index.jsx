
import React, { Component } from "react"
import { ProductDiv } from "./style"
import { NavLink } from "react-router-dom";

class Product extends Component {
    render() {
        let {product}=this.props;
        console.log(product,"product")
        console.log(product.length,"product")
        return (
            <ProductDiv >
                <div className="goodCon">

                    {product.map((item)=>{
                      return  <NavLink  to={"/detail/"+item}>
                          <div className="gooditem" >
                        <img src="https://media.ifanrusercontent.com/user_files/canton/79/fc/79fcb3e94bf5e46f9cec5c130d11f7c6b1e05aa2-0d083ac01d8ff04fc27ebce1315775805f75e4d1.png!large" />
                        <div>
                            <div className="title">极简外观设计精选8种香调的便携香水套装</div>
                            <div className="description">神秘元素颠覆平庸，国际大牌香调，持久留香，独特又令人愉悦。</div>
                            <div className="price" >
                                <div >
                                    <span >￥</span>
                                    <span> 99</span>
                                </div>
                                <div className="info-bottom-btn">去购买
                                        <i className="wow-icon icon-arrow-right"></i>
                                </div>
                            </div>

                        </div>
                    </div>  
                        </NavLink>
                    })

                    }
                    
                    <div className="nomore"> 「兄 dei」到底啦，去
                        <span className="red"> 发现更多好物吧</span>
                        <span className="wow-icon icon-arrow-right"></span>
                    </div>
                </div >
            </ProductDiv >
        )
    }
}

export default Product