var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 22,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 22
        },

        576: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1
        }

    }
});