document.addEventListener('DOMContentLoaded', function() {

    const sliderContainer = document.getElementById('socSliderContainer');
    if (sliderContainer) {
        const sliderWrapper = sliderContainer.querySelector('.soc-slider-wrapper');
        const slides = sliderWrapper.querySelectorAll('.soc-slide');
        const prevBtn = sliderContainer.querySelector('.soc-prev-btn');
        const nextBtn = sliderContainer.querySelector('.soc-next-btn');

        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSliderPosition() {
            const offset = -currentIndex * 100;
            sliderWrapper.style.transform = `translateX(${offset}%)`;
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', showPrevSlide);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', showNextSlide);
        }
    }
});
