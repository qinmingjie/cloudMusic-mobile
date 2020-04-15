import React, { useEffect, Fragment } from "react"
import {useMhot} from "../store/action/index"
import { useSelector, useDispatch } from "react-redux"
import {getUrl} from "../store/action/index"
export default function MHotMusic(){
    let state = useSelector((state)=>{
        return state.MhotReducer
    })
    let getData = useMhot()
    useEffect(()=>{
        getData("/top/list?idx=1")
    },[])
    let data = state.data.playlist
    // let {description,tracks} = data
    // if(data.length)
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
                    console.log(musicId)
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
            <div className="mobile">
                <div className="m-hotmusic">
                    <div className="m-hoticon"></div>
                    <p className="m-hotdate"></p>
                </div>
                <ul className="Mnotice-mucList Mhotlist">
                    {data===undefined?"":(data.tracks.slice(0,20).map((item,index)=>{
                        return(
                            <li className="Mnotice-list Mcanplay" id={item.id} key={item.id} style={{cursor:"pointer"}}>
                                <span className="Mnum-music" mus-id={item.id} album-id={`${item.al.picUrl}`}>
                                    <div>
                                        <span className={"Mnumber" + " " +(index<3?"Mrednum":"")} style={{display:"block"}}>{index<9?"0"+(index+1):index+1}</span>
                                        <p className="Mnewname">
                                            <span className="Mnewname1">{item.name}</span>
                                        </p>
                                        <p className="Mnewalumb">
                                            <span className="Micon">&nbsp;</span>
                                            <span className="MalumbTxt">{item.ar.map((item,index)=>{return (index<=0?"":"/")+item.name})}-{item.name}</span>
                                        </p>
                                    </div>
                                    <div className="Mnum-show"></div>
                                </span>
                            </li>
                        )
                    }))}
                </ul>
            </div>
        </Fragment>
       
    )
}