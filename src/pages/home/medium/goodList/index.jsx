import React, { Component } from 'react'
import { homeMediumListApi } from "@api/api"
import { NavLink } from "react-router-dom"
import { GoodCon } from "./styled"
import { withRouter } from "react-router-dom"
@withRouter
class goodList extends Component {
    constructor() {
        super()
        this.state = {
            goodlist: []
        }
    }
    render() {

        // console.log(this.props, "goodList")
        let { shelves } = this.props
        let { goodList } = this.state
        // console.log(goodList, "goodlist888")
        if (goodList) {
            return (
                <GoodCon>
                    {
                        shelves.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <div className="relevant-article-title">
                                        <span className="title">{goodList[item.id]?item.name:""}</span>
                                        <div className="border"></div>
                                    </div>
                                    <div className="product-list">
                                        {
                                            // goodlist
                                            goodList[item.id] ? goodList[item.id].map((good) => {
                                                return (
                                                    <NavLink
                                                        to={'/detail/' + good.id}
                                                        key={good.id}
                                                        className={index % 2 == 1 ? 'product-item no-margin' : 'product-item'}
                                                    >
                                                        <img src={good.cover_image} />
                                                        <div className="product-info" >
                                                            <p className="title">{good.title ? good.title : ''}</p>
                                                            <p className="summary">{good.summary ? good.summary : ''}</p>
                                                            <p className="price"> <span>{good.highest_price}</span> 
                                                            <i>{good.highest_original_price>good.highest_price?good.highest_original_price:""}
                                                                <div></div>
                                                            </i>
                                                             </p>
                                                        </div>
                                                    </NavLink>
                                                )
                                            }) : ""
                                        }</div>

                                </div>
                            )
                        })
                    }
                </GoodCon>
            )
        } else {
            return <div></div>
        }

    }

    componentDidMount() {
        // console.log(this.props.idArr, 456365)
        this.handleGoodlist.call(this)
    }
    async handleGoodlist() {
        let idarr = this.props.idArr;
        let query = {
            "img_size": "medium",
            "order_by": "-priority",
            "items_per_shelf": 4,
            "id__in": idarr
        }
        let data = await homeMediumListApi(query)
        // goodList.forEach((item,index)=>{
        //     goodList[index].name=this.props.shelves.name
        // })
        // console.log(data, "9999")
        this.setState({
            goodList: data
        })
    }
   async componentWillReceiveProps(next) {
        // console.log(next.idArr, "9999")
        let idarr = next.idArr;
        let query = {
            "img_size": "medium",
            "order_by": "-priority",
            "items_per_shelf": 4,
            "id__in": idarr
        }
        let data = await homeMediumListApi(query)
        // goodList.forEach((item,index)=>{
        //     goodList[index].name=this.props.shelves.name
        // })
        // console.log(data, "9999")
        this.setState({
            goodList: data
        })

    }
}
export default goodList