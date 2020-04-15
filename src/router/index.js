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
import Detail from "../views/playdetail/index"
import MHotMusic from "../mobileconponemt/hotmusiclist"
import MSongList from "../mobileconponemt/msonglist"
// y移动端组件
import Mheader from "../mobileconponemt/mheader"
import MNav from "../mobileconponemt/mnav"
import Search from "../mobileconponemt/search"
import Mplay from "../mobileconponemt/mplay"
let headerRouter = [
    {
        path:"/",
        exact:true,
        render(props){
            return <Redirect to="/admin"/>
        }
    },{
        path:"/admin",
        exact:true,
        render(props){
            return(
                <Fragment>
                    <ChildNav/>
                    <Index/>
                    <Mheader/>
                    <MNav/>
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
let types = ["admin","top","playlist","djradio","artist","album"]

let childRouter = [
    {
        path:"/admin",
        title:"推荐",
        exact:true,
        active:"active"
    },{
        path:"/admin/playlist?cat=全部&limit=100&page=1",
        title:"歌单",
        exact:true,
        active:"active"
    }
]
/*
,{
        path:"/index/top",
        title:"排行榜",
        exact:true,
        active:"active"
    }
,{
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
*/

let childRender = [
    {
        path:"/admin",
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
        path:"/admin/playlist",
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
        path:"/playlist/detail",
        exact:true,
        title:"歌单",
        render(props){
            return (
                <Fragment>
                    <ChildNav/>
                    <Detail/>
                </Fragment>
            )
        }
    }, {
        path:"/admin/hot",
        exact:true,
        render(props){
            return(
                <Fragment>
                    <Mheader/>
                    <MNav/>
                    <MHotMusic/>
                </Fragment>
            )
        }
    },{
        path:"/admin/search",
        exact:true,
        render(props){
            return (
                <Fragment>
                    <Mheader/>
                    <MNav/>
                    <Search/>
                </Fragment>
            )
            
        }
    },{
        path:"/admin/mdetail",
        exact:true,
        render(props){
            return (
                <Fragment>
                    <MSongList/>
                </Fragment>
            )
            
        }
    }
    // ,{
    //     path:"/admin/mplay",
    //     exact:true,
    //     render(props){
    //         return (
    //             <Fragment>
    //                 <Mplay/>
    //             </Fragment>
    //         )
            
    //     }
    // }
    // ,{
    //     path:"/index/djradio",
    //     title:"电台",
    //     exact:true,
    //     render(props){
    //         return (
    //             <Fragment>
    //                 <ChildNav/>
    //                 <Djradio/>
    //             </Fragment>
    //         )
    //     }
    // },{
    //     path:"/index/artist",
    //     title:"歌手",
    //     exact:true,
    //     render(props){
    //         return (
    //             <Fragment>
    //                 <ChildNav/>
    //                 <Artist/>
    //             </Fragment>
    //         )
    //     }
    // },{
    //     path:"/index/album",
    //     title:"新碟",
    //     exact:true,
    //     render(props){
    //         return (
    //             <Fragment>
    //                 <ChildNav/>
    //                 <Album/>
    //             </Fragment>
    //         )
    //     }
    // },
   
]
export {headerRouter,childRouter,types,childRender};