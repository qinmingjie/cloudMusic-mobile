import React from "react"

export default function detailReducer(detail={
    data:[],
    loading:true
},action){
    if(action.type==="playdetail_data"){
        return {data:action.data}
    }
    return detail;
}