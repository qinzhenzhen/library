//导入jQuery文件   
// pic:每一张图片  lun:所有的轮播点   left:左箭头   right:右箭头
function bn(pic,lun,left,right) {
    lun.click(function () {
        var index = $(this).index();
        //把所有有active的元素去掉active,给当前正在点击的元素添加active
        lun.filter(".act").removeClass("act").end().eq(index).addClass("act");
        //banner操作同上
        pic.filter(".act").removeClass("act").end().eq(index).addClass("act");
        num=index;//解决鼠标再次移入问题
    });
    var t=setInterval(move,2000);
    var num=0;
    function move() {
        num++;
        if(num==pic.length) {
            num=0;
        }
        if(num==-1) {
            num=pic.length-1;
        }
        //把所有有active的元素去掉active,给当前正在点击的元素添加active
        lun.filter(".act").removeClass("act").end().eq(num).addClass("act");
        //banner操作同上
        pic.filter(".act").removeClass("act").end().eq(num).addClass("act");
    }
    pic.hover(function () {
        clearInterval(t)
    },function () {
        t=setInterval(move,2000);
    })
    left.click(function () {
        num-=2;
        move()
    })
    right.click(function () {
        move()
    })
}