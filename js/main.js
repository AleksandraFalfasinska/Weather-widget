var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',

    // Arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // Responsive breakpoints
    breakpoints: {
        //  width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        //  width is >= 480px
        480: {
            slidesPerView: 6,
            spaceBetween: 30
        },
        //  width is >= 640px
        640: {
            slidesPerView: 9,
            spaceBetween: 40
        }
    }
})