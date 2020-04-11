import React, { useState, useEffect } from "react"
import play from "../static/css/play.module.css"
export default function Play(){
    let [show,setShow] = useState(false)
    useEffect(()=>{
        let audio = document.querySelector("audio")
        let playwrap = document.querySelector(".playWrap")
        let cover = playwrap.querySelector(".cover")
        let playicon = playwrap.querySelector(".play")
        let playend = playwrap.querySelector(".end")
        // console.log(playicon)
        // console.log(playwrap)
        playwrap.onclick=function(){
            let cssfire = document.styleSheets
            console.log(cssfire)
            let isplay = window.getComputedStyle(playicon,"style").display
            let isend = window.getComputedStyle(playend,"style").display
            if(isplay==="block"&&isend==="none"){//暂停播放和动画
                playicon.style.display="none"
                playend.style.display="block"
                let deg = window.getComputedStyle(cover,"style").transform
                cover.style.animationPlayState = "paused"
                audio.pause()
            }else{
                playicon.style.display="block"
                playend.style.display="none"
                cover.style.animationPlayState = "running"
                audio.play()
            }
        }
    })
    return(
        <div id={play.wrap} 
        className="playWrap">
            <audio autoPlay="autoplay" src="">
				
            </audio>
            <div id={play.imgcover}>
                <div id={play.cover} className="cover"></div>
            </div>
            <span id={play.play} className="play" style={{display:"none"}}></span>
            <span id={play.end} className="end" style={{display:"block"}}></span>
        </div>
    )
}