document.addEventListener('DOMContentLoaded', () => {
    
    const roadmapSteps = document.querySelectorAll('.roadmap-step');

    roadmapSteps.forEach(step => {
        const header = step.querySelector('.roadmap-step-header');
        header.addEventListener('click', () => {
            step.classList.toggle('active');
        });
    });

    
    function setupSlider(sliderId) {
        const sliderContainer = document.getElementById(sliderId);
        if (!sliderContainer) return;

        const sliderInner = sliderContainer.querySelector('.slider-inner');
        const sliderItems = sliderInner.querySelectorAll('.slider-item');
        const prevButton = sliderContainer.querySelector('.slider-button.prev');
        const nextButton = sliderContainer.querySelector('.slider-button.next');

        let currentIndex = 0;
        const totalItems = sliderItems.length;

        function updateSlider() {
            const offset = -currentIndex * 100;
            sliderInner.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });

        updateSlider(); 
    }

    setupSlider('toolsSlider');
    setupSlider('productSlider');
});
