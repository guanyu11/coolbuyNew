import React, { Component, Fragment } from 'react'
import { LayoutContainer } from "./styled"
import Tabbar from "@common/tabbar"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <LayoutContainer>
                    {this.props.children}
                </LayoutContainer>
                <Tabbar/>
            </Fragment>
        )
    }
}