import React from "react"
function newdicsReducer(newidcs={
    data:[]
},action){
    if(action.type==="newdics_data"){
        return {data:action.data}
    }
    return newidcs
}

export default newdicsReducer;