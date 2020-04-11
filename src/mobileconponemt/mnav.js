import React from "react"
import {NavLink} from "react-router-dom"
export default function MNav(){
    return (
        <nav className="m-Nav">
            <div className="m-navlink">
                <NavLink activeClassName="active" to="/index">
                    <span>推荐音乐</span>
                </NavLink> 
                <NavLink activeClassName="active" to="/my">
                    <span>热歌榜</span>
                </NavLink> 
                <NavLink activeClassName="active" to="/friend">
                    <span>搜索</span>
                </NavLink>
            </div>
        </nav>
    )
}

