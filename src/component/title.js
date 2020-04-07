import React from "react"
import playlist from "../static/css/playlist.module.css"
function CommendTitle(){
    return(
        <div className="h-title">
            <div className="rec-txt">
                <a href="">热门推荐</a>
            </div>
            <div className="rec-sort">
                <a href="">华语</a>
                <span>|</span>
                <a href="">流行</a>
                <span>|</span>
                <a href="">摇滚</a>
                <span>|</span>
                <a href="">民谣</a>
                <span>|</span>
                <a href="">电子</a>
            </div>
            <span className="muc-more">
                <a href="" className="">更多</a>
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