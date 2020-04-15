import React from "react"

export default function loadingReducer(loading={
    loadstore:true
},action){
    if(action.type==="setLoading"){
        return {loadstore:action.data}
    }
    return loading
}