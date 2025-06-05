document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer');

    if (sliderContainer) {
        const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
        const slides = sliderWrapper.querySelectorAll('.slide');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');

        let currentIndex = 0;
        let autoSlideInterval;
        const autoSlideDelay = 5000;

        const totalSlides = slides.length;

        if (totalSlides <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            return;
        }

        function updateSliderPosition() {
            sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        const goToNextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        };

        const goToPrevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        };

        nextBtn.addEventListener('click', () => {
            goToNextSlide();
            resetAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            goToPrevSlide();
            resetAutoSlide();
        });

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

        startAutoSlide();

        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);

        updateSliderPosition();
    }

    const animatedSections = document.querySelectorAll('.animated-section');
    const fadeInText = document.querySelector('.fade-in-text');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                if (fadeInText && !fadeInText.classList.contains('is-visible')) {
                    fadeInText.style.animationPlayState = 'running';
                    fadeInText.classList.add('is-visible');
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });

    const h1Observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (fadeInText) {
                    fadeInText.style.animationPlayState = 'running';
                    fadeInText.classList.add('is-visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (fadeInText) {
        h1Observer.observe(fadeInText);
    }
});
