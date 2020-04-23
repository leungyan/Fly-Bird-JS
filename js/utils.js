
/*随机函数*/
let utils={
    randomNum:function (min,max) {//区间
        return Math.round(Math.random()*(max-min)+min);
    },
    /*管道碰撞检测*/
    crash:function (obj1,obj2) {//obj1管道，obj2小鸟
        //左侧碰撞
        let obj1Left=obj1.offsetLeft;
        let obj1Width=obj1.offsetLeft+obj1.offsetWidth;
        /*高度碰撞检测*/
        let obj1Top=obj1.offsetTop;
        let obj1Height=obj1.offsetTop+obj1.offsetHeight;
        /*小鸟碰撞检测*/
        let obj2Left=obj2.offsetLeft;
        let obj2Width=obj2.offsetLeft+obj2.offsetWidth;
        let obj2Top=obj2.offsetTop;
        let obj2Height=obj2.offsetTop+obj2.offsetHeight;
        /*三种情况碰撞检测,左，右，上，下*/
        if(!(obj1Left > obj2Width || obj1Width < obj2Left ||
            obj1Top > obj2Height || obj1Height < obj2Top)){
            return true;
        }
            return false;
    }
};