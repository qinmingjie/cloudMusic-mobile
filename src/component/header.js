import React from "react"
import {NavLink} from "react-router-dom"

function Header(){
    return(
        <header className="header-nav">
            <div className="header">
                <nav className="navcenter">
                    <h1 className="header-logo">
                        <NavLink to="/index" style={{display:"block",width:"100%",height:"100%",backgroundColor:"transparent"}}></NavLink>
                    </h1>
                    <div className="headerNav">
                        <NavLink to="/index" key={"发现音乐"} >发现音乐<em></em></NavLink>
                        <NavLink to="/my" key={"我的音乐"} >我的音乐<em></em></NavLink>
                        <NavLink to="/friend" key={"朋友"} >朋友<em></em></NavLink>
                        <NavLink to="/download" key={"下载客户端"}  className="header-downLoad">下载客户端<span className="hot"></span><em></em></NavLink>
                    </div>
                    <div className="header-login"><a href="#">登录</a></div>
                    <a href="#" className="header-creator">创作者中心</a>
                    <div className="header-search">
                        <input type="text" className="search" value="音乐/视频/电台/用户" onChange={()=>{
                            return ""
                        }}/>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;