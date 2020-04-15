import React from "react"
import bannerReducer from "./reducer/banner"
import recommendReducer from "./reducer/recommend"
import newdicsReducer from "./reducer/newdics"
import detailReducer from "./reducer/playdetail"
import MrecommendReducer from "./reducer/Mrecommend"
import MhotReducer from "./reducer/Mhot"
import playlistsReducer from "./reducer/playlists"
import musicReducer from "./reducer/musicurl"
import ImgUlr from "./reducer/imgurl"
import interReducer from "./reducer/interval"
import {createStore,combineReducers} from "redux"
import loadingReducer from "./reducer/loading"
import {UPdataReducer,NewdataReducer,OrgdataReducer,MnewdataReducer} from "./reducer/toplist"

let store = createStore(combineReducers({loadingReducer,interReducer,ImgUlr,MhotReducer,MnewdataReducer,MrecommendReducer,musicReducer,bannerReducer,recommendReducer,newdicsReducer,UPdataReducer,NewdataReducer,OrgdataReducer,playlistsReducer,detailReducer}))
export default store
