window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 1000);
}



document.addEventListener('DOMContentLoaded', function() {

    // кнопка стрелка
    let toTopBtn = document.querySelector('.pageUp');
    window.onscroll = function () {
        if (window.pageYOffset > 500) {
            toTopBtn.style.display = 'block'
        } else {
            toTopBtn.style.display = 'none'
        }
    }

    // слайдер Swiper
    new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        speed: 500,
        autoHeight: true,

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
        },
    
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        watchOverflow: true,
        freeMode: true,
        preloadImages: false,
        lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    });

    // Галерея
    const lightbox = GLightbox({'selector': 'glightbox'});

    // меню гамбургер
    let humburger = document.querySelector('.humburger');
    let menu = document.querySelector('.menu__navigation-ul');
    let body = document.querySelector('body');
    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger-active');
        if (humburger.classList.contains("humburger-active") == !null) {
            menu.classList.add('menu-active');
            body.classList.toggle('lock');
        } else {
            menu.classList.remove('menu-active');
            body.classList.toggle('lock');
          }       
        
    })

    let link = document.querySelectorAll('.menu__navigation-li .link');
    for (let index = 0; index < link.length; index++) {
        link[index].addEventListener('click', () => {
            humburger.classList.remove('humburger-active');
            menu.classList.remove('menu-active');
            body.classList.remove('lock');  
        }) 
    }


    // модалье окна
    let overlay = document.querySelector('.overlay');
    let but = document.querySelector('.objects-icon-question');
    let button = document.querySelector('.button-modal');
    let modal = document.querySelector('#modal1')

    but.addEventListener('click', () => {
        overlay.classList.add('overlay-active');
        body.classList.add('lock');
        modal.style.display = 'block';
    })
    button.addEventListener('click', () => {
        overlay.classList.remove('overlay-active');
        body.classList.remove('lock');
        modal.style.display = 'none';
    })


new WOW().init();


}, false);


// Функция для преобразования изображений

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

