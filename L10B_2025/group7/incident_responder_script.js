document.addEventListener('DOMContentLoaded', () => {

    const initializeSlider = (containerId, autoSlideInterval = 5000) => {
        const sliderContainer = document.getElementById(containerId);
        if (!sliderContainer) {
            console.warn(`Slider container with ID "${containerId}" not found.`);
            return;
        }

        const sliderWrapper = sliderContainer.querySelector('.ir-slider-wrapper, .education-slider-wrapper');
        const slides = sliderWrapper.querySelectorAll('.ir-slide, .education-slide');
        const prevBtn = sliderContainer.querySelector('.ir-prev-btn, .education-prev-btn');
        const nextBtn = sliderContainer.querySelector('.ir-next-btn, .education-next-btn');
        const dotsContainer = sliderContainer.querySelector('.ir-slider-dots');

        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoSlideTimer;

        if (totalSlides === 0) {
            console.warn(`No slides found in slider container with ID "${containerId}".`);
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
            return;
        }

        const createDots = () => {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('ir-dot');
                dot.dataset.index = i;
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSliderPosition();
                    resetAutoSlide();
                });
                dotsContainer.appendChild(dot);
            }
        };

        const updateSliderPosition = () => {
            const offset = -currentIndex * 100;
            sliderWrapper.style.transform = `translateX(${offset}%)`;
            updateDots();
        };

        const updateDots = () => {
            if (!dotsContainer) return;
            const dots = dotsContainer.querySelectorAll('.ir-dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };

        const showNextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        };

        const showPrevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        };

        const startAutoSlide = () => {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
            }
            autoSlideTimer = setInterval(showNextSlide, autoSlideInterval);
        };

        const resetAutoSlide = () => {
            clearInterval(autoSlideTimer);
            startAutoSlide();
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showNextSlide();
                resetAutoSlide();
            });
        } else {
            console.warn(`Next button not found for slider with ID "${containerId}".`);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showPrevSlide();
                resetAutoSlide();
            });
        } else {
            console.warn(`Previous button not found for slider with ID "${containerId}".`);
        }

        createDots();
        updateSliderPosition();
        if (autoSlideInterval > 0) {
            startAutoSlide();
        }
    };

    initializeSlider('irToolsSliderContainer', 4500);
    initializeSlider('educationSliderContainer', 5500);
});
