import React, { Fragment,useEffect,useState} from "react"
import { useLocation} from "react-router-dom"
import BannerPage from "../../component/banner"
import Recommend from "../../component/recommend"
import NewDiscs from "../../component/newdic"
import TopList from "../../component/toplist"
import Footer from "../../component/footer"
import Aside from "../../component/aside"
import {getUrl} from "../../store/action/index"
import {CommendTitle,TopListTitle,NewDisc} from "../../component/title"
import qs from "qs"
// 移动端组件
import Mtitle from "../../mobileconponemt/mtitle"
import MRecommend from "../../mobileconponemt/mrecommend.js"
import MMucislist from "../../mobileconponemt/newmusic"
function Index(props){
    
    //首页
    return(
        <Fragment>
            <BannerPage/>
            <main className="main">
                <div className="content pc">
                    <div className="cont-left">
                        <div className="recommend-wrap">
                            <CommendTitle/>
                            <Recommend url={"/personalized"} cat={""} limit={8}/>
                            <NewDisc/>
                            <NewDiscs/>
                            <TopListTitle/>
                            <TopList/>
                        </div>
                    </div>
                    <Aside/>
                </div>
                <div className="mobile">
                    <Mtitle text={"推荐歌单"}/>
                    <MRecommend url={"/personalized"} cat={""} limit={6}/>
                    <Mtitle text={"最新音乐"}/>
                    <MMucislist/>
                </div>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Index