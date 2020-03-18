// 动画
var dxiang = null;

function anmine(shui, ting, bu) {


    clearInterval(shui.dxiang);
    var kai = shui.offsetLeft
    shui.dxiang = setInterval(function () {

        if (kai > ting) {
            bu = -Math.abs(bu)
        }
        if (Math.abs(bu) >= Math.abs(kai - ting)) {
            kai = ting;
            clearInterval(dxiang);
        } else {
            kai += bu;
        }
        // console.log(ting)
        shui.style.left = kai + 'px'
    }, 20)
}


var lb_xt_li = document.querySelectorAll('.lb_xt ul li')
// console.log(lb_xt_li)
for (var i = 0; i < 7; i++) {
    lb_xt_li[i].style.left = Number(i * 250) + 'px';
}
var lb_bk_dt = document.querySelectorAll('.lb_bk_dt li')
var lb_bk_dt_div = document.querySelectorAll('.lb_bk_dt_div')
var lb_bk_dt_img = document.querySelectorAll('.lb_bk_dt li img')

var lb_bk_ul = document.querySelector('.lb_bk_ul')
var lb_bk_ul_li=document.querySelectorAll('.lb_bk_ul li')
var lb_bk_ul_li_img=document.querySelectorAll('.lb_bk_ul_li img')
// console.log(lb_bk_ul_li_img)
var lb_bk_lb = document.querySelector('.lb_bk_lb')
for (var i = 1; i < 8; i++) {
    lb_bk_dt[i].onmouseenter = function () {
        var lb_bk_dt_zd = this.dataset.lb_bk_li;
        
        var abc=document.querySelector('.lb_bk_div_bian')
        var def=document.querySelector('.lb_bk_li_bian')
        if(abc!=null){
        console.log(abc)
        abc.className= "lb_bk_div_bian1 lb_bk_dt_div"
        def.className = "lb_bk_dt_bt1 lb_bk_dt_bt1"
        }
        lb_bk_dt_div[lb_bk_dt_zd].className = "lb_bk_div_bian lb_bk_dt_div"
        lb_bk_dt_img[lb_bk_dt_zd].className = "lb_bk_img_bian"
        this.className = "lb_bk_dt_bt1 lb_bk_li_bian"
        anmine(lb_bk_ul, 457-(Number(lb_bk_dt_zd) * 250), 50)
        for(var j=0;j<8;j++){
            if(j==lb_bk_dt_zd){
                lb_bk_ul_li[lb_bk_dt_zd].className='lb_bk_ul_li lb_xt_bian'
                lb_bk_ul_li_img[lb_bk_dt_zd].className='lb_xt_img_bian lb_bk_ul_li_img'
            }
            else{
                lb_bk_ul_li[j].className='lb_bk_ul_li lb_xt_bian1'
                lb_bk_ul_li_img[j].className='lb_xt_img_bian1 lb_bk_ul_li_img'
            }
        }
       
    }

    lb_bk_dt[i].onmouseleave = function () {
        var lb_bk_dt_zd = this.dataset.lb_bk_li;
        // lb_bk_dt_div[lb_bk_dt_zd].className = "lb_bk_div_bian1 lb_bk_dt_div"
        lb_bk_dt_img[lb_bk_dt_zd].className = "lb_bk_img_bian1"
        // this.className = "lb_bk_dt_bt1 "
        
    }

}




    // 轮播效果

    var c1_ry_lb_ul=document.querySelector('.c1_ry_lb_ul')
    var c1_ry_jtl=document.querySelector('.c1_ry_jtl')
    var c1_ry_jtr=document.querySelector('.c1_ry_jtr')
    var  c1_ry_lb=document.querySelector(' .c1_ry_lb')
    // console.log(c1_ry_lb)
    for(var i=1;i<17;i++){
        var c1_ry_lb_ul_li=document.createElement('li')
        c1_ry_lb_ul.appendChild(c1_ry_lb_ul_li)
        c1_ry_lb_ul_li.style.backgroundImage="url('img/ry/"+i+".jpg')"
        c1_ry_lb_ul_li.classList.add('c1_ry_lb_ul_li')
    }   
 
    var c1_ry_lb_zi_ul=document.querySelector('.c1_ry_lb_zi_ul');
    var c1_all=['哪吒之魔童降世','使徒行者2','铤而走险','徒手攀登','愤怒的小鸟','速度与激情9','重生归来','烈火英雄','哪吒之魔童降世']
    // console.log(c1_ry_lb_zi_ul)
    for(var i=0;i<9;i++){
        var c1_ry_lb_zi_ul_li=document.createElement('li')
        c1_ry_lb_zi_ul_li.innerHTML=c1_all[i]
        c1_ry_lb_zi_ul.appendChild(c1_ry_lb_zi_ul_li);
        
    }

    var c1_ry_jtlnull=0
    var c1_ry_zinull=0
    var c1_ry_11=3
    var c1_ry_lb_ul_liall=document.querySelectorAll('.c1_ry_lb_ul_li')
    c1_ry_lb_ul_liall[c1_ry_11].classList.add('c1_ry_lb_ul_li_bian')
    c1_ry_jtr.onclick=function(){
        
        if( c1_ry_jtlnull==8){
            c1_ry_jtlnull=0;
            c1_ry_lb_ul.style.left='0px'
        }
        c1_ry_jtlnull++;
        anmine(c1_ry_lb_ul, -122.72*c1_ry_jtlnull, 50)
        // if()
        c1_ry_lb_ul_liall[c1_ry_11].classList.remove('c1_ry_lb_ul_li_bian')
        if(c1_ry_11==11){
            c1_ry_11=3
            }
        ++c1_ry_11
    // console.log(c1_ry_11)
       
        c1_ry_lb_ul_liall[c1_ry_11].className="c1_ry_lb_ul_li c1_ry_lb_ul_li_bian"

        if(c1_ry_zinull==8){
            c1_ry_zinull=0;
            c1_ry_lb_zi_ul.style.left=0+'px'
        }
        ++c1_ry_zinull
        anmine(c1_ry_lb_zi_ul,-300*c1_ry_zinull,50)
        
    }
    c1_ry_jtl.onclick=function(){
        
        if( c1_ry_jtlnull==0){
            c1_ry_jtlnull=8;
            c1_ry_lb_ul.style.left='-981.76px'
        }
        c1_ry_jtlnull--;
        anmine(c1_ry_lb_ul, -122.72*c1_ry_jtlnull, 50)
        c1_ry_lb_ul_liall[c1_ry_11].classList.remove('c1_ry_lb_ul_li_bian')
        if(c1_ry_11==3){
        c1_ry_11=11
        }
        --c1_ry_11
    // console.log( c1_ry_lb_ul_liall[c1_ry_11])
       
        c1_ry_lb_ul_liall[c1_ry_11].className="c1_ry_lb_ul_li c1_ry_lb_ul_li_bian"
        

        if(c1_ry_zinull==0){
            c1_ry_zinull=8;
            c1_ry_lb_zi_ul.style.left=-2400+'px'
        }
        --c1_ry_zinull
        anmine(c1_ry_lb_zi_ul,-300*c1_ry_zinull,50)
    }
    c1_ry_jtr.onmouseenter=function(){
        this.style.backgroundColor='rgba(255, 255, 255, 0.6)'

    }
    c1_ry_jtl.onmouseenter=function(){
        this.style.backgroundColor='rgba(255, 255, 255, 0.6)'

    }
    c1_ry_jtl.onmouseleave=function(){
        this.style.backgroundColor='rgba(255, 255, 255, 0.2)'

    }
    c1_ry_jtr.onmouseleave=function(){
        this.style.backgroundColor='rgba(255, 255, 255, 0.2)'

    }

   






    var c1_ry_dong=null;
    function c1_papa(){ 
        c1_ry_dong=setInterval(function(){
        c1_ry_jtr.onclick()
    },3000)}
    c1_ry_lb.onmouseenter=function(){
        clearInterval(c1_ry_dong)
    }
    c1_ry_lb.onmouseleave=function(){
        c1_papa()
    }
    c1_papa()

    





    var c1_pf_zhu_li=document.querySelectorAll('.c1_pf_zhu ol li');
    console.log(c1_pf_zhu_li)
    var c1_pf_hb=document.querySelectorAll('.c1_pf_hb')
    console.log(c1_pf_hb)
    for(var i=0;i<10;i++){
        c1_pf_zhu_li[i].index=i;
        c1_pf_zhu_li[i].onmouseenter=function(){
            var c1_pf_zhu_lo=document.querySelector('.c1_pf_zhu_te');
            // console.log(c1_pf_zhu_lo)
            c1_pf_zhu_lo.classList.remove('c1_pf_zhu_te')
            this.classList.add('c1_pf_zhu_te')
            for(var j=0;j<10;j++){
                c1_pf_hb[j].style.display='none'
            }
            var ssss=this.index
            c1_pf_hb[ssss].style.display='block'
        }
    }



    // 猫爪
    var tm1=document.querySelector('.tm1')
    var tm2=document.querySelector('.tm2')
    var sy_bk=document.querySelectorAll('.sy_bk')
    var sy_bk1all=document.querySelector('.sy_bk1all')
    console.log(sy_bk1all)
    tm1.onclick=function(){
        tm2.classList.add('tm2bian')
    }
    var sy_bkk=null
    tm2.onclick=function(){
        sy_bk[0].classList.add('sy_bk_bian')
        sy_bk[1].classList.add('sy_bk_bian')
        sy_bk[2].classList.add('sy_bk_bian')
        sy_bk[3].classList.add('sy_bk_bian')
        sy_bk1all.classList.add('sy_bk_bian1')
        sy_bkk=setTimeout(function (){
            sy_bk1all.style.display='block'
        },3000)
        console.log(sy_bkk)
    }



    var lxh3all=document.querySelectorAll('.lxh3 ul li')
    var lxh1all=document.querySelectorAll('.lxh1 div')
    var lxh1=document.querySelector('.lxh1')
    var saos1=null;
    var saos2=null;
    var saos3=null;
    var saos4=null;
    var saos5=null;
    var saos6=null;
    var saos7=null;
    var saos11=null;
    var saos22=null;
    var saos33=null;
    var saos44=null;
    var saos55=null;
    var saos66=null;
    var saos77=null;
    var lxhsss=0;

    var lxh3=document.querySelector('.lxh3')
    lxh3.addEventListener('click',function(){
        lxh1all.forEach(function(ele,i){
            ele.className="didv pasa"+i+" lxhbian"+i+""
        })
        lxhsss++

        lxh1.className='lxh1';
        switch(lxhsss){
            case 0:
                    lxh1.className='lxh1 lxhzhuan0';
            break;
            case 1:
                    lxh1.className='lxh1 lxhzhuan1';
            break;
            case 2:
                    lxh1.className='lxh1 lxhzhuan2';
            break;
            case 3:
                    lxh1.className='lxh1 lxhzhuan3';
            break;
            case 4:
                    lxh1.className='lxh1 lxhzhuan4';
            break;
            case 5:
                    lxh1.className='lxh1 lxhzhuan5';
            break;
            case 6:
                    lxh1.className='lxh1 lxhzhuan6';
            break;
            case 7:
                    lxh1.className='lxh1 lxhzhuan7';
            break;
            case 8:
                    lxh1.className='lxh1 lxhzhuan8';
            break;
            case 9:
                    lxh1.className='lxh1 lxhzhuan9';
            break;
            case 10:
                    lxh1.className='lxh1 lxhzhuan10';
            break;
            case 11:
                    lxh1.className='lxh1 lxhzhuan11';
            break;
            case 12:
                    lxh1.className='lxh1 lxhzhuan12';
            break;
            case 13:
                    lxh1.className='lxh1 lxhzhuan13';
            break;
            case 14:
                    lxh1.className='lxh1 lxhzhuan14';
            break;
            case 15:
                    lxh1.className='lxh1 lxhzhuan15';
            break;
            case 16:
                    lxh1.className='lxh1 lxhzhuan16';
            break;
            case 17:
                    lxh1.className='lxh1 lxhzhuan17';
            break;
            case 18:
                    lxh1.className='lxh1 lxhzhuan18';
            break;
        }

        saos=setTimeout(function(){
            lxh1all.forEach(function(ele,i){
                ele.className="didv pasa"+i+" lxhbian"+i+"1"
            })
        },4000)
        saos1=setTimeout(function(){
            lxh3all.forEach(function(ele,i){
                saos11=setTimeout(function(){ ele.className="lxh3li lxh3dh1"},150*i)
            })
        },1000)
        saos1=setTimeout(function(){
            lxh3all.forEach(function(ele,i){
                saos11=setTimeout(function(){ ele.className="lxh3li lxh3dh2"},150*i)
            })
        },1150)
        saos1=setTimeout(function(){
            lxh3all.forEach(function(ele,i){
                saos11=setTimeout(function(){ ele.className="lxh3li lxh3dh3"},150*i)
            })
        },1300)
        saos1=setTimeout(function(){
            lxh3all.forEach(function(ele,i){
                saos11=setTimeout(function(){ ele.className="lxh3li lxh3dh4"},150*i)
            })
        },1450)
        saos1=setTimeout(function(){
            lxh3all.forEach(function(ele,i){
                saos11=setTimeout(function(){ ele.className="lxh3li lxh3dh5"},150*i)
            })
        },1600)
        saos1=setTimeout(function(){
            lxh3all.forEach(function(ele,i){
                saos11=setTimeout(function(){ ele.className="lxh3li lxh3dh6"},150*i)
            })
        },1750)
        saos1=setTimeout(function(){
            lxh3all.forEach(function(ele,i){
                saos11=setTimeout(function(){ ele.className="lxh3li"},150*i)
            })
        },1900)
    })
    var chaolianjie=document.querySelector('.chaolianjie')
    chaolianjie.onclick=function(){
        if(lxhsss==1){
            this.href="../高超个人项目 -1/index.html"
        }
        if(lxhsss==2){
            this.href="../PK/index.html"
        }
        if(lxhsss==3){
            this.href="../白雪佳/b_index.html"
        }

    }