import React from "react"
function OrgdataReducer(toplist={   //状态管理函数，来管理榜单数据
    Orgdata:[]
},action){
    if(action.type==="topListOrg_data"){
        return {Orgdata:action.data}
    }
    return toplist;
 
}

function UPdataReducer(uplist={
    Updata:[]
},action){
    if(action.type==="topListUp_data"){
        return {Updata:action.data}
    }
    return uplist;
    
}

function NewdataReducer(newlist={
    Newdata:[]
},action){
    if(action.type==="topListNew_data"){
        return {Newdata:action.data}
    }
    return newlist;
    
}

export {UPdataReducer,NewdataReducer,OrgdataReducer}