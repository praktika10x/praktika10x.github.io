document.addEventListener('DOMContentLoaded', () => {
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateOnScroll = () => {
        const animatedSections = document.querySelectorAll('.soc-section, .soc-card, .tools-list li, .products-list li, .gallery-img, .gif-embed, .soc-slider-container');
        animatedSections.forEach(el => {
            if (isElementInViewport(el)) {
                el.style.opacity = 1;
                if (el.classList.contains('slide-in-bottom') && !el.classList.contains('animated')) {
                    el.classList.add('animated');
                } else if (el.classList.contains('fade-in-left') && !el.classList.contains('animated')) {
                    el.classList.add('animated');
                } else if (el.classList.contains('slide-in-right') && !el.classList.contains('animated')) {
                    el.classList.add('animated');
                } else if (el.classList.contains('pop-in') && !el.classList.contains('animated')) {
                    el.classList.add('animated');
                } else if (el.classList.contains('scale-in') && !el.classList.contains('animated')) {
                    el.classList.add('animated');
                } else if (el.classList.contains('zoom-in') && !el.classList.contains('animated')) {
                    el.classList.add('animated');
                } else if (el.classList.contains('slide-in-top') && !el.classList.contains('animated')) {
                    el.classList.add('animated');
                } else if (el.classList.contains('fade-in-list') && !el.classList.contains('animated')) {
                    el.querySelectorAll('li').forEach(item => item.style.animationPlayState = 'running');
                    el.classList.add('animated');
                } else if (el.classList.contains('fade-in-right') && !el.classList.contains('animated')) {
                    el.classList.add('animated');
                }
            }
        });
    };

    const sliderContainer = document.getElementById('socSliderContainer');
    if (sliderContainer) {
        const sliderWrapper = sliderContainer.querySelector('.soc-slider-wrapper');
        const slides = sliderContainer.querySelectorAll('.soc-slide');
        const prevBtn = sliderContainer.querySelector('.soc-prev-btn');
        const nextBtn = sliderContainer.querySelector('.soc-next-btn');

        let currentIndex = 0;

        const updateSlider = () => {
            const offset = -currentIndex * 100;
            sliderWrapper.style.transform = `translateX(${offset}%)`;
        };

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            updateSlider();
        });

        updateSlider();
    }

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);

    animateOnScroll();
});

function parseSecurityLog(logEntry) {
    const logData = {};
    const parts = logEntry.split(' | ');

    if (parts.length >= 5) {
        logData.timestamp = parts[0].trim();
        logData.level = parts[1].trim();
        logData.sourceIp = parts[2].trim();
        logData.eventType = parts[3].trim();
        logData.message = parts.slice(4).join(' | ').trim();
    } else {
        logData.error = "Невірний формат логу";
        logData.rawLog = logEntry;
    }
    return logData;
}

function checkSuspiciousActivity(parsedLogEntry) {
    if (parsedLogEntry.eventType === "Unauthorized Access" && parsedLogEntry.message.includes("failed login")) {
        return true;
    }
    return false;
}
