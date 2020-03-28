import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {HomeFixed} from "./styled"
class Homefixed extends Component {
    render() {
        let { banner } = this.props
        return (
            <HomeFixed>
 
    {/* <!-- w物流信息提醒 --> */}
    <div>
    <div className="notice">
        <i className="iconfont">&#xe601;</i>
        <div>
        <span>&lt;温馨提示&gt;亲爱的顾客，为配合疫情防控工作，部分商品发货将延迟，预计2月10日后陆续恢复，湖北地区暂不发货。人工客服已恢复服务，具体详情可咨询客服。好物商店预祝您健康平安，购物愉快！&lt;温馨提示&gt;</span>
        <span>&lt;温馨提示&gt;亲爱的顾客，为配合疫情防控工作，部分商品发货将延迟，预计2月10日后陆续恢复，湖北地区暂不发货。人工客服已恢复服务，具体详情可咨询客服。好物商店预祝您健康平安，购物愉快！&lt;温馨提示&gt;</span>
        </div>
    </div>
    </div>

    {/* <!-- 签到抽奖查物流 --> */}
    <div className="lucknav">
    <Link  to="">

    <div>
        <img
        src="https://mcache.ifanr.cn/static/coolbuy/packages/wow/dist/b3ea9f9eed017dc5f36aae42a1a2a274.png"
        />
        <span>签到</span>
    </div></Link>
    <Link  to="">

    <div>
        <img
        src="https://mcache.ifanr.cn/static/coolbuy/packages/wow/dist/244daf1cb0ee29ffbe3cbc977d088d1c.gif"
        />
        <span>抽奖</span>
    </div></Link>
    <Link  to="">
    <div>
        <img
        src="https://mcache.ifanr.cn/static/coolbuy/packages/wow/dist/d505ca84973ff2993df03311acf6d582.png"
        />
        <span>查物流</span>
    </div></Link>

   <Link to="/vendor/">
    <div>
        <img
        src="https://mcache.ifanr.cn/static/coolbuy/packages/wow/dist/fac45cae8ebd397d01ddba3d216f0a74.png"
        />
        <span>品牌馆</span>
    </div></Link>
    <Link  to="">
    <div>
        <img src="https://media.ifanrusercontent.com/canton/icon/purchase.png" />
        <span>企业购</span>
    </div></Link>
    </div>

    {/* <!-- c成为好物家  向权益 --> */}
    <div className="beUser">
    <img
        src="
    https://media.ifanrusercontent.com/user_files/canton/00/26/00268e9b995c19c412238a86fcc8db02d7a9ef75-5a737ba7348e8986989d25fadeb57a6afbd026f6.gif!medium"
    />
    </div>
            </HomeFixed>
        )
    }

}
export default Homefixed
    
    