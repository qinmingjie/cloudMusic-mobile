import React, { useState, useEffect } from "react"
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
            let auSrc = audio.getAttribute("src")
            console.log(auSrc)
            console.log(cssfire)
            let isplay = window.getComputedStyle(playicon,"style").display
            let isend = window.getComputedStyle(playend,"style").display
            if(isplay==="block"&&isend==="none"){//暂停播放和动画
                playicon.style.display="none"
                playend.style.display="block"
                let deg = window.getComputedStyle(cover,"style").transform
                cover.style.animationPlayState = "paused"
                if(auSrc!==""){
                    audio.pause()
                }
            }else{
                playicon.style.display="block"
                playend.style.display="none"
                cover.style.animationPlayState = "running"
                if(auSrc!==""){
                    audio.play()
                }
            }
        }
    })
    return(
        <div id="playwrap" 
            className="playWrap">
            <audio autoPlay="autoplay" src="" loop="loop">
				
            </audio>
            <div id="playimgcover">
                <div id="playcover" className="cover"></div>
            </div>
            <span id="playplay" className="play" style={{display:"none"}}></span>
            <span id="playend" className="end" style={{display:"block"}}></span>
        </div>
    )
}