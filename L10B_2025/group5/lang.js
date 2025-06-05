const langArr = {
    "main-title": {
        "ua": "Data-напрям",
        "en": "Data-field",
    },
    "professions": {
        "ua": "Професії",
        "en": "Professions",
    },
    "border-bottom-hover": {
        "ua": "Головна",
        "en": "Home",
    },
    "description-title": {
        "ua": "Опис Data-напряму",
        "en": "Description of the Data-field",
    },
    "description-text": {
        "ua": "Data-напрям — це сучасна і дико цікава сфера ІТ, де з сирих даних витягують максимум користі...",
        "en": "The data field is a modern and incredibly exciting area of IT...",
    },
    "analyst-desc": {
        "ua": "Аналізує дані, створює звіти та дашборди для підтримки бізнес-рішень.",
        "en": "Analyzes data, creates reports and dashboards to support business decisions.",
    },
    "ml-desc": {
        "ua": "Розробляє та впроваджує ML-моделі для прогнозування й автоматизації.",
        "en": "Develops and implements ML models for prediction and automation.",
    },
    "mlops-desc": {
        "ua": "Відповідає за автоматизацію, масштабування й стабільну роботу ML-моделей у продакшені.",
        "en": "Responsible for automation, scaling, and stable operation of ML models in production.",
    },
    "authors": {
        "ua": "Автори",
        "en": "Authors",
    },
    "author-name1": {
        "ua": "Бебих Богдан",
        "en": "Bebykh Bohdan",
    },
    "authors-name2": {
        "ua": "Іванись Артем",
        "en": "Ivanys Artem",
    },
    "authors-name3": {
        "ua": "Пигина Михайло",
        "en": "Pyhyna Mikhailo",
    },
    "sources": {
        "ua": "Джерела",
        "en": "Sources",
    }
};

const allLang = ['ua', 'en'];

document.querySelectorAll('.change-lang button').forEach(button => {
    button.addEventListener('click', (event) => {
        const lang = event.target.dataset.lang;
        if (allLang.includes(lang)) {
            location.hash = lang;
            changeLanguage();
        }
    });
});

function changeLanguage() {
    let hash = window.location.hash.substr(1);

    if (!allLang.includes(hash)) {
        hash = 'ua';
        location.hash = hash;
    }

    for (let key in langArr) {
        const elements = document.querySelectorAll('.lng-' + key);
        elements.forEach(el => {
            el.innerHTML = langArr[key][hash];
        });
    }
}

window.addEventListener("load", changeLanguage);
window.addEventListener("hashchange", changeLanguage);


const hamburger_icon = document.querySelector('.hamburger-icon');
if (hamburger_icon) {
    hamburger_icon.addEventListener('click', () => {
        const mobile_nav = document.querySelector('.mobile-menu');
        if (mobile_nav) {
            mobile_nav.classList.toggle('mobile-menu-active');
            hamburger_icon.classList.toggle('hamburger-icon-active');
        }
    });
}
