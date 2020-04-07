import React from "react"
export default function Footer(){
    return(
        <footer className="foot">
            <div className="footson">
                <div className="fleft">
                    <ul>
                        <li>
                            <a href="">关于网易</a>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="">客户服务</a>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="">服务条款</a>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="">网站导航</a>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="">意见反馈</a>
                            <span>|</span>
                        </li>
                    </ul>
                    <p>网易公司版权所有©1997-2017杭州乐读科技有限公司运营：浙网文[2015] 0415-135号</p>
                </div>
                <div className="fright">
                    <a href="" className="fra1"></a>
                    <a href="" className="fra2"></a>
                    <a href="" className="fra3"></a>
                    <a href="" className="fra4"></a>
                </div>
            </div>
        </footer>
    )
}