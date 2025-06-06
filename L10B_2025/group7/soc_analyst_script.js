document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('.animated-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    const sliderWrapper = document.querySelector('.education-slider-wrapper');
    const slides = document.querySelectorAll('.education-slide');
    const prevBtn = document.querySelector('.education-prev-btn');
    const nextBtn = document.querySelector('.education-next-btn');

    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateSliderPosition = () => {
        sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateSliderPosition();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });

    window.addEventListener('resize', updateSliderPosition);
});
