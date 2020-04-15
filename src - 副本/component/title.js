import React from "react"
import {NavLink} from "react-router-dom"
function CommendTitle(){
    return(
        <div className="h-title">
            <div className="rec-txt">
                <a href="">热门推荐</a>
            </div>
            <div className="rec-sort">
                <NavLink to="/index/playlist?cat=华语&limit=100&page=1">华语</NavLink>
                <span>|</span>
                <NavLink to="/index/playlist?cat=流行&limit=100&page=1">流行</NavLink>
                <span>|</span>
                <NavLink to="/index/playlist?cat=摇滚&limit=100&page=1">摇滚</NavLink>
                <span>|</span>
                <NavLink to="/index/playlist?cat=民谣&limit=100&page=1">民谣</NavLink>
                <span>|</span>
                <NavLink to="/index/playlist?cat=电子&limit=100&page=1">电子</NavLink>
            </div>
            <span className="muc-more">
                <NavLink to="/index/playlist?cat=全部&limit=100&page=1" className="">更多</NavLink>
                <span className="bg-more"></span>
            </span>
        </div>
    )
}

function NewDisc(){
    return(
        <div className="h-title">
            <div className="rec-txt">
                <a href="">新碟上架</a>
            </div>
            <span className="muc-more">
                <a href="" className="">更多</a>
                <span className="bg-more"></span>
            </span>
        </div>
    )
}

function TopListTitle(){
    return(
        <div className="h-title">
            <div className="rec-txt">
                <a href="">榜单</a>
            </div>
            <span className="muc-more">
                <a href="" className="">更多</a>
                <span className="bg-more"></span>
            </span>
        </div>
    )
}
export {CommendTitle,NewDisc,TopListTitle};