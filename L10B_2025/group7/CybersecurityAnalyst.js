document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let autoSlideInterval;

    if (sliderWrapper && prevBtn && nextBtn) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function updateSliderPosition() {
            sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        const goToNextSlide = () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to the first slide
            }
            updateSliderPosition();
        };

        const goToPrevSlide = () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1; // Loop back to the last slide
            }
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

        // Auto-play functionality (uncomment to activate)
        // const startAutoSlide = () => {
        //     autoSlideInterval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
        // };

        // const stopAutoSlide = () => {
        //     clearInterval(autoSlideInterval);
        // };

        // const resetAutoSlide = () => {
        //     stopAutoSlide();
        //     startAutoSlide();
        // };

        // startAutoSlide(); // Start auto-slide on page load

        // Optional: Pause auto-slide on hover
        // sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        // sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    // Animation on scroll functionality (Intersection Observer)
    const animatedSections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation a bit before it's fully in view
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});
