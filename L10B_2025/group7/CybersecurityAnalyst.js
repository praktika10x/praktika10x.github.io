document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderContainer = document.getElementById('sliderContainer');

    let currentIndex = 0;
    let autoSlideInterval;
    const autoSlideDelay = 5000;

    if (sliderWrapper && prevBtn && nextBtn && sliderContainer) {
        const slides = document.querySelectorAll('.slide');
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
    const cards = document.querySelectorAll('.cards-container .card');
    const images = document.querySelectorAll('.image-placeholder img');
    const slider = document.querySelector('.slider-container');
    const fadeInLists = document.querySelectorAll('.fade-in-list');


    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.closest('.animated-section').classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (cards.length > 0) {
        cards.forEach(card => cardObserver.observe(card));
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.closest('.animated-section').classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (images.length > 0) {
        images.forEach(image => imageObserver.observe(image));
    }

    const listObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.closest('.animated-section').classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (fadeInLists.length > 0) {
        fadeInLists.forEach(list => listObserver.observe(list));
    }

    const sliderElementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.closest('.animated-section').classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (slider) {
        sliderElementObserver.observe(slider);
    }
});
