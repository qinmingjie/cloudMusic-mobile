import React from "react"
function MhotReducer(Mhot={
    data:[]
},action){
    if(action.type==="Mhot_data"){   //设置状态管理函数来管理热门推荐中的数据data
        return{data:action.data}
    }
    return Mhot
}

export default MhotReducer;