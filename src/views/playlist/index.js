import React,{Fragment, useState, useEffect} from "react"
import playlist from "../../static/css/playlist.module.css"
import Recommend from "../../component/recommend"
import PageNation from "../../component/pagenation"
import {useLocation,NavLink} from "react-router-dom"
import {useSelector} from "react-redux"
import {usePlaylists} from "../../store/action"
import Footer from "../../component/footer"
import qs from "qs"
export default function PlayList(props){
    let numb = 100; //获取多少条歌单
    let [thisPage,setPage] = useState(0)
    
    let state = useSelector((state)=>{
        return state.playlistsReducer
    })
    let getTypData = usePlaylists() //获取数据
    let [show,setShow] = useState(0)  //显示隐藏方法

    let locCat = qs.parse(useLocation().search.slice(1)); //获取地址参数
    
    useEffect(()=>{
        getTypData("/playlist/catlist")
    },[])
    let {cat,type,loading} = state  //解构出分类

    
    return (
        <Fragment>
            <div id={playlist.content}>
                <div className={playlist.htitle}>
                    <div className={playlist.rectxt}>
                        <a href="">{locCat.cat}</a>
                        <a className={playlist.select} onClick={(e)=>{
                            e.preventDefault()
                            setShow(!show)
                        }}>
                            <i>
                                选择分类
                                <em></em>
                            </i>
                        </a>
                        <section className={playlist.commendSort} style={show?{display:"block"}:{display:"none"}} onClick={(e)=>{
                            e.preventDefault()
                            setShow(!show)
                        }}>
                            <div className={playlist.commHeader}>
                                <em></em>
                            </div>
                            <p className={playlist.commendAll}>
                                <a href="">全部风格</a>
                            </p>
                            <div className={playlist.language}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    {type[0]}
                                </div>
                                <div className={playlist.Link}>
                                    {(cat.length===0||cat===undefined)?"":cat.map((item,index)=>{
                                        if(item.category===0){
                                            return <NavLink key={item.name} to={`/admin/playlist?cat=${item.name}&limit=${numb}&page=1`} activeClassName="active">{item.name}</NavLink>
                                        }
                                    })}
                                </div>
                            </div>
                            <div className={playlist.style}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    {type[1]}
                                </div>
                                <div className={playlist.Link}>
                                    {(cat.length===0||cat===undefined)?"":cat.map((item,index)=>{
                                        if(item.category===1){
                                            return <NavLink key={item.name} to={`/admin/playlist?cat=${item.name}&limit=${numb}&page=1`} activeClassName="active">{item.name}</NavLink>
                                        }
                                    })}
                                   
                                </div>
                                
                            </div>
                            <div className={playlist.scene}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    {type[2]}
                                </div>
                                <div className={playlist.Link}>
                                    {(cat.length===0||cat===undefined)?"":cat.map((item,index)=>{
                                        if(item.category===2){
                                            return <NavLink key={item.name} to={`/admin/playlist?cat=${item.name}&limit=${numb}&page=1`} activeClassName="active">{item.name}</NavLink>
                                        }
                                    })}
                                    
                                </div>
                            </div>
                            <div className={playlist.fell}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    {type[3]}
                                </div>
                                <div className={playlist.Link}>
                                    {(cat.length===0||cat===undefined)?"":cat.map((item,index)=>{
                                        if(item.category===3){
                                            return <NavLink key={item.name} to={`/admin/playlist?cat=${item.name}&limit=${numb}&page=1`} activeClassName="active">{item.name}</NavLink>
                                        }
                                    })}
                                </div>
                            </div>
                            <div className={playlist.topic}>
                                <div className={playlist.caption}>
                                    <em></em>
                                    {type[4]}
                                </div>
                                <div className={playlist.Link}>
                                    {(cat.length===0||cat===undefined)?"":cat.map((item,index)=>{
                                        if(item.category===4){
                                            return <NavLink key={item.name} to={`/admin/playlist?cat=${item.name}&limit=${numb}&page=1`} activeClassName="active">{item.name}</NavLink>
                                        }
                                    })}
                                </div>
                            </div>
                            <div className={playlist.commFooter}></div>
                        </section>
                    </div>
                    <span className={playlist.tmucmore}>
                        <NavLink to="/playlist?cat=" className="">热门
                        </NavLink>
                    </span>
                </div>
                <Recommend url={"/top/playlist"} cat={locCat.cat} page={thisPage} limit={numb}/>
                <PageNation num={numb} fn={setPage}/>
            </div>
            <Footer/>
        </Fragment>
    )
}