import React, { useEffect } from "react"
import {useSelector} from "react-redux"
import {useRecommend} from "../store/action/index"
import {useLocation} from "react-router-dom"
function Recommend(props){
    let loca = useLocation().pathname
    let {url,cat,limit} = props
    let state = useSelector((state)=>{
        return state.recommendReducer    //获取状态管理函数中的状态数据
    })
    let getData = useRecommend();  //获取操作数据的函数

    useEffect(()=>{
        getData(`${url}?limit=${limit}&cat=${cat}`)   //在组件跟新是使用操作函数来获取数据然后返回到状态管理函数中
    },[loca])
    let {data} = state
    return(
        <div>
            <ul className="rec-mucWrap">
                {data.length!==undefined?"":(data.result?data.result.map((item,index)=>{
                    return (
                        <li key={item.id}>
                            <div className="rec-muc">
                                <img src={item.picUrl} alt=""/>
                                <a href="" className="cover"></a>
                                <div className="rec-icon">
                                    <span className="set-icon"></span>
                                    <span className="icon-txt">{String(item.playCount).length>4?(String(item.playCount).length>8?String(item.playCount).slice(0,-8)+"亿":String(item.playCount).slice(0,-4)+"万"):item.playCount}</span>
                                    <a href="" className="p-icon"></a>
                                </div>
                                <p className="rec-mucTxt">
                                    <a href="">
                                        {item.name}
                                    </a>
                                </p>
                            </div>
                        </li>
                    )
                }):data.playlists.map((item,index)=>{
                    return(
                        <li key={item.id} className="playlists">
                            <div className="rec-muc">
                                <img src={item.coverImgUrl} alt=""/>
                                <a href="" className="cover"></a>
                                <div className="rec-icon">
                                    <span className="set-icon"></span>
                                    <span className="icon-txt">{String(item.playCount).length>4?(String(item.playCount).length>8?String(item.playCount).slice(0,-8)+"亿":String(item.playCount).slice(0,-4)+"万"):item.playCount}</span>
                                    <a href="" className="p-icon"></a>
                                </div>
                                <p className="rec-mucTxt">
                                    <a href="">
                                        {item.name}
                                    </a>
                                </p>
                            </div>
                        </li>
                    )
                }))}
            </ul>
        </div>
    )
}

export default Recommend;