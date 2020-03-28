import React, { Component } from 'react'
import {
    homeCategoryApi,
} from "@api/api"
import BScrollCom from "@common/scroll"

import { Navdiv } from "./styled"
import { NavLink, withRouter } from "react-router-dom"
@withRouter
class downNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "up",  //down
            // category: []
        }
    }
    render() {
        let { status } = this.state;
        let { category } = this.props;
        if (status === "up") {
            return (<Navdiv>
                
               <div className="upnav" >
                  <BScrollCom ref="scroll" > 
                    <div className="navlinkCon" >
                        <NavLink to="/home/#" exact>W<i>0</i>W</NavLink>
                        {
                            category.map((item) => {
                                return <NavLink id={"nav"+item.id} key={item.id} to={"/home/" + item.id}>{item.name}</NavLink>
                            })
                        }
                        {/* <span style="width: 30px; visibility: hidden;"></span> */}
                    </div>
                 </BScrollCom> 
                    </div>   
                <div className="toggle iconfont" onClick={this.handleToggle.bind(this)}>&#xe61c;</div>
            </Navdiv>
            )
        } else {
            return (

                <Navdiv>
                    <div className="downNav" >
                        <div >全部分类</div>
                    </div>
                    <div className="toggle iconfont" onClick={this.handleToggle.bind(this)}>&#xe62a;</div>
                    <div className="overNav">
                        <div className="Navblock">
                            <NavLink to="/home/#" exact>W<i>0</i>W</NavLink>
                            {
                               category.map((item) => {
                                    return <NavLink  key={item.id} to={"/home/" + item.id}>{item.name}</NavLink>
                                })
                            }
                        </div>
                        <div className="shandom">

                        </div></div>
                </Navdiv>
            )
        }

    }
    componentDidMount() {

    }
  
    handleToggle() {
        if (this.state.status === "up") {
            this.setState({ status: "down" })
        } else {
            this.setState({ status: "up" })
        }
    }
   async  componentWillReceiveProps(next) {
        await  this.setState({ status: "up" })
        this.refs.scroll.handleGetCurrentPage("#nav"+next.match.params.id);


    }
}
export default downNav