import React, { Fragment } from "react"
import RedLine from "../../component/redLine"
import Footer from  "../../component/footer"
import friend from "../../static/css/my.module.css"
export default function Friend(){
    return (
        <Fragment>
            <RedLine/>
            <div className={friend.bd+" "+friend.full}>
                <div className={friend.centerbg}>
                    <div className={friend.txt}>你可以关注明星和好友品味他们的私房歌单<br/>通过他们的动态发现更多精彩音乐</div>
                    <a hidefocus="true" href="#" className={friend.btn}>立即登录</a>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}