import React from "react"

export default function interReducer(time={
    data:[]
},action){
    if(action.type==="time_data"){
        return {data:time.data.concat(action.data)}
    }
    return time;
}