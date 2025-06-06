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
                if (entry.target.classList.contains('hero-section')) {
                    const heroText = entry.target.querySelector('.fade-in-text');
                    if (heroText) {
                        heroText.style.animationPlayState = 'running';
                    }
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const heroObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const heroText = entry.target.querySelector('.fade-in-text');
                    if (heroText) {
                        heroText.style.animationPlayState = 'running';
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        heroObserver.observe(heroSection);
    }
});
