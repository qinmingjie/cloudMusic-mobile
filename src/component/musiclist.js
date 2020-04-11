import React,{Fragment, useState, useEffect}from "react"
import musiclist from "../static/css/musiclist.module.css"
import {getUrl} from "../store/action/index"
export default function MusicList(props){
    let {data} = props
    // let [show,setShow] = useState(false)
    let [musicLocation,setMuc] = useState("");
    useEffect(()=>{
        // console.log(musicLocation)
    },[musicLocation])

    useEffect(()=>{
        let musiclist = document.querySelectorAll(".musictr")
        let audio = document.querySelector("audio")
        let play = document.querySelector(".playWrap")
        let cover = play.querySelector(".cover")
        if(musiclist.length!==0){
            [...musiclist].map((item,index)=>{
                item.onclick=function(){
                    let mucUrl = item.getAttribute("musicurl")
                    let picUrl = item.getAttribute("album-id")
                    getUrl(`/song/url?id=${mucUrl}`).then((res)=>{
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
            {data?(
                <div>
                     <div className={musiclist.title}>
                        <h3>
                            <span>歌曲列表</span>
                        </h3>
                        <span className={musiclist.numbers}>
                            <span>{data.trackCount}</span>首歌
                        </span>
                        <div className={musiclist.playnumber}>播放：<strong  className={musiclist.red}>{data.playCount}</strong> 次</div>
                        <div>
                        </div>
                    </div>
                <table className={musiclist.table}>
                    <thead>
                        <tr className={musiclist.thead}>
                            <th className={musiclist.head1}><div></div></th>
                            <th className={musiclist.head2}><div>歌曲标题</div></th>
                            <th className={musiclist.head3}><div>时长</div></th>
                            <th className={musiclist.head4}><div>歌手</div></th>
                            <th className={musiclist.head5}><div>专辑</div></th>
                        </tr>
                    </thead>
                    <tbody className={musiclist.tbody}>
                        {data.tracks.map((item,index)=>{
                            return(
                                <tr key={item.id} musicurl={item.id}  album-id={item.al.picUrl} hasshow="show" className={(((index+1)%2===0)?"":musiclist.gray)+" "+"musictr"} 
                                onMouseEnter={function(e){
                                    let parentnode = e.target;
                                    function Parent(){
                                        if(parentnode.parentElement.getAttribute("hasshow")){
                                           parentnode.parentElement.querySelector("#time").style.display = "none";
                                           parentnode.parentElement.querySelector("#timeIcons").style.display = "block"
                                        }else{
                                            parentnode = parentnode.parentElement
                                            Parent()
                                        }
                                    }
                                    Parent()
                                }}
                                onClick={(e)=>{
                                    {/**该点击时间中都是异步操作，音乐地址需要在点击时获取这是有的数据没有请求到就会出错所以使用Promise来同步异步操作 */}
                                    getUrl(`/song/url?id=${item.id}`).then((res)=>{
                                        function muc(Data){
                                            return new Promise((reslove,reject)=>{
                                                setMuc(Data)
                                            })
                                        }
                                        muc(res.data.data[0].url).then(()=>{
                                            console.log(musicLocation)
                                            if(musicLocation===null){
                                                alert("为获取到版权,努力中！")
                                            }
                                        })
                                    })
                                }}
                                onMouseLeave={function(e){
                                    let parentnode = e.target;
                                    function Parent(){
                                        if(parentnode.parentElement.getAttribute("hasshow")){
                                           parentnode.parentElement.querySelector("#time").style.display = "block";
                                           parentnode.parentElement.querySelector("#timeIcons").style.display = "none"
                                        }else{
                                            parentnode = parentnode.parentElement
                                            Parent()
                                        }
                                    }
                                    Parent()
                                }}
                                >
                                    <td className={musiclist.num}>
                                        <div>
                                            <span className={musiclist.icon1}>&nbsp;</span>
                                            <span  className={musiclist.num}>{index+1}</span>
                                        </div>
                                    </td>
                                    <td className={musiclist.muscName}>
                                        <div>
                                           {item.name}
                                        </div>
                                    </td>
                                    <td>
                                        <div className={musiclist.share}>
                                            <span className={musiclist.time}  id="time">04:44</span>
                                            <div className={musiclist.show} id="timeIcons">
                                                <span className={musiclist.span1}></span>
                                                <span className={musiclist.span2}></span>
                                                <span className={musiclist.span3}></span>
                                                <span className={musiclist.span4}></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className={musiclist.song}>
                                            {item.ar[0].name}
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className={musiclist.album}>
                                            {item.al.name}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                </table>
                </div>
               ):""}
        </Fragment>
    )
}