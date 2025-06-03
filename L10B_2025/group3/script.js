document.addEventListener("DOMContentLoaded", function () {
    const swiper1 = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 20000,
            disableOnInteraction: false,
        },
    });
});
