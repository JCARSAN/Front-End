window.onload = function(){
    let menu = document.getElementsByClassName('main-menu');
    let header = document.getElementById('home');
    window.onscroll = function(){
        if(window.pageYOffset >= header.offsetHeight){
            menu[0].style.position = 'fixed';
            menu[0].style.top = 0;  
        }else{
            menu[0].style.position = 'static';
        }
    }

    let menu_responsive_btn = document.getElementById('menu-responsive-btn');
    let nav_overlay = document.getElementById('menu-overlay');
    let nav_overlay_content = document.getElementById('menu-overlay-content'); 
    menu_responsive_btn.onclick = function(){
        nav_overlay.style.width = '100%';
        //nav_overlay_content.style.display = 'block';
        //nav_overlay.style.display = 'block';
        nav_overlay_content.style.width = '50%';
    }

    let btn_close_menu = document.getElementById('btn-exit');
    btn_close_menu.onclick = function(){
        nav_overlay_content.style.width = '0%';
        let interval = setTimeout(function () {
            nav_overlay.style.width = '0%'; 
        },2000);
        //nav_overlay_content.style.display = 'none';
        //nav_overlay.style.display = 'none';
    }
}