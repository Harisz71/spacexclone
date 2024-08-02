function convertmenuicon(){
    let btn=document.getElementById('menu-btn');
    let overlay=document.getElementById('overlay');
    const menu = document.getElementById("mobile-menu");
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('show-menu');
}

