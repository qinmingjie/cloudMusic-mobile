import React from "react"
function MrecommendReducer(recommend={
    data:[]
},action){
    if(action.type==="Mrecommend_data"){   //设置状态管理函数来管理热门推荐中的数据data
        return{data:action.data}
    }
    return recommend
}

export default MrecommendReducer;