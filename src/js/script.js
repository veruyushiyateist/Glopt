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

const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    // spaceBetween: 45,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          centeredSlides: false
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          centeredSlides: false
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
          centeredSlides: true
        }

      }
});