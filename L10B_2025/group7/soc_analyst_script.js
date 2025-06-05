document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('socSliderContainer');

    if (sliderContainer) {
        const sliderWrapper = sliderContainer.querySelector('.soc-slider-wrapper');
        const slides = sliderContainer.querySelectorAll('.soc-slide');
        const prevBtn = sliderContainer.querySelector('.soc-prev-btn');
        const nextBtn = sliderContainer.querySelector('.soc-next-btn');

        let currentIndex = 0;

        const updateSlider = () => {
            const offset = -currentIndex * 100;
            sliderWrapper.style.transform = translateX(${offset}%);
        };

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            updateSlider();
        });

        updateSlider();
    }
});
