import React, { Fragment } from "react"
function TopMusicList(props){
    // console.log(props.data)
    return(
        <Fragment>
            <ul className="notice-mucList">
                {props.data.length===0?"":(props.data.playlist.tracks.slice(0,10).map((item,index)=>{
                    return(
                        <li className="notice-list" key={item.id}>
                            <span className={index<3?"rednum":""}>{index+1}</span>
                                <a href="" className="num-music">{item.name}</a>
                            <div className="num-show"></div>
                        </li>
                    )
                }))}
            </ul>
            <div className="notice more">
                <a href="">查看更多></a>
            </div>
        </Fragment>
    )
}

export default TopMusicList;