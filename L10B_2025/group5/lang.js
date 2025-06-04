const buttons = document.querySelectorAll('.change-lang button');

buttons.forEach(button => {
    button.addEventListener('click', changeURLlanguage);
});

function changeURLlanguage(event) {
    const lang = event.target.dataset.lang;
    location.href = window.location.pathname + '#' + lang;
}


const hamburger_icon = document.querySelector('.hamburger-icon');
hamburger_icon.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile-menu');
    mobile_nav.classList.toggle('mobile-menu-active');
    hamburger_icon.classList.toggle('hamburger-icon-active');
});
