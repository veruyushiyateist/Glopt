$(document).ready(function(){
    $('.feed__carousel').slick({
        prevArrow: '<img class="slick-next" src="icons/slider/next.png">',
        nextArrow: '<img class="slick-prev" src="icons/slider/prev.png">'
      });
});


const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('header__menu_active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('header__menu_active');
        menuOpen = false;
    }
});