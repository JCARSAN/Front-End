window.onload = function(){
    
    //let pageYbefore = window.pageYOffset;    
    let pageYafter = 0;
    let i = 0;
    let banner = document.getElementsByClassName('banner');
    window.onscroll = function(){
        pageYafter = window.pageYOffset;      
        i = Math.ceil(pageYafter*0.6);
        banner[0].style.backgroundPosition = "0px "+i+"px";  
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
        },500);
        //nav_overlay_content.style.display = 'none';
        //nav_overlay.style.display = 'none';
    }
}