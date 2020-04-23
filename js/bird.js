/*创建小鸟*/
let bird ={
    /*单例模式*/
    flyTimer:null,//飞行定时器
    wingTimer:null,//翅膀下降摆动定时器
    ele:document.createElement("div"),//元素div
    //创建小鸟对象
    addBird:function (parentObj) {//addbird创建小鸟元素
        this.ele.className="birdStyle";//类名，写好的样式
        parentObj.appendChild(this.ele);
    },
    fallSpeed:0,//小鸟下落速度
    flyBird:function () {//控制小鸟飞翔下落的函数
        bird.flyTimer=setInterval(fly,40);
        function fly() {
            bird.ele.style.top=bird.ele.offsetTop+bird.fallSpeed++ +"px";
            //上下边界
            if(bird.ele.offsetTop<0){//设置在顶部的速度
                bird.fallSpeed=2;
            }
            if(bird.ele.offsetTop>=395){//草地距上423px，减去小鸟28px的高度，423-28=395，大于这个值是已经落地的，这时速度要为2
                bird.fallSpeed=0;
                bird.ele.style.top=395+"px";//随速度下降，距离顶部的距离也越大，大致395px,最远
                clearInterval(bird.flyTimer);//去除下降定时器
                clearInterval(bird.wingTimer);//去除翅膀下降摆动定时器
            }
            if(bird.fallSpeed>12){
                bird.fallSpeed=12;
        }
    }
},
    wingWave: function () { //控制小鸟煽动翅膀的函数
       var up=["url(images/up_bird0.png)","url(images/up_bird1.png)"];
       var down=["url(images/down_bird0.png)","url(images/down_bird1.png)"];
       var i=0;var j=0;
       bird.wingTimer=setInterval(wing,120);
       function wing() {
           if (bird.fallSpeed>0){//当下降速度>0即在下降，则切换背景图为下降的
               bird.ele.style.backgroundImage=down[i++];
               if(i==2){//数组中只有两个值，循环
                   i=0;
               }
               //当下降速度<0，即上升，切换背景图为上升的
               if (bird.fallSpeed<0){
                   bird.ele.style.backgroundImage=up[j++];
                   if(j==2){
                       j=0;
                   }
               }
           }
       }
    },
};