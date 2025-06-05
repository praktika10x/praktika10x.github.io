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
        "ua": "Data-напрям — це сучасна і дико цікава сфера ІТ, де з сирих даних витягують максимум користі. Тут збирають, зберігають, чистять і аналізують дані, щоб робити прогнози, приймати розумні рішення або навіть автоматизують процеси. Це мікс програмування, статистики, аналітики й машинного навчання — усе, щоб перетворити цифри на знання, що реально допомагають бізнесу, науці чи технологіям.",
        "en": "The Data field is a modern and incredibly exciting area of IT where raw data is transformed into valuable insights. It involves collecting, storing, cleaning, and analyzing data to make predictions, support smart decision-making, or even automate processes. It’s a mix of programming, statistics, analytics, and machine learning — all aimed at turning numbers into knowledge that truly benefits business, science, or technology.",
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
    "authors-name1": {
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
    },
    "navigation": {
        "ua": "Навігація",
        "en": "Navigation",
    },
    "introduction": {
        "ua": "Вступ",
        "en": "Introduction",
    },
    "responsibilities": {
        "ua": "Основні обов’язки",
        "en": "Main Responsibilities",
    },
    "path": {
        "ua": "Шлях до професії",
        "en": "Path to the Profession",
    },
    "skills": {
        "ua": "Навички",
        "en": "Skills",
    },
    "demand": {
        "ua": "Затребуваність",
        "en": "Demand",
    },
    "salaries": {
        "ua": "Зарплати",
        "en": "Salaries",
    },
    "tools": {
        "ua": "Популярні інструменти",
        "en": "Popular Tools",
    },
    "prospects": {
        "ua": "Перспективи",
        "en": "Prospects",
    },
    "education": {
        "ua": "Освіта",
        "en": "Education",
    },
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
