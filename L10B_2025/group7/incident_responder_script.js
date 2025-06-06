document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });

    document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function initializeSlider(containerId, slideSelector, prevBtnSelector, nextBtnSelector, dotsContainerSelector) {
        const sliderContainer = document.getElementById(containerId);
        if (!sliderContainer) return;

        const sliderWrapper = sliderContainer.querySelector('.ir-slider-wrapper, .education-slider-wrapper');
        const slides = sliderWrapper.querySelectorAll(slideSelector);
        const prevBtn = sliderContainer.querySelector(prevBtnSelector);
        const nextBtn = sliderContainer.querySelector(nextBtnSelector);
        const dotsContainer = sliderContainer.querySelector(dotsContainerSelector);

        let currentIndex = 0;
        let slideInterval;

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
            updateDots();
        }

        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            slides.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                    resetAutoplay();
                });
                dotsContainer.appendChild(dot);
            });
        }

        function updateDots() {
            if (!dotsContainer) return;
            dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function startAutoplay() {
            slideInterval = setInterval(showNextSlide, 5000);
        }

        function resetAutoplay() {
            clearInterval(slideInterval);
            startAutoplay();
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showPrevSlide();
                resetAutoplay();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showNextSlide();
                resetAutoplay();
            });
        }

        createDots();
        updateSlider();
        startAutoplay();
    }

    initializeSlider(
        'toolsSliderContainer',
        '.ir-slide',
        '.ir-prev-btn',
        '.ir-next-btn',
        '.ir-slider-dots'
    );

    initializeSlider(
        'educationSliderContainer',
        '.education-slide',
        '.education-prev-btn',
        '.education-next-btn',
        '.ir-slider-dots'
    );
});
