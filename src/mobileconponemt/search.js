import React, { Fragment } from "react"

export default function Search(){
    return (
        <Fragment>
            <div className="mobile">
                <div className="m-search">
                    <input onChange={()=>{return}} placeholder="搜索歌曲，歌手，专辑"/>
                </div>
                <div className="m-hotsearch">
                    <p>热门搜索</p>
                    <div className="m-searchMusic">
                        <span>歌手当打之年</span>
                        <span>吹梦到西洲</span>
                        <span>从M到W的高速公路</span>
                        <span>我们的乐队</span>
                        <span>华晨宇新专辑</span>
                        <span>撒野</span>
                        <span>好像爱这个世界啊</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}