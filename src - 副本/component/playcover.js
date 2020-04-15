import React,{Fragment} from "react"
import Playcover from "../static/css/playcover.module.css"
export default function PlayCover(props){
    let {show} = props
    return(
        <Fragment>
            <div id={Playcover.wrap} className={show?Playcover.show:""}>
                <span className={Playcover.cover} id={Playcover.first}>&nbsp;</span>
                <span className={Playcover.cover} id={Playcover.second}>&nbsp;</span>
                <span className={Playcover.cover} id={Playcover.third}>&nbsp;</span>
            </div>
        </Fragment>
    )
}