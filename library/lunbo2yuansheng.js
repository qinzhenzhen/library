// bnall:每一张图片 btnall:所有的轮播点   left:左箭头   right:右箭头
function lunbo(bnall,btnall,left,right) {
    var t = setInterval(move, 2000);
    var num = 0;
    var z = 2;
    var flag = true;//避免点击速度太快引起的轮播紊乱
    function move() {
        bnall[num].classList.add("leftOut");
        btnall[num].classList.remove("active");
        num++;
        if (num == btnall.length) {
            num = 0;
        }

        bnall[num].classList.add("leftIn");
        btnall[num].classList.add("active");
        bnall[num].style.zIndex = z++;
        flag = true;
    }

    bnall.forEach(function (bn) {
        bn.addEventListener("animationend", function () {
            bn.className = "";
            flag = true;
        })
    })
    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        t = setInterval(move, 2000)
    }
    Array.from(btnall).forEach(function (btn, index) {
        btn.onclick = function () {
            if (index == num) {
                return;
            }
            if (index > num) {
                bnall[num].classList.add("leftOut");
                bnall[index].classList.add("leftIn");

            } else {
                bnall[num].classList.add("rightOut");
                bnall[index].classList.add("rightIn");
            }
            btnall[num].classList.remove("active");
            btn.classList.add("active");
            bnall[index].style.zIndex = z++;
            num = index;
        }
    })
    right.onclick = function () {
        if (flag) {
            move();
            flag = false;
        }
    }
    left.onclick = function () {
        if (flag) {
            bnall[num].classList.add("rightOut");
            btnall[num].classList.remove("active");
            num--;
            if (num == -1) {
                num = bnall.length - 1;
            }
            bnall[num].classList.add("rightIn");
            btnall[num].classList.add("active");
            bnall[num].style.zIndex = z++;
            flag = false;
        }
    }
}