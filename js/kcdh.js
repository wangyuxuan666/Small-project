var di=document.querySelector('.diss ')
var kcdh=document.querySelector('.kcdh')
var a1=document.getElementById('a1')
var dissl=document.querySelector('.dissl')
var dissr=document.querySelector('.dissr')

console.log(di)
// di.onclick=function(){
//     kcdh.style.display='none'
//     a1.style.display='block'
// }
di.addEventListener('click',function(){
    kcdh.style.display='none'
    a1.style.display='block'
})
di.addEventListener('mouseenter',function(){
    di.style.color='#fffbd5'
    dissl.className="disslbian dissl";
    dissr.className="dissrbian dissr";
    dissl.style.display="block";
    dissr.style.display="block";
})