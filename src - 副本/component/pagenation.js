import React, { Fragment, useState } from "react"
import {useLocation,Link, NavLink} from "react-router-dom"
import pageNation from "../static/css/pagenation.module.css"
import qs from "qs"
export default function PageNation(props){
    let {num,fn} = props
    let pageList = 20; //每篇显示多少个
    let pageLocation = Math.ceil(num/pageList)
    //获取地址来判断是哪个分类的分页
    let {pathname} = useLocation()
    let {cat,limit,page} = qs.parse(useLocation().search.slice(1))
    let [locationPage,setPage] = useState(0)
    return(
        <Fragment>
            <div className={pageNation.pageWrap}>
                {
                    [...".".repeat(pageLocation)].map((item,index)=>{
                    return <NavLink activeClassName={"active"+" "+ pageNation.page} to={`${pathname}?cat=${cat}&limit=${limit}&page=${index+1}`} key={index} 
                        onClick={()=>{
                            fn(index)
                        }}
                    >{index+1}</NavLink>
                    })
                }
            </div>
        </Fragment>
        
    )
}