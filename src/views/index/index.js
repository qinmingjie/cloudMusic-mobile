import React, { Fragment } from "react"
import { useLocation} from "react-router-dom"
import BannerPage from "../../component/banner"
import Recommend from "../../component/recommend"
import NewDiscs from "../../component/newdic"
import TopList from "../../component/toplist"
import Footer from "../../component/footer"
import Aside from "../../component/aside"
import {CommendTitle,TopListTitle,NewDisc} from "../../component/title"
import qs from "qs"
function Index(props){
    //首页
    return(
        <Fragment>
            <BannerPage/>
            <main>
                <div className="content">
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
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Index