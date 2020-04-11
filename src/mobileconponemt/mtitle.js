import React from "react"
export default function Mtitle(props){
    let {text} = props
    return(
        <div className="m-titlewrap">
            <span className="m-htitle">{text}</span>
        </div>
    )
}