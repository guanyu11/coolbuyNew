import React, { Component } from 'react'
import { ChoiceContainer } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "../connect"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Count from "@components/count"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Choice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: 0,
            count: 1,
            coverImg: "",
            price:"",
            choiceSpecs: "请选择规格",
            addCart: "请选择规格",
            id:""
        }
    }

    //{"功能":["qing","ziyang"],"款式":["xi","er","san"]}
    // {
    //     spec_str:"功能:清爽型,款式:洗发水+护发素",
    //     sku_image:"sdf",
    //     discount_price:256,
    //     inventory:0//卖光了,
    // id:  135855    
    // } 

    render() {
        let { detailsData, specsObj, priceRange } = this.props
        let { choiceSpecs, target, addCart, coverImg ,price} = this.state
        return (
            <ChoiceContainer choice={this.props.choice} onClick={this.props.showMask}>
                <div className="goods--choice" onClick={this.stop.bind(this)}>
                    <div className="top">
                        <img src={coverImg ? coverImg : detailsData.cover_image} alt="" />
                        <div className="price-choice">
                            <div>
                                <span>￥</span>
                                {
                                    price?<span>{price}</span>:
                                        <span>{priceRange[0]}~{priceRange[1]}</span>
                                }
                            </div>
                            <div>{choiceSpecs}</div>
                        </div>
                    </div>

                    <div className="choice">
                        {
                            Object.keys(specsObj).map((item,index) => (
                                <div key={index}>
                                    <div className="choice--title">{item}</div>
                                    <div className="specs">
                                        {
                                            specsObj[item]?specsObj[item].map((child) => (
                                                <div className="" onClick={this.chooseSpecs.bind(this,child,item)}
                                                className={target?target[item].includes(child)?"active":"":""}
                                                key={child}
                                                >
                                                    {child}
                                                </div>
                                            )):""
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        <div className="count">
                            <div>购买数量</div>
                            <Count count={this.state.count} changeCount={this.changeCount.bind(this)}></Count>
                        </div>
                    </div>
                    <div className="footer--btn" onClick={this.addCart.bind(this)}>
                        {addCart}
                    </div>

                </div>
            </ChoiceContainer>
        )
    }
    componentDidMount(){
        this.props.getCart()
    }
    stop(e) {
        e.stopPropagation();
    }
    // 选择标签时改变数据
    chooseSpecs(tag,item) {
        let flag=false
        if(!this.state.target){
            this.obj={}
            for(let i in this.props.specsObj){
                this.obj[i]=[]
            }
            this.obj[item].push(tag);
            console.log(this.obj)
            if(Object.keys(this.obj).length===1){
                flag=true;
            }else{
                this.setState({
                    target:this.obj
                })
            }  
        }else{
            this.obj[item]=[tag] 
            flag=Object.keys(this.obj).every((item)=>{
                return this.obj[item].length!==0
            })
            if(!flag){
                this.setState({
                    target:this.object
                })
            }
        }
        if(flag){
            let str=""
            for(let i in this.obj){
                str+=i+":"+this.obj[i][0]+","
            }
            let goodsDetails=this.findGoods(str.slice(0,-1))
            this.setState({
                target:this.obj,
                coverImg:goodsDetails.sku_image,
                price:goodsDetails.discount_price,
                choiceSpecs: goodsDetails.spec_str,
                addCart: goodsDetails.inventory?"加入购物车":"卖完了",
                id:goodsDetails.id
            })
        }
        
    }
    // 寻找选中的商品对应的信息
    findGoods(str){
        for(let i=0;i<this.props.choiceList.length;i++){
            if(this.props.choiceList[i].spec_str===str){
                return this.props.choiceList[i]
            }
        }
    }
    addCart() {
        if (localStorage.token) {
            if (this.state.addCart === "加入购物车") {
                this.props.showMask()
                // 发送数据添加到购物车
                let data=this.firstAdd()
                console.log(data)
                this.props.addGoods(data)
            }
        } else {
            this.props.history.push("/login")
        }
    }
    // 判断是不是首次添加商品
    firstAdd(){
        let goodsList=this.props.cartData.group;
        for(let i=0;i<goodsList.length;i++){
            if(goodsList[i].item.product_sku_id===this.state.id){
                return {data:{product_sku_id:this.state.id,quantity:goodsList[i].item.quantity+this.state.count},type:"combain"} 
                
            }
        }
        return{data:{product_sku_id:this.state.id,quantity:this.state.count},type:"first"} 
    }
    changeCount(num) {
        this.setState({
            count: num
        })
    }

}
export default Choice