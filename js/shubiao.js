var shubiao_div=document.createElement('div')
var html=document.querySelector('html')
var content1=document.querySelector('.content1')
html.appendChild(shubiao_div)
shubiao_div.className='shubiao'
html.onmousemove=function(e){
     shubiao_div.style.left=e.clientX-45+'px';
     shubiao_div.style.top=e.clientY-45+'px';

}

var lb=document.querySelector('.lb')
shubiao_div.onclick=function(){
    var shubiaoi=Math.floor(Math.random()*6);
    if( shubiaoi==0){
    shubiao_div.className="shubiao shubiaodian"
    lb.className='lb shubiaodian w'
    content1.className="content1 shubiaodian"
    }
    if( shubiaoi==1){
    shubiao_div.className="shubiao shubiaodian1"
    lb.className='lb shubiaodian1 w'
    content1.className="content1 shubiaodian1"

    }
    if( shubiaoi==2){
    shubiao_div.className="shubiao shubiaodian2"
    lb.className='lb shubiaodian2 w'
    content1.className="content1 shubiaodian2"


    }
    if( shubiaoi==3){
    shubiao_div.className="shubiao shubiaodian3"
    lb.className='lb shubiaodian3 w'
    content1.className="content1 shubiaodian3"


    }
    if( shubiaoi==4){
    shubiao_div.className="shubiao shubiaodian4"
    lb.className='lb shubiaodian4 w'
    content1.className="content1 shubiaodian4"


    }
    if( shubiaoi==5){
    shubiao_div.className="shubiao shubiaodian5"
    lb.className='lb shubiaodian5 w'
    content1.className="content1 shubiaodian5"


    }
}