document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
    });

    const toolsSlider = document.querySelector('.ir-slider-wrapper');
    const toolsSlides = document.querySelectorAll('.ir-slide');
    const toolsPrevBtn = document.querySelector('.ir-prev-btn');
    const toolsNextBtn = document.querySelector('.ir-next-btn');
    const toolsDotsContainer = document.querySelector('.ir-slider-dots');
    let toolsCurrentIndex = 0;
    let toolsSlidesPerPage = 3;

    function updateToolsSlidesPerPage() {
        if (window.innerWidth <= 768) {
            toolsSlidesPerPage = 1;
        } else {
            toolsSlidesPerPage = 3;
        }
        updateToolsSlider();
    }

    function updateToolsSlider() {
        const slideWidth = toolsSlides[0].clientWidth + 20;
        toolsSlider.style.transform = `translateX(-${toolsCurrentIndex * slideWidth}px)`;
        updateToolsDots();
    }

    function createToolsDots() {
        toolsDotsContainer.innerHTML = '';
        const numDots = Math.ceil(toolsSlides.length / toolsSlidesPerPage);
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                toolsCurrentIndex = i * toolsSlidesPerPage;
                updateToolsSlider();
            });
            toolsDotsContainer.appendChild(dot);
        }
    }

    function updateToolsDots() {
        const dots = document.querySelectorAll('.ir-slider-dots .dot');
        dots.forEach((dot, index) => {
            if (index === Math.floor(toolsCurrentIndex / toolsSlidesPerPage)) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    toolsNextBtn.addEventListener('click', () => {
        if (toolsCurrentIndex < toolsSlides.length - toolsSlidesPerPage) {
            toolsCurrentIndex += toolsSlidesPerPage;
        } else {
            toolsCurrentIndex = 0;
        }
        updateToolsSlider();
    });

    toolsPrevBtn.addEventListener('click', () => {
        if (toolsCurrentIndex > 0) {
            toolsCurrentIndex -= toolsSlidesPerPage;
        } else {
            toolsCurrentIndex = toolsSlides.length - toolsSlidesPerPage;
        }
        updateToolsSlider();
    });

    updateToolsSlidesPerPage();
    createToolsDots();
    window.addEventListener('resize', updateToolsSlidesPerPage);

    const educationSlider = document.querySelector('.education-slider-wrapper');
    const educationSlides = document.querySelectorAll('.education-slide');
    const educationPrevBtn = document.querySelector('.education-prev-btn');
    const educationNextBtn = document.querySelector('.education-next-btn');
    const educationDotsContainerElements = document.getElementById('educationSliderContainer').querySelector('.ir-slider-dots');
    let educationCurrentIndex = 0;
    let educationSlidesPerPage = 2;

    function updateEducationSlidesPerPage() {
        if (window.innerWidth <= 768) {
            educationSlidesPerPage = 1;
        } else {
            educationSlidesPerPage = 2;
        }
        updateEducationSlider();
    }

    function updateEducationSlider() {
        const slideWidth = educationSlides[0].clientWidth + 20;
        educationSlider.style.transform = `translateX(-${educationCurrentIndex * slideWidth}px)`;
        updateEducationDots();
    }

    function createEducationDots() {
        educationDotsContainerElements.innerHTML = '';
        const numDots = Math.ceil(educationSlides.length / educationSlidesPerPage);
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                educationCurrentIndex = i * educationSlidesPerPage;
                updateEducationSlider();
            });
            educationDotsContainerElements.appendChild(dot);
        }
    }

    function updateEducationDots() {
        const dots = educationDotsContainerElements.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === Math.floor(educationCurrentIndex / educationSlidesPerPage)) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    educationNextBtn.addEventListener('click', () => {
        if (educationCurrentIndex < educationSlides.length - educationSlidesPerPage) {
            educationCurrentIndex += educationSlidesPerPage;
        } else {
            educationCurrentIndex = 0;
        }
        updateEducationSlider();
    });

    educationPrevBtn.addEventListener('click', () => {
        if (educationCurrentIndex > 0) {
            educationCurrentIndex -= educationSlidesPerPage;
        } else {
            educationCurrentIndex = educationSlides.length - educationSlidesPerPage;
        }
        updateEducationSlider();
    });

    updateEducationSlidesPerPage();
    createEducationDots();
    window.addEventListener('resize', updateEducationSlidesPerPage);
});
