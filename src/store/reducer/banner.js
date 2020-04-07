import React from "react"
function bannerReducer(banner={
    data:[],
    loading:true
},action){
    if(action.type==="banner_data"){
       return {data:action.data,loading:action.loading}
    }
    return banner                                                
}

export default bannerReducer