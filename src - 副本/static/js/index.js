//媒体标签和自适应单位设置

let head = document.querySelector("head")
let piex = window.devicePixelRatio;
let meta = document.createElement("meta")
let scale = 1/piex;
// meta.name="viewport"
meta.content=`width=device-width,user-scalable=no,initial-scale=${scale},minimum-scale=${scale},maximum-scale=${scale}`
// let mta = `<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=${scale},minimum-scale=${scale},maximum-scale=${scale}">`
head.appendChild(meta)
let html = document.documentElement
let dWidth = html.clientWidth;
let font=dWidth/72 + "px"
html.style.fontSize = font;

//判断设备是否是移动设备
let usedev = navigator.userAgent
let dev = [
    "android",
    "iphone",
    "ipad",
    "symbianos",
    "mobile",
    "Mobile"
]
dev.map((item,index)=>{
    if(usedev.indexOf(item)!==-1){
        console.log(usedev)
        return import("../css/mobile.css")
    }
})