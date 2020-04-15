import  React, { useEffect,useState, createElement} from "react"
import {useSelector} from "react-redux"
import {useNewDics} from "../store/action/index"
import {useLocation} from "react-router-dom"
function NewDics(){
    let loca = useLocation().pathname
    //获取管理状态仓库
    let state = useSelector((state)=>{
        return state.newdicsReducer;
    })
    //获取仓库管理函数操作状态函数，获取新碟上架数据
    let getData = useNewDics()
    useEffect(()=>{
        getData("/album/newest")
    },[loca])
    let data = state.data
    let [ulloc,setul] = useState(1)
    let [time,setTime] = useState(true)
    let [userClick,setClick] = useState(false)
    let [contro,setcontro] = useState(false)
    let [docuwidth,setwidth] = useState(0)
    useEffect(()=>{
        if(data.length==undefined){
                // 获取元素节点和信息1克隆2克隆  再点3删除回到1
            let ul = document.querySelector(".newDic-Name")
            let list = ul.querySelectorAll(".newDicList")
            let liwidth = list[0].clientWidth;
            let next = document.querySelector(".newDic-next")
            let prev = document.querySelector(".newDic-prev")
            setwidth(liwidth)
            //右击移动图片计时器
            function imgmoveR(){
                setClick(true);
                // console.log(ulloc)
                let rightmove = setInterval(function(){
                    //获取当前图片的margin-left值
                    var imgLoction = parseInt(window.getComputedStyle(ul,null).left);
                    //每次的left值都要改变
                    ul.style.left = imgLoction + Math.floor((-liwidth*(ulloc*5)-imgLoction)/5) + "px";
                    //当为图片宽度的整数时清除计时器
                    // console.log(list.length/5,list.length/5-1,ulloc)
                    if(imgLoction===-(ulloc*5*liwidth)){
                        clearInterval(rightmove);
                        setClick(false);
                        //获取插入假图片后当前的图片总数
                        // console.log(ulloc,list.length/5)
                        //此时的n是真实图片个数4,试图中对应的是插入后图片节点的最后一张图位置
                        if(ulloc===3){
                            // console.log("该回到第一份")
                            console.log(liwidth)
                            ul.style.left = -(parseInt(liwidth)*5) +"px";
                            setul(1);
                            setClick(false);
                        }
                    }
                },10)
            }
            
            next.onclick=function(){
                if(!userClick){
                    setul(++ulloc)
                    imgmoveR()
                }
                
            }

            //右击移动图片计时器
            function imgmoveL(){
                setClick(true);
                console.log(ulloc)
                let leftmove = setInterval(function(){
                    //获取当前图片的margin-left值
                    var imgLoction = parseInt(window.getComputedStyle(ul,null).left);
                    //每次的left值都要改变
                    ul.style.left = imgLoction + Math.ceil((-liwidth*(ulloc*5)-imgLoction)/5) + "px";
                    //当为图片宽度的整数时清除计时器
                    // console.log(list.length/5,list.length/5-1,ulloc)
                    console.log(imgLoction,-(ulloc*5*liwidth),ulloc)
                    if(imgLoction===-(ulloc*5*liwidth)){
                        console.log(123)
                        clearInterval(leftmove);
                        setClick(false);
                        //获取插入假图片后当前的图片总数
                        // console.log(ulloc,list.length/5)
                        //此时的n是真实图片个数4,试图中对应的是插入后图片节点的最后一张图位置
                        if(ulloc===0){
                            console.log("该回到第一份")
                            console.log(liwidth)
                            ul.style.left = -(parseInt(liwidth)*10) +"px";
                            setul(2);
                            setClick(false);
                        }
                    }
                },10)
            }

            prev.onclick = function(){
                if(!userClick){
                    setul(--ulloc)
                    imgmoveL()
                }
            }
            
            //初始化是克隆节点
            function onceFn(fn){
                return function(){
                    if(time){
                        // console.log("函数执行"+time)
                        setTime(false);
                        fn()
                    }
                }
            }

            let cloneNext = function(){
                return data.albums.slice(0,5).map((item,index)=>{
                    let clonelist = document.createElement("li")
                    clonelist.setAttribute("class","newDicList cloneLi")
                    clonelist.innerHTML += `<div key=${index}>
                            <div class="newDic-muc">
                                <img src=${item.picUrl} alt=""/>
                                <a href="" class="newDic-cover"></a>
                                <a href="" class="newDic-play"></a>
                            </div>
                            <p class="dictxt"><a href="" class="newDic-name">${item.name}</a></p>
                            <p class="dictxt"><a href="" class="newDic-txt">${item.artist.name}</a></p>
                        </div>
                    `
                    ul.appendChild(clonelist)
                })
            }

            let clonePrev = function(){
                return data.albums.slice(5,10).map((item,index)=>{
                    let clonelist = document.createElement("li")
                    clonelist.setAttribute("class","newDicList cloneLi")
                    clonelist.innerHTML += `<div key=${index}>
                            <div class="newDic-muc">
                                <img src=${item.picUrl} alt=""/>
                                <a href="" class="newDic-cover"></a>
                                <a href="" class="newDic-play"></a>
                            </div>
                            <p class="dictxt"><a href="" class="newDic-name">${item.name}</a></p>
                            <p class="dictxt"><a href="" class="newDic-txt">${item.artist.name}</a></p>
                        </div>
                    `
                    ul.insertBefore(clonelist,list[0]) 
                    
                    // console.log(clonelist)
                })
            }
            // 删除克隆节点
            let remove = function(direction){
                let newlist = ul.querySelectorAll(".newDicList")
                console.log("kankan")
                if(direction==="prev"){
                    Array(...newlist).slice(0,5).map((item)=>{
                        ul.removeChild(item)
                    })
                }else if(direction==="next"){
                    let newlist = ul.querySelectorAll(".newDicList")
                    console.log(Array(...newlist).slice(-5,0))
                    Array(...newlist).slice(-5,0).map((item)=>{
                        ul.removeChild(item)
                    })
                }
            }
            onceFn(cloneNext)()
            onceFn(clonePrev)()
    }       
            
           
    })
    return(
        <div className="dic-muc">
            <div className="newDic-prev"></div>
            <div className="newDic">
                <ul className="newDic-Name" style={{left:-(parseInt(docuwidth)*5)}}>
                   {data.length===undefined?(data.albums.slice(0,10).map((item,index)=>{
                       return (
                        <li className="newDicList" key={item.artist.id}>
                            <div className="newDic-muc">
                                <img src={item.picUrl} alt=""/>
                                <a href="" className="newDic-cover"></a>
                                <a href="" className="newDic-play"></a>
                            </div>
                       <p className="dictxt"><a href="" className="newDic-name">{item.name}</a></p>
                       <p className="dictxt"><a href="" className="newDic-txt">{item.artist.name}</a></p>
                        </li>
                       )
                   })):""}
                </ul>
            </div>
            <div className="newDic-next"></div>
        </div>
    )
}

export default NewDics