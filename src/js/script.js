window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    var header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add("nav_mod");
    }else if (scroll < 20){
        header.classList.remove("nav_mod");
    }
}

document.getElementById("btn_menu").addEventListener("click", showMenu);

var menu = document.getElementById("header");
var nav = document.getElementById("nav");


function showMenu() {
    menu.classList.toggle('move__content');
    nav.classList.toggle('move__nav');
}

window.addEventListener("resize", function(){
    if (window.innerWidth > 768){
        menu.classList.remove('move__content');
        nav.classList.remove('move__nav');  
    }
}) 