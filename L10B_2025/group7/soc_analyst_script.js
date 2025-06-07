document.addEventListener('DOMContentLoaded', function() {

    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    const irSliderContainer = document.getElementById('irToolsSliderContainer');
    if (irSliderContainer) {
        const irSliderWrapper = irSliderContainer.querySelector('.ir-slider-wrapper');
        const irSlides = irSliderContainer.querySelectorAll('.ir-slide');
        const irPrevBtn = irSliderContainer.querySelector('.ir-prev-btn');
        const irNextBtn = irSliderContainer.querySelector('.ir-next-btn');
        const irSliderDotsContainer = irSliderContainer.querySelector('.ir-slider-dots');

        let irCurrentSlide = 0;
        const irSlideCount = irSlides.length;

        function updateIrSlider() {
            irSliderWrapper.style.transform = `translateX(-${irCurrentSlide * 100}%)`;
            updateIrDots();
        }

        function nextIrSlide() {
            irCurrentSlide = (irCurrentSlide + 1) % irSlideCount;
            updateIrSlider();
        }

        function prevIrSlide() {
            irCurrentSlide = (irCurrentSlide - 1 + irSlideCount) % irSlideCount;
            updateIrSlider();
        }

        function updateIrDots() {
            irSliderDotsContainer.innerHTML = '';
            for (let i = 0; i < irSlideCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('ir-dot');
                if (i === irCurrentSlide) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    irCurrentSlide = i;
                    updateIrSlider();
                });
                irSliderDotsContainer.appendChild(dot);
            }
        }

        if (irPrevBtn && irNextBtn) {
            irNextBtn.addEventListener('click', nextIrSlide);
            irPrevBtn.addEventListener('click', prevIrSlide);
            updateIrSlider(); 
        }
    }

    const eduSliderContainer = document.getElementById('educationSliderContainer');
    if (eduSliderContainer) { 
        const eduSliderWrapper = eduSliderContainer.querySelector('.education-slider-wrapper');
        const eduSlides = eduSliderContainer.querySelectorAll('.education-slide');
        const eduPrevBtn = eduSliderContainer.querySelector('.edu-prev-btn');
        const eduNextBtn = eduSliderContainer.querySelector('.edu-next-btn');
        const eduSliderDotsContainer = eduSliderContainer.querySelector('.edu-slider-dots');

        let eduCurrentSlide = 0;
        const eduSlideCount = eduSlides.length;

        function updateEduSlider() {
            eduSliderWrapper.style.transform = `translateX(-${eduCurrentSlide * 100}%)`;
            updateEduDots();
        }

        function nextEduSlide() {
            eduCurrentSlide = (eduCurrentSlide + 1) % eduSlideCount;
            updateEduSlider();
        }

        function prevEduSlide() {
            eduCurrentSlide = (eduCurrentSlide - 1 + eduSlideCount) % eduSlideCount;
            updateEduSlider();
        }

        function updateEduDots() {
            eduSliderDotsContainer.innerHTML = '';
            for (let i = 0; i < eduSlideCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('edu-dot');
                if (i === eduCurrentSlide) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    eduCurrentSlide = i;
                    updateEduSlider();
                });
                eduSliderDotsContainer.appendChild(dot);
            }
        }

        if (eduPrevBtn && eduNextBtn) {
            eduNextBtn.addEventListener('click', nextEduSlide);
            eduPrevBtn.addEventListener('click', prevEduSlide);
            updateEduSlider();
        }
    }

});
