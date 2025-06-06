document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const logoBar = document.querySelector('.logo-bar');
    if (logoBar) {
        window.addEventListener('scroll', () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop && st > logoBar.offsetHeight) {
                logoBar.classList.add('hidden-top-bar');
            } else {
                logoBar.classList.remove('hidden-top-bar');
            }
            lastScrollTop = st <= 0 ? 0 : st;
        });
    }

    function initializeSlider(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const wrapper = container.querySelector(`${containerSelector}-wrapper`);
        const slides = container.querySelectorAll(`${containerSelector} .soc-slide, ${containerSelector} .education-slide`);
        const prevBtn = container.querySelector(`${containerSelector.replace('-container', '')}-prev-btn`);
        const nextBtn = container.querySelector(`${containerSelector.replace('-container', '')}-next-btn`);
        const dotsContainer = container.querySelector(`${containerSelector.replace('-container', '')}-dots`);

        let currentIndex = 0;
        let slideInterval;

        const totalSlides = slides.length;

        function updateSlider() {
            wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
            updateDots();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('soc-dot');
                if (i === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        function updateDots() {
            if (!dotsContainer) return;
            const dots = dotsContainer.querySelectorAll('.soc-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            startAutoSlide();
        });
        nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            startAutoSlide();
        });

        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        createDots();
        updateSlider();
        startAutoSlide();
    }

    initializeSlider('.soc-slider-container');
    initializeSlider('.tools-slider-container');
    initializeSlider('.education-slider-container');

    const flashcards = document.querySelectorAll('.roadmap-flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
});
