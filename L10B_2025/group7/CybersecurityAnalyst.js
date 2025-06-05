document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer');

    if (sliderContainer) {
        const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
        const slides = sliderWrapper.querySelectorAll('.slide');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');

        let currentIndex = 0;
        let autoSlideInterval;
        const autoSlideDelay = 6000;

        const totalSlides = slides.length;

        if (totalSlides <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return;
        }

        function updateSliderPosition() {
            sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        const goToNextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        };

        const goToPrevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToNextSlide();
                resetAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                goToPrevSlide();
                resetAutoSlide();
            });
        }

        const startAutoSlide = () => {
            stopAutoSlide();
            autoSlideInterval = setInterval(goToNextSlide, autoSlideDelay);
        };

        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        };

        const resetAutoSlide = () => {
            stopAutoSlide();
            startAutoSlide();
        };

        updateSliderPosition();
        startAutoSlide();

        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
});
