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
}