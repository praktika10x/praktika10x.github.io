const buttons = document.querySelectorAll('.change-lang button');

buttons.forEach(button => {
    button.addEventListener('click', changeURLlanguage);
});

function changeURLlanguage(event) {
    const lang = event.target.dataset.lang;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}


const hamburger_icon = document.querySelector('.hamburger-icon');
hamburger_icon.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile-menu');
    mobile_nav.classList.toggle('mobile-menu-active');
    hamburger_icon.classList.toggle('hamburger-icon-active');
});

function changeLanguage() {
    let lang = select.value;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "en";
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    for (let key in langArr){
        let el = document.querySelector('.lng-'+key)
        if(el) {
        el.innerHTML = langArr[key][hash];}
    }
}
changeLanguage()
const langArr = {
    "title": {
        "ua": "Data-напрям",
        "en": "Data-field",
    },
    
}
