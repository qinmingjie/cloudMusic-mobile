import React, { useEffect} from "react"
import {useSelector} from "react-redux"
import {useMRecommend} from "../store/action/index"
import {useLocation,NavLink} from "react-router-dom"
function MRecommend(props){
    let loca = useLocation().pathname
    let {url,cat,page,limit} = props
    let state = useSelector((state)=>{
        return state.MrecommendReducer   //获取状态管理函数中的状态数据
    })
    let {data} = state
    let getData = useMRecommend();  //获取操作数据的函数
    useEffect(()=>{
        getData(`${url}?cat=${cat}&limit=${limit}`)   //在组件跟新是使用操作函数来获取数据然后返回到状态管理函数中
    },[cat,page])
    return(
        <div>
            <ul className="Mrec-mucWrap">
                {data.length!==undefined?"":(data.result?data.result.slice(0,8).map((item,index)=>{
                    return (
                        <li key={item.name}>
                            <div className="Mrec-muc">
                                <img src={item.picUrl} alt=""/>
                                <NavLink to={`/index/playlist/detail?id=${item.id}`} className="Mcover"></NavLink>
                                <div className="Mrec-icon">
                                    <span className="Mset-icon"></span>
                                    <span className="Micon-txt">{String(item.playCount).length>4?(String(item.playCount).length>8?String(item.playCount).slice(0,-8)+"亿":String(item.playCount).slice(0,-4)+"万"):item.playCount}</span>
                                    <NavLink to={`/index/playlist/detail?id=${item.id}`} className="Mp-icon"></NavLink>
                                </div>
                                <p className="Mrec-mucTxt">
                                    <NavLink to={`/index/playlist/detail?id=${item.id}`}>
                                        {item.name}
                                    </NavLink>
                                </p>
                            </div>
                        </li>
                    )
                }):data.playlists.slice((page)*20,(page)*20+20).map((item,index)=>{
                    return(
                        <li key={index} className="Mplaylists">
                            <div className="Mrec-muc">
                                <img src={item.coverImgUrl} alt=""/>
                                <NavLink to={`/index/playlist/detail?id=${item.id}`} className="Mcover"></NavLink>
                                <div className="rec-icon">
                                    <span className="Mset-icon"></span>
                                    <span className="Micon-txt">{String(item.playCount).length>4?(String(item.playCount).length>8?String(item.playCount).slice(0,-8)+"亿":String(item.playCount).slice(0,-4)+"万"):item.playCount}</span>
                                    <NavLink to={`/index/playlist/detail?id=${item.id}`} className="Mp-icon"></NavLink>
                                </div>
                                <p className="Mrec-mucTxt">
                                    <NavLink to={`/index/playlist/detail?id=${item.id}`}>
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

export default MRecommend;