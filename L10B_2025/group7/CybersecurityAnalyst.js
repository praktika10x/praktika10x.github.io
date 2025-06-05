document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    if (sliderWrapper && prevBtn && nextBtn) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function updateSliderPosition() {
            sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to the first slide
            }
            updateSliderPosition();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1; // Loop back to the last slide
            }
            updateSliderPosition();
        });

        // Optional: Auto-play functionality
        // setInterval(() => {
        //     if (currentIndex < totalSlides - 1) {
        //         currentIndex++;
        //     } else {
        //         currentIndex = 0;
        //     }
        //     updateSliderPosition();
        // }, 5000); // Change slide every 5 seconds
    }
});
