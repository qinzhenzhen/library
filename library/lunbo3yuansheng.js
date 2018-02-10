//inner  装所有banner的大盒子，w代表每一张banner的宽
// box  外部的大盒子  
// next 右键  prev 左键
//num 一次呈现图片的张数
// banner顺序  如果有六张，顺序为  1 2 3 4 5 6 1 2 3 4 5 6 ，inner的left值为第四张图片的位置 -295*3
function lunbo(inner,box,next,prev,num,w) {
    var flag=true;//避免点击速度太快引起的轮播紊乱
    var set=setInterval(move,2000);
    function move() {
        // if(num1==4||num1==6){
        inner.style.transition="all 1s";
        // }
        num++;
        inner.style.marginLeft=-w*num+"px";
    }
    inner.addEventListener("transitionend",function () {
        if(num==12){//大盒子里所有图片的3/4张  假设一次呈现的图片张数为4
            inner.style.transition="none";
            num=4;//呈现的图片数
            inner.style.marginLeft=-w*num+"px";
        }else if(num==0){
            inner.style.transition="none";//注意
            num=8;//大盒子里所有图片的1/2张
            inner.style.marginLeft=-w*num+"px";
        }
        flag=true;
    })
    box.onmouseover=function () {
        clearInterval(set)
    }
    box.onmouseout=function () {
        set=setInterval(move,2000)
    }
    next.onclick=function () {
        if(flag){
            flag=false;
            move();
        }
    }
    prev.onclick=function () {
        if(flag){
            flag=false;
            num-=2;
            move();
        }
    }
}