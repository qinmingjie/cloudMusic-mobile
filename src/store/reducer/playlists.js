import React from "react"

export default function playlistsReducer(playlists={
    type:[],
    cat:[],
    loading:true
},action){
    if(action.type==="playlists_data"){
        return{cat:action.data.sub,type:action.data.categories,loading:action.loading}
    }
    return playlists
}