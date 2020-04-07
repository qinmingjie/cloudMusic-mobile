import React from "react"
import bannerReducer from "./reducer/banner"
import recommendReducer from "./reducer/recommend"
import newdicsReducer from "./reducer/newdics"
import {UPdataReducer,NewdataReducer,OrgdataReducer} from "./reducer/toplist"
import {createStore,combineReducers} from "redux"

let store = createStore(combineReducers({bannerReducer,recommendReducer,newdicsReducer,UPdataReducer,NewdataReducer,OrgdataReducer}))
export default store
