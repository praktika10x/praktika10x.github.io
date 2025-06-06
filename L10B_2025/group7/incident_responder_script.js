document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.roadmap-flashcard-inner, .deliverable-item').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        for (let i = 0; i < 6; i++) {
            const circle = document.createElement('div');
            circle.classList.add('floating-circle', `circle-${i + 1}`);
            heroSection.appendChild(circle);
        }
    }

    let lastScrollY = window.scrollY;
    const logoBar = document.querySelector('.logo-bar');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
            logoBar.classList.add('hidden-top-bar');
        } else if (window.scrollY < lastScrollY || window.scrollY <= scrollThreshold) {
            logoBar.classList.remove('hidden-top-bar');
        }
        lastScrollY = window.scrollY;
    });

    logoBar.addEventListener('mouseenter', () => {
        logoBar.classList.remove('hidden-top-bar');
    });

    logoBar.addEventListener('mouseleave', () => {
        if (window.scrollY > scrollThreshold) {
            logoBar.classList.add('hidden-top-bar');
        }
    });

    function setupSlider(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const wrapper = container.querySelector('.ir-slider-wrapper');
        const slides = wrapper.querySelectorAll('.ir-slide');
        const prevBtn = container.querySelector(`[data-slider="${containerId}"][class*="prev"]`);
        const nextBtn = container.querySelector(`[data-slider="${containerId}"][class*="next"]`);
        const dotsContainer = container.querySelector('.ir-slider-dots');

        let currentIndex = 0;

        function updateSlider() {
            const offset = -currentIndex * slides[0].offsetWidth;
            wrapper.style.transform = `translateX(${offset}px)`;
            updateDots();
        }

        function updateDots() {
            dotsContainer.innerHTML = '';
            slides.forEach((_, idx) => {
                const dot = document.createElement('span');
                dot.classList.add('ir-slider-dot');
                if (idx === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    currentIndex = idx;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
                updateSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
        }

        if (slides.length > 0) {
            updateSlider();
            window.addEventListener('resize', updateSlider);
        }
    }
});
