const buttons = document.querySelectorAll('.change-lang button');

buttons.forEach(button => {
    button.addEventListener('click', changeURLlanguage);
});

function changeURLlanguage(event) {
    const lang = event.target.dataset.lang;
    location.href = window.location.pathname + '#' + lang;
}