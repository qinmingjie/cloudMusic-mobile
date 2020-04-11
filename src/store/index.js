import React from "react"
import bannerReducer from "./reducer/banner"
import recommendReducer from "./reducer/recommend"
import newdicsReducer from "./reducer/newdics"
import detailReducer from "./reducer/playdetail"
import MrecommendReducer from "./reducer/Mrecommend"
import {UPdataReducer,NewdataReducer,OrgdataReducer,MnewdataReducer} from "./reducer/toplist"
import playlistsReducer from "./reducer/playlists"
import musicReducer from "./reducer/musicurl"
import {createStore,combineReducers} from "redux"

let store = createStore(combineReducers({MnewdataReducer,MrecommendReducer,musicReducer,bannerReducer,recommendReducer,newdicsReducer,UPdataReducer,NewdataReducer,OrgdataReducer,playlistsReducer,detailReducer}))
export default store
