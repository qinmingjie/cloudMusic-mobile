import React,{Fragment, useState}from "react"
import titles from "../static/css/playdetail.module.css"
import {NavLink} from "react-router-dom"
export default function DetailTitle(props){
    //拿取父组件传递的信息，分离需要信息
    let {data} = props
    let [show,setShow] = useState(false)
    return(
        <Fragment>
            {data?
            <div className={titles.detailWrap}> 
                <div className={titles.detailCoverImg}>
                    <img src={data.coverImgUrl} className="j-img"/>
                    <span className={titles.cover}></span>
                </div>
                <div className={titles.detailTxt}>
                    <div className="">
                        <div className={titles.detailTiile}>
                            <i className={titles.detailIcon1}><span className="" ></span></i>
                            <div className="">
                                <h2 className={titles.detailh2}>{data.name}</h2>
                            </div>
                        </div>
                        <div className={titles.detailIcon2}>
                            <i className={titles.detailFace} ><img src={data.creator.avatarUrl}/></i>
                            <span className="name">
                            <i  className="s-fc7">{data.creator.nickname}</i>
                            </span>
                            <sup className={titles.detailIcon3}>&nbsp;</sup>
                            <span className={titles.detailTime}>2020-3-1 创建</span>
                        </div>
                        <div id="content-operation" className={titles.detailIcons}>
                            <div className={titles.detailIcons1} title="播放">
                                <i>
                                    <em className="ply"></em>播放
                                </i>
                            </div>
                            <div className={titles.detailIcons2} hidefocus="true" title="添加到播放列表"></div>
                            <div  className={titles.detailIcons3} >
                                <i>({String(data.playCount).slice(0,4)})</i>
                            </div>
                            <div className={titles.detailIcons4}>
                                <i>({String(data.shareCount).slice(0,4)})</i>
                            </div>
                            <div className={titles.detailIcons5}>
                                <i>(<span id="cnt_comment_count">{String(data.commentCount).slice(0,4)}</span>)</i>
                            </div>
                        </div>
                        <div className={titles.detailTags}>
                            <b>标签：</b>
                            {data.tags.map((item,index)=>{
                                return <NavLink key={item} to={`/index/playlist?cat=${item}&limit=100&page=1`}><i>{item}</i></NavLink>
                            })}
                        </div>
                        <div id="album-desc-more" className="intr f-brk">
                            <p 
                                className={titles.detailSclieTxt}
                                dangerouslySetInnerHTML={{
                                    __html:(data.description.replace(/\n/g,`</br>`).length)<140?("介绍："+(data.description.replace(/\n/g,`</br>`))):("介绍："+(data.description.replace(/\n/g,`</br>`).slice(0,140) + "..."))
                                }}
                                style={show?{display:"none"}:{display:"block"}}
                            >
                            </p>
                            <p 
                                className={titles.detailSclieAll}
                                dangerouslySetInnerHTML={{
                                    __html:"介绍：" + (data.description.replace(/\n/g,`</br>`))
                                }}
                                style={!show?{display:"none"}:{display:"block"}}
                            >
                            </p>
                            {(data.description.replace(/\n/g,`</br>`).length<140)?"":<div className={titles.detailSelect}><span onClick={()=>{
                               setShow(!show)
                            }}>{show?"收起":"展开"}<i id={show?titles.detailShow:""}></i></span></div>}
                        </div>
                    </div>
                </div>
            </div>:""}
        </Fragment>
    )
}