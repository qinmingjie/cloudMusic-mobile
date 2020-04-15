import React,{useEffect, Fragment,useState} from "react"
import {useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {usePlaydetail} from "../store/action/index"
import DetailTitle from "../component/detailtitle"
import {NavLink} from "react-router-dom"
import qs from "qs"
import {getUrl} from "../store/action/index"
export default function MSongList(){
    let [show,setShow] = useState(false)
    //获取地址栏中传过来的id以便于请求数据
    let {id} = qs.parse(useLocation().search.slice(1))

    //获取状态管理函数来管理歌单详情数据
    let state = useSelector((state)=>{
        return state.detailReducer
    })
    //获取状态操作函数来请求数据
    let getData = usePlaydetail()

    useEffect(()=>{
        getData(`/playlist/detail?id=${id}`)
    },[id])
    //结构出需要的数据
    // console.log(state)
    let data = state.data.playlist
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
    return (
        <div className="mobile detailInfo">
             {(data===undefined)?"":(<div className={"m-detailWrap"}> 
                        <div className={"m-detailCoverImg"}>
                            <div className="m-cover">
                                <img src={data.coverImgUrl} className="j-img"/>
                            </div>
                            <div className="m-burlImg">
                                <img src={data.coverImgUrl}/>
                            </div>
                            <div className="m-title">
                                <p className="m-txt">{data.name}</p>
                                <p className="m-icons">
                                    <span className="m-icon">
                                        <img src={data.creator.avatarUrl}/>
                                        <i className={(data.creator.gender===0)?"m-office":(data.creator.gender===1)?"m-other":"m-star"}></i>                                
                                    </span>
                                    {data.creator.nickname}
                                </p>
                            </div>
                        </div>
                        <div className={"m-detailTxt"}>
                            <div className="">
                                <div className={"m-detailTags"}>
                                    <span>标签：</span>
                                    {data.tags.map((item,index)=>{
                                        return <i key={index}>{item}</i>
                                    })}
                                </div>
                                <div id="album-desc-more" className="m-intr"
                                    onClick={()=>{
                                        setShow(!show)
                                    }}
                                >
                                    <p 
                                        className={"m-detailSclieTxt"}
                                        dangerouslySetInnerHTML={{
                                            __html:((data.description===null)?"":(data.description.replace(/\n/g,`</br>`).length)<140?("介绍："+(data.description.replace(/\n/g,`</br>`))):("介绍："+(data.description.replace(/\n/g,`</br>`).slice(0,140) + "...")))
                                        }}
                                        style={show?{display:"none"}:{display:"block"}}
                                    >
                                    </p> 
                                    <p 
                                        className={"m-detailSclieAll"}
                                        dangerouslySetInnerHTML={{
                                            __html:"介绍：" + ((data.description===null)?"":data.description.replace(/\n/g,`</br>`))
                                        }}
                                        style={!show?{display:"none"}:{display:"block"}}
                                    >
                                    </p>
                                    {((data.description===null)?"":(data.description.replace(/\n/g,`</br>`).length<140)?"":<div className={"m-detailSelect"}><span><i id={show?"m-detailShow":""}></i></span></div>)}
                                </div>
                            </div>
                        </div>
                        <div className="m-detailh">歌曲列表</div>
                        <ul className="Mnotice-mucList  Mhotlist">
                            {(data.tracks.map((item,index)=>{
                                return(
                                    <li className="Mnotice-list Mcanplay" id={""} key={item.id}  style={{cursor:"pointer"}}>
                                        <span  className="Mnum-music" mus-id={item.id} album-id={`${item.al.picUrl}`}>
                                            <div>
                                                <span className={"Mnumber" + " " +(index<3?"Mrednum":"")} style={{display:"block"}}>{index<9?"0"+(index+1):index+1}</span>
                                                <p className="Mnewname">
                                                    <span className="Mnewname1">{item.name}</span>
                                                    <span className="Mnewname2">{(item.ar.length===0)?"":(item.alia[0])}</span>
                                                </p>
                                                <p className="Mnewalumb">
                                                    <span className="Micon">&nbsp;</span>
                                                    <span className="MalumbTxt">{item.ar.map((item,index)=>{return (index<=0?"":"/")+item.name})}-{item.al.name}</span>
                                                </p>
                                            </div>
                                            <div className="Mnum-show"></div>
                                        </span>
                                    </li>
                                )
                            }))}
                        </ul>
                </div>)}
            
        </div>
    )
}