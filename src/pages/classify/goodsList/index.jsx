import React, { Component } from 'react'
import { GoodsListContainer } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../connect"
import {withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class GoodsList extends Component {
    render() {
        let { classifyData, activeItem } = this.props
        console.log(classifyData,activeItem)
        return (
            <GoodsListContainer>

                <div className="class-title">
                    {classifyData[activeItem] ? classifyData[activeItem].summary : ""}
                </div>
                <ul className='class-goods'>
                    {
                        classifyData[activeItem] ? classifyData[activeItem].shelves.map((item,index) => (
                            <li key={item.id} onClick={this.goToGoodsList.bind(this,item.id)}>
                                <div>
                                    <img src={item.cover_image} alt="" />
                                </div>
                                <p>{item.name}</p>
                            </li>
                        )) : ""
                    }

                </ul>

            </GoodsListContainer>
        )
    }
    goToGoodsList(id){
        let path=`/goodsList/?currentIndex=${id}&categoryId=${this.props.classifyData[this.props.activeItem].id}`
        console.log(path)

         this.props.history.push(path)
    }
}
export default GoodsList