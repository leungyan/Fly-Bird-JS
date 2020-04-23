/*创建管道*/
function Block() {
    this.upDivWrap=null;//上管道
    this.downDivWrap=null;//下管道
    //utils是随机函数
    this.downHeight=utils.randomNum(0,150);//下管道变化的高度
    this.gapHeight=utils.randomNum(150,160);//上下管道之间的距离
    this.upHeight =303 - this.downHeight - this.gapHeight;//上管道的高度就是 423-60*2=303,上下管道头部分别是60px,给大点值，让中间的值可以宽松点

    /*创建上管道最外面的div，头部的固定div，变化高度的div,构造函数,prototype原型,通用创造div的方法*/
    this.createDiv=function (url,height,positionType,left,top) {
        let newDiv=document.createElement("div");
        newDiv.style.width="62px";//头部和变化的管道的宽度都是62px
        newDiv.style.height=height+"px";
        newDiv.style.position=positionType;
        newDiv.style.left=left+"px";
        newDiv.style.top=top+"px";
        newDiv.style.backgroundImage=url;
        return newDiv;
    };
}
/*创建三个div*/
Block.prototype.createBlock=function () {
    let upDiv1=this.createDiv("url(images/up_mod.png)",this.upHeight);//变化的上管道高度
    let upDiv2=this.createDiv("url(images/up_pipe.png",60);//固定的上管道头部高度60
    this.upDivWrap=this.createDiv(null,null,"absolute","450");//上管道最外层div，450是距离左边450，一开始是看不见的，慢慢往左移动出现
    this.upDivWrap.appendChild(upDiv1);
    this.upDivWrap.appendChild(upDiv2);//形成上方管道

    //同理创建下方管道div
    let downDiv1=this.createDiv("url(images/down_mod.png)",this.downHeight);
    let downDiv2=this.createDiv("url(images/down_pipe.png)",60);
    this.downDivWrap=this.createDiv(null,null,"absolute","450",363 - this.downHeight);//423-60-this.downheight，表示下管道距离顶端的偏移量,423为草坪到顶端的距离
    this.downDivWrap.appendChild(downDiv2);//建立的时候要根据管道顺序
    this.downDivWrap.appendChild(downDiv1);//生成下方管道

    //将上下两段管道插入背景，
    wrapBg.appendChild(this.upDivWrap);
    wrapBg.appendChild(this.downDivWrap);

};
/*设置管道移动*/
Block.prototype.moveBlock=function () {
    this.upDivWrap.style.left=this.upDivWrap.offsetLeft - 3 +"px";//和草坪一样左移3px
    this.downDivWrap.style.left=this.downDivWrap.offsetLeft -3 +"px";

};