import React, { useEffect } from "react"
import {useMnewmusic} from "../store/action/index"
import { useSelector } from "react-redux"
import {NavLink} from "react-router-dom"

///personalized/newsong
export default function MMucislist(){
    let state = useSelector((state)=>{
        return state.MnewdataReducer
    })
    let getData = useMnewmusic()
    useEffect(()=>{
        getData("personalized/newsong")
    },[])
    let data = state.Newdata
    console.log(data)
    return(
        <ul className="Mnotice-mucList">
            {data.length===0?"":(data.result.map((item,index)=>{
                console.log(item.id)
                return(
                    <li className="Mnotice-list Mcanplay" id={""} key={item.id}>
                         <NavLink  to="" className="Mnum-music" mus-id={item.id} >
                            <div>
                                <span className={index<3?"Mrednum":""} style={{display:"none"}}>{index+1}</span>
                                <p className="Mnewname">
                                    
                                    <span className="Mnewname1">{item.name}</span>
                                    <span className="Mnewname2">{(item.song.alias.length===0)?"":(item.song.alias[0])}</span>
                                </p>
                                <p className="Mnewalumb">
                                    <span className="Micon">&nbsp;</span>
                                    <span className="MalumbTxt">{item.song.artists.map((item,index)=>{return (index<=0?"":"/")+item.name})}-{item.song.album.name}</span>
                                </p>
                            </div>
                            <div className="Mnum-show"></div>
                        </NavLink>
                    </li>
                )
            }))}
        </ul>
    )
}