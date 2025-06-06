document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer');

    if (sliderContainer) {
        const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
        const slides = sliderWrapper.querySelectorAll('.slide');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('slider-dots');
        sliderContainer.appendChild(dotsContainer);

        let currentIndex = 0;
        let autoSlideInterval;
        const autoSlideDelay = 6000;

        const totalSlides = slides.length;

        if (totalSlides <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
            return;
        }

        function updateSliderPosition() {
            sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
            updateDots();
        }

        const goToNextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        };

        const goToPrevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        };

        const goToSlide = (index) => {
            currentIndex = index;
            updateSliderPosition();
            resetAutoSlide();
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

        function createDots() {
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('slider-dot');
                dot.setAttribute('data-slide-index', i);
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        function updateDots() {
            dotsContainer.querySelectorAll('.slider-dot').forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        updateSliderPosition();
        createDots();
        startAutoSlide();

        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    const animatedElements = document.querySelectorAll('.animated-section, .card, .info-block, .tool-item, .product-item, .slider-container');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                if (entry.target.tagName === 'H1' && entry.target.classList.contains('fade-in-text')) {
                    entry.target.style.animationPlayState = 'running';
                }

                if (entry.target.classList.contains('animated-section')) {
                    const children = entry.target.querySelectorAll('.delay-1, .delay-2, .delay-3, .delay-4, .delay-5, .delay-6, .delay-7, .delay-8, .delay-9');
                    children.forEach(child => {
                        child.classList.add('is-visible');
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
