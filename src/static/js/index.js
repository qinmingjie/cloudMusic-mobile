import React from "react"
function bannerMove(data){
    let mohu = `
    filter: blur(800px);
    -webkit-filter: blur(800px);
    -moz-filter: blur(800px);
    -o-filter: blur(800px);
    -ms-filter: blur(800px);
    `;
   
    // console.log(data)
    //获取图片地址
    let Image = data.banners
    let banImgStr = ""
    let circleStr = ""
    Image.forEach(function(item,index){
        // banImgStr += `  
        //     <img src="${item.imageUrl}" index="${index}" style="z-index:${Image.length - index}">
        // `
        circleStr +=`
            <span class="circle" index="${index}"></span>
        `
    });
    
    ban.innerHTML = `
        <a href="" class="ban-img">
            <img src="${Image[0].imageUrl} "/>
        </a>
        <div class="click-circle">
            ${circleStr}
        </div>
    `
    brul.innerHTML = `<img src="${Image[0].imageUrl}" style="${mohu}"/>`
    console.log(Image[0].imageUrl)
    ;
    //初始化界面的节点
    let imgList = document.querySelector(".ban-img");
    let circle = document.querySelectorAll(".circle");
    circle[0].classList.add("redcircle");
    //图片位置
    let imgLoc = 0;
    let moveLeft = true;
    //透明度计时器
    
    let opanum = 0;
    
    //更新视图
    function render(){
        if(moveLeft){
            if(imgLoc>=0 && imgLoc<=Image.length-1){
                createCricle()
                // imgList.innerHTML = `<img src="${Image[imgLoc].imageUrl}"/>`;
                let opa = setInterval(function(){
                    if(opanum<1){
                        opanum += 0.2;
                        imgList.innerHTML = `<img src="${Image[imgLoc].imageUrl}" style="transtion:all 1s;opacity:${opanum}"/>`;
                    }else{
                        opanum = 0;
                        clearInterval(opa)
                        imgList.innerHTML = `<img src="${Image[imgLoc].imageUrl}" style="transtion:all 1s;opacity:1"/>`
                    };
        
                },100)
                brul.innerHTML = `<img src="${Image[imgLoc].imageUrl}" style="${mohu}"/>`
            }else if(imgLoc=Image.length){
                imgLoc = 0;
                createCricle()
                imgList.innerHTML = `<img src="${Image[imgLoc].imageUrl}"/>`;
                brul.innerHTML = `<img src="${Image[imgLoc].imageUrl}" style="${mohu}"/>`
            }
        }else{
           if(imgLoc<0){
                imgLoc = Image.length-1;
                createCricle()
                imgList.innerHTML = `<img src="${Image[imgLoc].imageUrl}"/>`;
                brul.innerHTML = `<img src="${Image[imgLoc].imageUrl}" style="${mohu}"/>`
           }else{
                createCricle()
                imgList.innerHTML = `<img src="${Image[imgLoc].imageUrl}"/>`;
                brul.innerHTML = `<img src="${Image[imgLoc].imageUrl}" style="${mohu}"/>`
           }
        }
    };

    //更新圆点
    function createCricle(){
        //circle
        //清空所有远点样式
        circle.forEach(function(item,index){
            item.classList.remove("redcircle");
            item.onclick = function(){
                //获取当前点击远点的位置
                let circleIndex = this.getAttribute("index");
                imgLoc = circleIndex;
                render();
            }
        });
        circle[imgLoc].classList.add("redcircle")
    }

    preNext.onclick = function(){
        clearInterval(function(){
            if(opanum<1){
                opanum += 0.2;
                imgList.innerHTML = `<img src="${Image[imgLoc].imageUrl}" style="transtion:all 1s;opacity:${opanum}"/>`;
            }else{
                opanum = 0;
                clearInterval(opa)
                imgList.innerHTML = `<img src="${Image[imgLoc].imageUrl}" style="transtion:all 1s;opacity:1"/>`
            };

        })
        moveLeft = true;
        imgList.innerHTML = "";
        imgLoc++;
        render();
    };

    prev.onclick = function(){
        clearInterval(outoplay)
        moveLeft = false;
        imgList.innerHTML = "";
        imgLoc--;
        render();
    }

    //设置自动移动
    let outoplay = setInterval(function(){
        preNext.onclick()
    },5000)

    //移出以上删除自动播放
    par_ban.onmousemove = function(){
        clearInterval(outoplay)
    }
    par_ban.onmouseleave = function(){
        outoplay = setInterval(function(){
            preNext.onclick()
        },5000)
    }
    cloudMusic.state=document.readyState;
    console.log(cloudMusic.state)
}

export default bannerMove