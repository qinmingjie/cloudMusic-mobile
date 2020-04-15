import React, { useEffect } from "react"
import {useMnewmusic} from "../store/action/index"
import { useSelector, useDispatch } from "react-redux"
import {NavLink} from "react-router-dom"
import {getUrl} from "../store/action/index"
///personalized/newsong
export default function MMucislist(){
    let state = useSelector((state)=>{
        return state.MnewdataReducer
    })
    let getData = useMnewmusic()
    useEffect(()=>{
        getData("personalized/newsong")
    },[])
    let data = state.Newdata

    //播放控制
    useEffect(()=>{
        let musicList = document.querySelectorAll(".Mnotice-list")
        let audio = document.querySelector("audio")
        let play = document.querySelector(".playWrap")
        let cover = play.querySelector(".cover")
        if(musicList.length!==0){
            [...musicList].map((item,index)=>{
                item.onclick=function(){
                    let musicFather = item.querySelector(".Mnum-music")
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
        <ul className="Mnotice-mucList">
            {data.length===0?"":(data.result.map((item,index)=>{
                return(
                    <li className="Mnotice-list Mcanplay" id={""} key={item.id} style={{cursor:"pointer"}}>
                         <span  className="Mnum-music" mus-id={item.id} album-id={item.picUrl}>
                            <div>
                                <span className={index<3?"Mrednum":""} style={{display:"none"}}>{index+1}</span>
                                <p className="Mnewname">
                                    
                                    <span className="Mnewname1">{item.name}</span>
                                    <span className="Mnewname2">{(item.song.alias.length===0)?"":(item.song.alias[0])}</span>
                                </p>
                                <p className="Mnewalumb">
                                    <span className="Micon">&nbsp;</span>
                                    <span className="MalumbTxt">{item.song.artists.map((item,index)=>{return (index<=0?"":"/")+item.name})}-{item.song.album.name}</span>
                                </p>
                            </div>
                            <div className="Mnum-show"></div>
                        </span>
                    </li>
                )
            }))}
        </ul>
    )
}