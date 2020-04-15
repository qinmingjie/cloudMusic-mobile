import React from "react"
import jpg1 from "../static/img/22.jpg"
import jpg2 from "../static/img/23.jpg"
import jpg3 from "../static/img/24.jpg"
import jpg4 from "../static/img/25.jpg"
import jpg5 from "../static/img/26.jpg"
import jpg6 from "../static/img/27.jpg"
import jpg7 from "../static/img/28.jpg"
import jpg8 from "../static/img/29.jpg"
import jpg9 from "../static/img/30.jpg"
import jpg10 from "../static/img/31.jpg"
export default function Aside(){
    return(
        <aside className="cont-right">
            <div className="sonr">
				<div className="sonrtop">
					<p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
					<a href="zc.html" target="_blank">用户登录</a>
				</div>
				<div className="ruzhu">
					入住歌手
					<a href="">查看全部></a>
				</div>
				<div className="geshou">
					<ul>
						<li>
							<a href="">
								<img src={jpg1}/>
								<p>张惠妹aMEI</p>
								<p>台湾歌手张惠妹</p>
							</a>
						</li>
						<li>
							<a href="">
								<img src={jpg2}/>
								<p>Fin乐团</p>
								<p>独立音乐人</p>
							</a>
						</li>
						<li>
							<a href="">
								<img src={jpg3}/>
								<p>禹晓利</p>
								<p>民谣歌手、中国现代歌手</p>
							</a>
						</li>
						<li>
							<a href="">
								<img src={jpg4}/>
								<p>音乐人赵雷</p>
								<p>民谣歌手</p>
							</a>
						</li>
						<li>
							<a href="">
								<img src={jpg5}/>
								<p>王三溥</p>
								<p>音乐人</p>
							</a>
						</li>
					</ul>
				</div>
				<a href="">申请成为网易音乐人</a>
				<div className="zhubo">
					热门主播
				</div>
				<div className="zbo">
					<ul>
						<li>
							<img src={jpg6}/>
							<a href="">陈立
								<span className="fa fa-vimeo span1"></span>
							</a>
							<p>心理学家、美食家陈立教授</p>
						</li>
						<li>
							<img src={jpg7}/>
							<a href="">DJ艳秋
								<span className="fa fa-vimeo span2"></span>
							</a>
							<p>著名音乐节目主持人</p>
						</li>
						<li>
							<img src={jpg8}/>
							<a href="">国家大剧院古典音乐频道
								<span className="fa fa-vimeo span3"></span>
							</a>
							<p>国家大剧院古典音乐官方频道</p>
						</li>
						<li>
							<img src={jpg9}/>
							<a href="">谢谢收听
								<span className="fa fa-vimeo span4"></span>
							</a>
							<p>南京电台主持人王罄</p>
						</li>
						<li>
							<img src={jpg10}/>
							<a href="">DJ小苏
								<span className="fa fa-vimeo span5"></span>
							</a>
							<p>独立DJ、CRI环球旅游广播电视台</p>
						</li>
					</ul>
				</div>
			</div>
        </aside>
    )
}