document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.education-slider-wrapper');
    const slides = document.querySelectorAll('.education-slide');
    const prevBtn = document.querySelector('.education-prev-btn');
    const nextBtn = document.querySelector('.education-next-btn');
    const dotsContainer = document.querySelector('.education-dots');

    let currentIndex = 0;
    const totalSlides = slides.length;

    const createDots = () => {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('education-dot');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
    };

    const updateDots = () => {
        document.querySelectorAll('.education-dot').forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const goToSlide = (index) => {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
        updateDots();
    };

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    createDots();
    updateDots();


    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(animateOnScroll, options);

    document.querySelectorAll('.animated-section').forEach(section => {
        observer.observe(section);
    });
});
