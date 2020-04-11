import React, { Fragment,useState,useEffect} from "react"
import PlayCover from "./playcover"
import {NavLink} from "react-router-dom"
import {getUrl} from "../store/action/index"
function TopMusicList(props){
    let [show,setShow] = useState(false)
    // console.log(props.data)
    //获取音乐地址状态管理函数
    useEffect(()=>{
        let musicList = document.querySelectorAll(".notice-list")
        let audio = document.querySelector("audio")
        let play = document.querySelector(".playWrap")
        let cover = play.querySelector(".cover")
        if(musicList.length!==0){
            [...musicList].map((item,index)=>{
                item.onclick=function(){
                    let musicFather = item.querySelector(".num-music")
                    let musicId = musicFather.getAttribute("mus-id")
                    let picUrl = musicFather.getAttribute("album-id")
                    getUrl(`/song/url?id=${musicId}`).then((res)=>{
                        let music = res.data.data[0].url;
                        if(music!==null){
                            cover.style.backgroundImage = `url(${picUrl})`;
                            cover.classList.add("anima")
                            cover.style.animationPlayState = "running"
                            audio.setAttribute("src",music)
                            play.querySelector(".play").style.display="block"
                            play.querySelector(".end").style.display="none"
                        }else{
                            alert("抱歉，暂时无法播放")
                        }
                    })
                }
            })
        }
    })
    return(
        <Fragment>
            <ul className="notice-mucList">
                {props.data.length===0?"":(props.data.playlist.tracks.slice(0,10).map((item,index)=>{
                    return(
                        <li className="notice-list canplay" id={show?"show":""} key={item.id} 
                            onMouseEnter={function(e){
                                let parentnode = e.target;
                                function Parent(){
                                    if(parentnode.parentElement.getAttribute("class")==="notice-mucList"){
                                      parentnode.querySelector(".num-show").style.display="block"
                                    }else{
                                        parentnode = parentnode.parentElement
                                        Parent()
                                    }
                                }
                                Parent()
                            }}
                            onMouseLeave={function(e){
                                let parentnode = e.target;
                                function Parent(){
                                    if(parentnode.parentElement.getAttribute("class")==="notice-mucList"){
                                        parentnode.querySelector(".num-show").style.display="none"
                                    }else{
                                        parentnode = parentnode.parentElement
                                        Parent()
                                    }
                                }
                                Parent()
                            }}
                        >
                            <span className={index<3?"rednum":""}>{index+1}</span>
                            <NavLink  to="" className="num-music" mus-id={item.id} album-id={item.al.picUrl}>{item.name}</NavLink>
                            <div className="num-show">
                                <PlayCover/>
                            </div>
                        </li>
                    )
                }))}
            </ul>
            <div className="notice more">
                <NavLink to="">查看更多></NavLink>
            </div>
        </Fragment>
    )
}

export default TopMusicList;