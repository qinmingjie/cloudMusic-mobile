import React from "react"
function recommendReducer(recommend={
    data:[]
},action){
    if(action.type==="recommend_data"){   //设置状态管理函数来管理热门推荐中的数据data
        return{data:action.data}
    }
    return recommend
}

export default recommendReducer;