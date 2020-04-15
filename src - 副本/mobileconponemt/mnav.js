import React from "react"
import {NavLink} from "react-router-dom"
export default function MNav(){
    return (
        <nav className="m-Nav">
            <div className="m-navlink">
                <NavLink activeClassName="active" exact={true} to="/index">
                    <span>推荐音乐</span>
                </NavLink> 
                <NavLink activeClassName="active" exact={true} to="/index/hot">
                    <span>热歌榜</span>
                </NavLink> 
                <NavLink activeClassName="active" exact={true} to="/index/search">
                    <span>搜索</span>
                </NavLink>
            </div>
        </nav>
    )
}

