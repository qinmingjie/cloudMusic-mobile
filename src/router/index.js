import React, { Fragment } from "react"
import {Redirect} from "react-router-dom"
import Index from "../views/index/index"
import My from "../views/my/index"
import Friend from "../views/friend/index"
import Download from "../views/download/index"
import Album from "../views/album/index"
import Artist from "../views/artist/index"
import Djradio from "../views/djradio/index"
import PlayList from "../views/playlist/index"
import TopList from "../views/toplist/index"
import ChildNav from "../component/childNav"
let headerRouter = [
    {
        path:"/",
        exact:true,
        render(props){
            return <Redirect to="/index"/>
        }
    },{
        path:"/index",
        exact:true,
        render(props){
            return(
                <Fragment>
                    <ChildNav/>
                    <Index/>
                </Fragment>
            )
        }
    },{
        path:"/my",
        exact:true,
        render(props){
            return <My/>
        }
    },{
        path:"/download",
        exact:true,
        render(props){
            return <Download/>
        }
    },{
        path:"/friend",
        exact:true,
        render(props){
            return <Friend/>
        }
    }
]
let types = ["index","top","playlist","djradio","artist","album"]

let childRouter = [
    {
        path:"/index",
        title:"推荐",
        exact:true,
        active:"active"
    },{
        path:"/index/top",
        title:"排行榜",
        exact:true,
        active:"active"
    },{
        path:"/index/playlist/cat=全部",
        title:"歌单",
        exact:true,
        active:"active"
    },{
        path:"/index/djradio",
        title:"主播电台",
        exact:true,
        active:"active"
    },{
        path:"/index/artist",
        title:"歌手",
        exact:true,
        active:"active"
    },{
        path:"/index/album",
        title:"新碟上架",
        exact:true,
        active:"active"
    }
]

let childRender = [
    {
        path:"/index",
        title:"推荐",
        exact:true,
        render(props){
            return (
                <Fragment>
                    <ChildNav/>
                    <Index/>
                </Fragment>
            )
        }
    },{
        path:"/index/top",
        exact:true,
        title:"排行榜",
        render(props){
            return (
                <Fragment>
                    <ChildNav/>
                    <TopList/>
                </Fragment>
            )
        }
    },{
        path:"/index/playlist/:cat",
        exact:true,
        title:"歌单",
        render(props){
            return (
                <Fragment>
                    <ChildNav/>
                    <PlayList/>
                </Fragment>
            )
        }
    },{
        path:"/index/djradio",
        title:"电台",
        exact:true,
        render(props){
            return (
                <Fragment>
                    <ChildNav/>
                    <Djradio/>
                </Fragment>
            )
        }
    },{
        path:"/index/artist",
        title:"歌手",
        exact:true,
        render(props){
            return (
                <Fragment>
                    <ChildNav/>
                    <Artist/>
                </Fragment>
            )
        }
    },{
        path:"/index/album",
        title:"新碟",
        exact:true,
        render(props){
            return (
                <Fragment>
                    <ChildNav/>
                    <Album/>
                </Fragment>
            )
        }
    }
]
export {headerRouter,childRouter,types,childRender};