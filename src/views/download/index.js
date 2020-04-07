import React, { Fragment } from "react"
import RedLine from "../../component/redLine"
import Footer from  "../../component/footer"
import download from "../../static/css/my.module.css"
export default function Download(){
    return (
        <Fragment>
            <RedLine/>
            <main className={download.bg}>
                <div className={download.main}>
                    <div className={download.left}>
                        <div className={download.title}>在电脑上听</div>
                            <img src="//p1.music.126.net/PGNd0EAtUgA7iRCWXPnUuA==/109951164207162781.png?param=800x0" className=""/>
                            <div className={download.icons}>
                                <span><i className={download.mac}></i>macOS</span>
                                <span><i className={download.wind}></i>Windows</span>
                            </div>
                            <div className={download.pc}>下载电脑端</div>
                    </div>
                    <div className={download.right}>
                        <div className={download.title}>在手机上听</div>
                        <img src="//p1.music.126.net/sLtya87wVHWn-HWJ33oN4g==/109951164207180884.png?param=450x0" className="main__img___2st-0"/>
                        <div className={download.icons}>
                            <span><i className={download.phone}></i>iPhone</span>
                            <span><i className={download.andr}></i>Android</span>
                        </div>
                        <div className={download.pc}>
                            <i className=""></i>下载手机端
                        </div>
                    </div>
                    <div className={download.alldev}>
                        <i className=""></i>下载全部客户端
                    </div>
                </div>
            </main>
            <Footer/>
        </Fragment>
    )
}