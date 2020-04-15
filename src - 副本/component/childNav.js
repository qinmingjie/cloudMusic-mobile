import React from "react"
import {NavLink} from "react-router-dom"
import {childRouter} from "../router/index"
import qs from "qs"
export default function ChildNav(props){
    return (
        <div className="childNav">
            <div className="border">
                <nav className="navcenter navList">
                        {childRouter.map((item,index)=>{
                            return <NavLink
                                key={index}
                                to={item.path}
                                exact={item.exact}
                                activeClassName="active"
                        >
                            <em className={item.title==="歌单"?"nav2Icons":""}>{item.title}{item.title==="歌单"?(<span className="nav2Icon"></span>):""}</em>
                        </NavLink>
                        })}
                </nav>
            </div>
        </div>
    )
}