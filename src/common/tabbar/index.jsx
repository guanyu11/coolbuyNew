import React, { Component } from 'react'
import { TabbarContainer } from "./styled"
import { NavLink } from 'react-router-dom';
export default class Tabbar extends Component {
    constructor() {
        super();
        this.state = {
            tabbarList: [
                {
                    text: "首页",
                    icon: "\ue60b",
                    path: "/home"
                },
                {
                    text: "分类",
                    icon: "\ue609",
                    path: "/classify"
                },
                {
                    text: "发现",
                    icon: "\ue64d",
                    path: "/find"
                },
                {
                    text: "购物车",
                    icon: "\ue62d",
                    path: "/cart"
                }, {
                    text: "我的",
                    icon: "\ue617",
                    path: "/mine"
                }
            ]
        }
    }
    render() {
        let { tabbarList } = this.state
        return (
            <TabbarContainer>
                <ul>
                    {
                        tabbarList.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.text}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </TabbarContainer>
        )
    }
}
