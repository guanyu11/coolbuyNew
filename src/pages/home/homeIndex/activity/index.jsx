import React, { Component } from 'react'
import { ActivityDiv } from "./styled"
import BScrollCom from "@common/scroll"
class Activity extends Component {
    render() {
        let { activity } = this.props;
        return (
            <ActivityDiv>
                {this.props.children}
                <BScrollCom ref="scroll">
                    <div id="activety-con" >
                        {
                            // className="swiper-slide"
                            activity.map((item) => {
                                return <div key={item.id} >
                                    <img src={item.cover_image} />
                                    <div >{item.name}</div>
                                    <div >{item.english_name}</div>
                                </div>
                            })
                        }
                    </div> 
                   </BScrollCom>
            </ActivityDiv>
        )
    }
    componentDidMount(){
    //   console.log(this.refs.scroll,1123)  
    }
}
export default Activity