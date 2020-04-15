import React, { useEffect } from "react"
import Play from "../component/play"
import qs from "qs"
import {useLocation} from "react-router-dom"
import {useMusicurl,getUrl} from "../store/action/index"
import { useSelector } from "react-redux"
import def from "../static/img/default.jpg"
export default function Mplay(props){
    console.log(props)
    let location = useLocation().search
    let {id} = qs.parse(location.slice(1))
    let state = useSelector((state)=>{
        return state.musicReducer
    })
    let imgurl = useSelector((state)=>{
        return state.ImgUlr.url
    })
    console.log(imgurl)
    let getData = useMusicurl()
    useEffect(()=>{
        // 获取音乐和图片
        getData(`/song/url?id=${id}`);
    },[id])
    let {data} = state;
    return (
       <div className="m-playWrap">
            <div className="m-p-header">
               <span className="m-p-logo"></span>
               <div className="m-p-arm"></div>
            </div>
            <div className="m-p-disc">
                <div className="m-ani-wrap">
                    <div className="m-ani-arl">
                        <img src={(imgurl.length===0)?def:imgurl}/>
                    </div>
                    <span></span>
                </div>
            </div>
       </div>
    )
}