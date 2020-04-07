import  React, { useEffect } from "react"
import {useSelector} from "react-redux"
import {useNewDics} from "../store/action/index"
import {useLocation} from "react-router-dom"
function NewDics(){
    let loca = useLocation().pathname
    //获取管理状态仓库
    let state = useSelector((state)=>{
        return state.newdicsReducer;
    })
    //获取仓库管理函数操作状态函数，获取新碟上架数据
    let getData = useNewDics()
    useEffect(()=>{
        getData("/album/newest")
    },[loca])
    let data = state.data
    return(
        <div className="dic-muc">
            <div className="newDic-prev"></div>
            <div className="newDic">
                <ul className="newDic-Name">
                   {data.length===undefined?(data.albums.map((item,index)=>{
                       return (
                        <li className="newDicList" key={item.artist.id}>
                            <div className="newDic-muc">
                                <img src={item.picUrl} alt=""/>
                                <a href="" className="newDic-cover"></a>
                                <a href="" className="newDic-play"></a>
                            </div>
                       <p className="dictxt"><a href="" className="newDic-name">{item.name}</a></p>
                       <p className="dictxt"><a href="" className="newDic-txt">{item.artist.name}</a></p>
                        </li>
                       )
                   })):""}
                </ul>
            </div>
            <div className="newDic-next"></div>
        </div>
    )
}

export default NewDics