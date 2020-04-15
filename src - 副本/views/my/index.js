import React, { Fragment } from "react"
import Footer from "../../component/footer"
import mystyle from "../../static/css/my.module.css"
import RedLine from "../../component/redLine"
export default function My(){
    return (
       <Fragment>
           <RedLine/>
           <div className={mystyle.bd+" "+mystyle.full}>
                <div className={mystyle.center}>
                    <div className={mystyle.pic}>
                        <h2>登录网易云音乐</h2>
                        <a hidefocus="true" href="#" className={mystyle.login}>立即登录</a>
                    </div>
                </div>
            </div>
            <Footer/>
       </Fragment>
    )
}