import React, { useEffect} from "react"
import {useSelector} from "react-redux"
import {useRecommend} from "../store/action/index"
import {useLocation,NavLink} from "react-router-dom"
function Recommend(props){
    let loca = useLocation().pathname
    let {url,cat,page,limit} = props
    let state = useSelector((state)=>{
        return state.recommendReducer    //获取状态管理函数中的状态数据
    })
    let {data} = state
    let getData = useRecommend();  //获取操作数据的函数
    useEffect(()=>{
        getData(`${url}?cat=${cat}&limit=${limit}`)   //在组件跟新是使用操作函数来获取数据然后返回到状态管理函数中
    },[cat,page])
    return(
        <div>
            <ul className="rec-mucWrap">
                {data.length!==undefined?"":(data.result?data.result.slice(0,8).map((item,index)=>{
                    return (
                        <li key={item.name}>
                            <div className="rec-muc">
                                <img src={item.picUrl} alt=""/>
                                <NavLink to={`/playlist/detail?id=${item.id}`} className="cover"></NavLink>
                                <div className="rec-icon">
                                    <span className="set-icon"></span>
                                    <span className="icon-txt">{String(item.playCount).length>4?(String(item.playCount).length>8?String(item.playCount).slice(0,-8)+"亿":String(item.playCount).slice(0,-4)+"万"):item.playCount}</span>
                                    <NavLink to={`/playlist/detail?id=${item.id}`} className="p-icon"></NavLink>
                                </div>
                                <p className="rec-mucTxt">
                                    <NavLink to={`/playlist/detail?id=${item.id}`}>
                                        {item.name}
                                    </NavLink>
                                </p>
                            </div>
                        </li>
                    )
                }):data.playlists.slice((page)*20,(page)*20+20).map((item,index)=>{
                    return(
                        <li key={index} className="playlists">
                            <div className="rec-muc">
                                <img src={item.coverImgUrl} alt=""/>
                                <NavLink to={`/playlist/detail?id=${item.id}`} className="cover"></NavLink>
                                <div className="rec-icon">
                                    <span className="set-icon"></span>
                                    <span className="icon-txt">{String(item.playCount).length>4?(String(item.playCount).length>8?String(item.playCount).slice(0,-8)+"亿":String(item.playCount).slice(0,-4)+"万"):item.playCount}</span>
                                    <NavLink to={`/playlist/detail?id=${item.id}`} className="p-icon"></NavLink>
                                </div>
                                <p className="rec-mucTxt">
                                    <NavLink to={`/playlist/detail?id=${item.id}`}>
                                        {page}{item.name}
                                    </NavLink>
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