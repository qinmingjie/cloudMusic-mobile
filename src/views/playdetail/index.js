import React, { useEffect, Fragment } from "react"
import {useLocation} from "react-router-dom"
import {useSelector} from "react-redux"
import {usePlaydetail} from "../../store/action/index"
import detail from "../../static/css/playdetail.module.css"
import Footer from "../../component/footer"
import DetailTitle from "../../component/detailtitle"
import MusicList from "../../component/musiclist"
import qs from "qs"
export default function Detail(){
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
    let {playlist} = state.data
    let {loading} = state
    return (
        <Fragment>
           <div className={loading?detail.loading:detail.loadingend}>
			    <p id="loading">Loading<span>.</span><span>.</span><span>.</span></p>
		    </div>
            <div className="content musicList">
                <div className="cont-left">
                    <DetailTitle data={playlist}/>
                    <MusicList data={playlist}/>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}