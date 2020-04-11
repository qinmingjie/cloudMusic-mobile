import React, { useEffect } from "react"
import {useSelector} from "react-redux"
import {useOrgdata,useUpdata,useNewdata} from "../store/action/index"
import {useLocation} from "react-router-dom"
import Toptitle from "./toptitle"
function TopList(){
    let loca = useLocation().pathname
    let state = useSelector((state)=>{
        return state
    })
    let getUpData = useUpdata();
    let getNewData = useNewdata();
    let getOrgdata = useOrgdata();
    useEffect(()=>{
        getUpData("/top/list?idx=3")
        getNewData("/top/list?idx=0")
        getOrgdata("/top/list?idx=2")
    },[loca])
    let {UPdataReducer,NewdataReducer,OrgdataReducer} = state
    return(
        <div className="notic-muc">
            <Toptitle data={UPdataReducer.Updata}/>
            <Toptitle data={NewdataReducer.Newdata}/>
            <Toptitle data={OrgdataReducer.Orgdata} name={"notice-last"}/>
        </div>
    )
}

export default TopList;