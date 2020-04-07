import React from "react"
import Axios from "axios"
import {useDispatch} from "react-redux"
const http = Axios.create({
    baseURL:"http://39.107.87.215:8889"
})

// 获取banner数据
function useBanner(){
   let dispatch = useDispatch();
   return function(banner){
    http.get(`/banner`).then((res)=>{  //用来返回一个函数，在组件的生命周期useEffect执行
        dispatch({
            type:"banner_data",
            data:res.data,
            loading:false
        })
    })
   }
}

//获取热门推荐数据
function useRecommend(){
    let dispatch = useDispatch();   //用来返回一个函数，在组件的生命周期useEffect执行
    return function(recommend){
        http.get(recommend).then((res)=>{
            dispatch({
                type:"recommend_data",
                data:res.data
            })
        }) 
    }
}

//获取热门推荐数据
function useNewDics(){
    let dispatch = useDispatch();   //用来返回一个函数，在组件的生命周期useEffect执行
    return function(newdics){
        http.get(newdics).then((res)=>{
            dispatch({
                type:"newdics_data",
                data:res.data
            })
        }) 
    }
}

//获取榜单数据
function useOrgdata(){
    let dispatch = useDispatch();   //用来返回一个函数，在组件的生命周期useEffect执行
    return function(Org){
      
        http.get(Org).then((res)=>{
            dispatch({
                type:"topListOrg_data",
                data:res.data
            })
        });
    }
}
function useUpdata(){
    let dispatch = useDispatch();
    return function(up){
        http.get(up).then((res)=>{
            dispatch({
                type:"topListUp_data",
                data:res.data
            });
        });
    }
}
function useNewdata(){
    let dispatch = useDispatch();
    return function(New){
        http.get(New).then((res)=>{
            dispatch({
                type:"topListNew_data",
                data:res.data
            })
        });
    }
}
export {useBanner,useRecommend,useNewDics,useOrgdata,useUpdata,useNewdata}