import React from "react"
export default function musicReducer(music={
    data:[]
},action){
    if(action.type==="musicurl_data"){
        return {data:action.data}
    }else{
        return music
    }
}
