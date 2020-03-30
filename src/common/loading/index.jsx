import React, { Component } from 'react'
import {LoadingContainer} from "./styled"
export default class Loading extends Component {
    render() {
        return (
            <LoadingContainer className="loader">
                <div className="loader-inner">
                    <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                    </div>
                </div>
            </LoadingContainer>
        )
    }
}