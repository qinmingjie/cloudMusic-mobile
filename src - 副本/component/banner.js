import React, { useEffect, Fragment,useState} from "react"
import {createStore} from "redux"
import {useSelector,useDispatch} from "react-redux"
import {useBanner,useInterTime} from "../store/action/index"
import {useLocation} from "react-router-dom"
export default function BannerPage(props){
    let loca = useLocation().pathname
    //获取状态管理仓库中的banner状态管理函数数据
    let state = useSelector((state)=>{   
        return state
    })
    let {bannerReducer} = state;
    let getData = useBanner()
    

    let {data} = bannerReducer
    //结构出需要的数据:id,图片地址，分类标签
    let [imgloc,setLoc] = useState(0)
    let [opanum,setopa] = useState(1)
    let [isClick,setClick] = useState(true)  //时间锁
    let [aniTime,setTime]  = useState(5000)  //点击时图片切换时间间隔
    let [isAni,setAni] = useState([])  //删除interval
    let [clickAni,setClickAni] = useState(true)  //点击banner按钮时锁定计时器
    let {banners} = data
    
    
    
    let interval  = setInterval(()=>{
        if(banners!==undefined&&clickAni){
            if(document.querySelector(".click-circle")!==null){
                let span = document.querySelector(".click-circle").querySelectorAll("span")
                Array(...span).map((item,index)=>{
                    item.setAttribute("class","circle")
                })
                if(imgloc===(banners.length-1)){
                    Array(...span)[0].classList.add("redcircle")
                    setLoc(0)
                    // console.log("meiyou")
                    clearInterval(interval)
                }else if(imgloc<(banners.length-1)){
                    setLoc(++imgloc)
                    Array(...span)[imgloc].classList.add("redcircle")
                    clearInterval(interval)
                }
                if(isAni.length>0){
                    isAni.map((item,index)=>{
                        if(index<isAni.length-1){
                            clearInterval(item)
                        }else{
                            // console.log(isAni[index])
                        }
                    })
                }
            }else{
                clearInterval(interval)
            }
            
        }
        
    },aniTime)
    useEffect(()=>{
        isAni.push(interval)
    })
    useEffect(()=>{
        getData()
        isAni.map((item,index)=>{
            if(index<isAni.length){
                clearInterval(item)
            }
        })
    },[loca])
    let clearInterFn = function(){
        isAni.map((item,index)=>{
            if(index<isAni.length){
                clearInterval(item)
            }
        })
    }

   

  
    return (
        <Fragment>
            <div className="par-ban"
                onMouseMove={()=>{
                    setClickAni(false)
                    clearInterFn()
                    clearInterval(interval)
                }}
                onMouseEnter={()=>{
                    setClickAni(false)
                    clearInterFn()
                    clearInterval(interval)
                }}
                onMouseOut={()=>{
                    setClickAni(true)
                }}
            >
                <div className="brul">
                    {banners===undefined?"":(
                            <img src={banners[imgloc].imageUrl} alt="" style={{filter:"blur(800px)"}}/>
                        )
                    }
                </div>
                <div className="banner-wrap">
                    <div className="wrap">
                        <div className="banner">
                            {banners===undefined?"":(
                                <a href="" title={banners[0].typeTitle} className="ban-img">
                                    <img id={"opcImg"} src={banners[imgloc].imageUrl} style={{opacity:`${opanum}`}} alt=""/>
                                </a>
                                )
                            }
                            <div className="click-circle">
                                {banners===undefined?"":(banners.map((item,index)=>{
                                    return(
                                        <span className={index===0?"circle redcircle":"circle"} key={index}
                                            onClick={()=>{
                                                let span = document.querySelector(".click-circle").querySelectorAll("span")
                                                Array(...span).map((item,index)=>{
                                                    item.setAttribute("class","circle")
                                                })
                                                Array(...span)[index].classList.add("redcircle")
                                                setLoc(index)
                                            }}
                                        ></span>
                                    )
                                }))}
                            </div>
                        </div>
                    </div>
                    <div className="rev-left"
                        onClick={()=>{
                            setClickAni(false)
                            clearInterFn()
                            if(isClick){
                                let span = document.querySelector(".click-circle").querySelectorAll("span")
                                let opcImg = document.querySelector("#opcImg")
                                Array(...span).map((item,index)=>{
                                    item.setAttribute("class","circle")
                                })
                                if(imgloc===0){
                                    opcImg.style.opacity = 0
                                    setLoc(banners.length-1)
                                    setTimeout(()=>{
                                        opcImg.style.opacity = 1
                                        Array(...span)[banners.length-1].classList.add("redcircle")
                                        setClick(true)
                                    },500)
                                    
                                }else{
                                    opcImg.style.opacity = 0
                                    setTimeout(()=>{
                                        setLoc(--imgloc)
                                        opcImg.style.opacity = 1
                                        opcImg.style.transition= "all 0.5s"
                                        Array(...span)[imgloc].classList.add("redcircle")
                                        setClick(true)
                                    },500)
                                }
                            }
                        }}
                        onMouseMove={()=>{
                            clearInterFn()
                            setClickAni(false)
                            clearInterval(interval)
                        }}
                        onMouseEnter={()=>{
                            clearInterFn()
                            setClickAni(false)
                            clearInterval(interval)
                        }}
                    ></div>
                    <div className="rev-right"
                        onClick={()=>{
                            clearInterFn()
                            setClickAni(false)
                            let opcImg = document.querySelector("#opcImg")
                            opcImg.classList.add("hidden")
                            let span = document.querySelector(".click-circle").querySelectorAll("span")
                            if(isClick){
                                setClick(false)
                                Array(...span).map((item,index)=>{
                                    item.setAttribute("class","circle")
                                })
                                if(imgloc===banners.length-1){
                                    opcImg.style.opacity = 0
                                    setTimeout(()=>{
                                        setLoc(0)
                                        opcImg.style.opacity = 1
                                        Array(...span)[0].classList.add("redcircle")
                                        setClick(true)
                                    },500)
                                }else{
                                    opcImg.style.opacity = 0
                                    setTimeout(()=>{
                                        setLoc(++imgloc)
                                        opcImg.style.opacity = 1
                                        opcImg.style.transition= "all 0.5s"
                                        Array(...span)[imgloc].classList.add("redcircle")
                                        setClick(true)
                                    },500)
                                }
                            }
                        }}
                        onMouseMove={()=>{
                            clearInterFn()
                            setClickAni(false)
                            clearInterval(interval)
                        }}
                        onMouseEnter={()=>{
                            clearInterFn()
                            setClickAni(false)
                            clearInterval(interval)
                        }}
                    ></div>
                    <div className="banner-downLoad">
                        <a href="" className="btn-down"></a>
                        <p className="downtext">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </div>
                </div>
            </div>
        </Fragment>        
    )
}