import React, { useEffect, Fragment } from "react"
import {useSelector} from "react-redux"
import {useBanner} from "../store/action/index"
import {useLocation} from "react-router-dom"
export default function BannerPage(props){
    let loca = useLocation().pathname
    //获取状态管理仓库中的banner状态管理函数数据
    let state = useSelector((state)=>{   
        return state
    })
    let {bannerReducer} = state;
    let getData = useBanner()
    useEffect(()=>{
        getData()
    },[loca])



    let {data} = bannerReducer
    //结构出需要的数据:id,图片地址，分类标签
    let {banners} = data
    return (
        <Fragment>
            <div className="par-ban">
                <div className="banner-wrap">
                    <div className="wrap">
                        <div className="banner">
                            {banners===undefined?"":(banners.map((item,index)=>{
                                return(
                                    <div key={item.imageUrl}>
                                        <a href="" title={item.typeTitle} className="ban-img">
                                            <img src={item.imageUrl} alt=""/>
                                        </a>
                                    </div>
                                )
                            }))}
                            <div className="click-circle">
                                {banners===undefined?"":(banners.map((item,index)=>{
                                    return(
                                        <span className="circle" key={index}></span>
                                    )
                                }))}
                            </div>
                        </div>
                    </div>
                    <div className="rev-left"></div>
                    <div className="rev-right"></div>
                    <div className="banner-downLoad">
                        <a href="" className="btn-down"></a>
                        <p className="downtext">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </div>
                </div>
            </div>
        </Fragment>        
    )
}