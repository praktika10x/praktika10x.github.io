AOS.init({
    duration: 800,
    once: true
});

function initializeSlider(containerId) {
    const sliderContainer = document.getElementById(containerId);
    const sliderWrapper = sliderContainer.querySelector(`.${containerId.replace('Container', '')}-wrapper`);
    const slides = sliderWrapper.children;
    const prevBtn = sliderContainer.querySelector(`.${containerId.replace('Container', '')}-prev-btn`);
    const nextBtn = sliderContainer.querySelector(`.${containerId.replace('Container', '')}-next-btn`);
    const dotsContainer = sliderContainer.querySelector('.ir-slider-dots');

    if (!sliderWrapper || slides.length === 0) {
        console.warn(`Slider wrapper or slides not found for container: ${containerId}`);
        return;
    }

    let currentIndex = 0;

    if (dotsContainer) {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('ir-slider-dot');
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        if (dotsContainer) {
            const dots = dotsContainer.children;
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.toggle('active', i === currentIndex);
            }
        }
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });
    }

    goToSlide(0);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSlider('toolsSliderContainer');
    initializeSlider('educationSliderContainer');
});
