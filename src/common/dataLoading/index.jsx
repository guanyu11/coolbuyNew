import React, { Component } from 'react'
import {LoadingContainer} from "./styled"
export default class DataLoading extends Component {
    render() {
        return (
            <LoadingContainer>
                <div className="loader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                    </svg>
                </div>
            </LoadingContainer>
        )
    }
}
