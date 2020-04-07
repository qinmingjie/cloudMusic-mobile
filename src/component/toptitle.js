import React from "react"
import TopMusicList from "./topmusiclist"
function Toptitle(props){
    return(
        <div className={props.name?"notice-top-wrap"+" "+props.name:"notice-top-wrap"}>
            <div className="notice-top">
                <div className="notice-log Top-logo">
                    <img src={props.data.length===0?"":props.data.playlist.coverImgUrl} alt=""/>
                    <a href="" className="notice-cover"></a>
                </div>
                <div className="notice-tit">
                        <a href=""><h3>{props.data.length===0?"":props.data.playlist.name}</h3></a>
                        <div className="notice-tit-cover">
                            <a href="" className="notice-play"></a>
                            <a href="" className="notice-add"></a>
                        </div>
                </div>
            </div>
            <TopMusicList data={props.data}/>
        </div>
    )
}

export default Toptitle