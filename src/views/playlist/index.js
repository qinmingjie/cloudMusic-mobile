import React,{Fragment, useState} from "react"
import playlist from "../../static/css/playlist.module.css"
import Recommend from "../../component/recommend"
export default function PlayList(props){
    let [show,setShow] = useState(false)
    return (
        <Fragment>
            <div id={playlist.content}>
                <div className={playlist.htitle}>
                    <div className={playlist.rectxt}>
                        <a href="">全部</a>
                        <a className={playlist.select} onClick={(e)=>{
                            e.preventDefault()
                            setShow(!show)
                        }}>
                            <i>
                                选择分类
                                <em></em>
                            </i>
                        </a>
                        <section className={playlist.commendSort} style={show?{display:"block"}:{display:"none"}}>
                            <div className={playlist.commHeader}>
                                <em></em>
                            </div>
                            <p className={playlist.commendAll}>
                                <a href="">全部风格</a>
                            </p>
                            <div className={playlist.language}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    语种
                                </div>
                                <div className={playlist.Link}>
                                   <a href="">华语</a>
                                   <a href="">欧美</a>
                                   <a href="">日语</a>
                                   <a href="">韩语</a>
                                   <a href="">粤语</a>
                                </div>
                            </div>
                            <div className={playlist.style}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    风格
                                </div>
                                <div className={playlist.Link}>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                </div>
                                
                            </div>
                            <div className={playlist.scene}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    场景
                                </div>
                                <div className={playlist.Link}>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                </div>
                            </div>
                            <div className={playlist.fell}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    情感
                                </div>
                                <div className={playlist.Link}>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                </div>
                            </div>
                            <div className={playlist.topic}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    主题
                                </div>
                                <div className={playlist.Link}>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                    <a href="">流行</a>
                                    <a href="">摇滚</a>
                                    <a href="">民谣</a>
                                    <a href="">电子</a>
                                    <a href="">舞曲</a>
                                </div>
                            </div>
                            <div className={playlist.commFooter}></div>
                        </section>
                    </div>
                    <span className={playlist.tmucmore}>
                        <a href="" className="">热门
                        </a>
                    </span>
                </div>
                <Recommend url={"/top/playlist"} cat={""} limit={40}/>
            </div>
           
        </Fragment>
    )
}