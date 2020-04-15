import React from "react"

export default function ImgUlr(imgurl={
    url:[]
},action){
    if(action.type==="imgurl_data"){
        return {url:action.data}
    }
    return imgurl
}