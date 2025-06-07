document.addEventListener('DOMContentLoaded', function() {

    const flashcards = document.querySelectorAll('.roadmap-flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', function() {
            this.querySelector('.roadmap-flashcard-inner').classList.toggle('flipped');
        });
    });

    const toolsSliderContainer = document.getElementById('toolsSliderContainer');
    if (toolsSliderContainer) {
        const toolsSliderWrapper = toolsSliderContainer.querySelector('.soc-slider-wrapper');
        const toolsSlides = toolsSliderContainer.querySelectorAll('.soc-slide');
        const toolsPrevBtn = toolsSliderContainer.querySelector('.soc-prev-btn');
        const toolsNextBtn = toolsSliderContainer.querySelector('.soc-next-btn');
        const toolsSliderDotsContainer = toolsSliderContainer.querySelector('.soc-slider-dots');

        let toolsCurrentSlide = 0;
        const toolsSlideCount = toolsSlides.length;

        function updateToolsSlider() {
            toolsSliderWrapper.style.transform = `translateX(-${toolsCurrentSlide * 100}%)`;
            updateToolsDots();
        }

        function nextToolsSlide() {
            toolsCurrentSlide = (toolsCurrentSlide + 1) % toolsSlideCount;
            updateToolsSlider();
        }

        function prevToolsSlide() {
            toolsCurrentSlide = (toolsCurrentSlide - 1 + toolsSlideCount) % toolsSlideCount;
            updateToolsSlider();
        }

        function updateToolsDots() {
            if (!toolsSliderDotsContainer) return;
            toolsSliderDotsContainer.innerHTML = '';
            for (let i = 0; i < toolsSlideCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('soc-dot');
                if (i === toolsCurrentSlide) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    toolsCurrentSlide = i;
                    updateToolsSlider();
                });
                toolsSliderDotsContainer.appendChild(dot);
            }
        }

        if (toolsPrevBtn && toolsNextBtn) {
            toolsNextBtn.addEventListener('click', nextToolsSlide);
            toolsPrevBtn.addEventListener('click', prevToolsSlide);
            updateToolsSlider();
        }
    }

    const eduSliderContainer = document.getElementById('educationSliderContainer');
    if (eduSliderContainer) {
        const eduSliderWrapper = eduSliderContainer.querySelector('.education-slider-wrapper');
        const eduSlides = eduSliderContainer.querySelectorAll('.education-slide');
        const eduPrevBtn = eduSliderContainer.querySelector('.education-prev-btn');
        const eduNextBtn = eduSliderContainer.querySelector('.education-next-btn');
        const eduSliderDotsContainer = eduSliderContainer.querySelector('.soc-slider-dots');

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
            if (!eduSliderDotsContainer) return;
            eduSliderDotsContainer.innerHTML = '';
            for (let i = 0; i < eduSlideCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('soc-dot');
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
