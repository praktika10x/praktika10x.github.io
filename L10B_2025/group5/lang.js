const change-lang-ua-button = document.querySelector('.change-lang-ua');
const change-lang-en-button = document.querySelector('.change-lang-en');

change-lang-ua-button.addEventListener('click', () => {
   change-lang-ua-button.classList.add('change-lang-ua-active');
   change-lang-en-button.classList.remove('change-lang-en-active');
}
});

change-lang-en-button.addEventListener('click', () => {
   change-lang-en-button.classList.add('change-lang-en-active');
   change-lang-ua-button.classList.remove('change-lang-ua-active');
}
});



const langArr = {
    "main-title": {
        "ua": "Data-напрям",
        "en": "Data-field",
    },
    "professions": {
        "ua": "Професії",
        "en": "Professions",
    },
    "home": {
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
    "MLOPS-section1-textp":{
				"ua": "MLOps Engineer — це фахівець, який поєднує знання в галузях машинного навчання, розробки програмного забезпечення та DevOps для забезпечення ефективного впровадження та підтримки моделей машинного навчання в продуктивному середовищі. Він виступає мостом між командами Data Science та IT-операцій, забезпечуючи безперервну інтеграцію та доставку моделей."
        "en": "n MLOps Engineer is a specialist who combines expertise in machine learning, software development, and DevOps to ensure the efficient deployment and maintenance of machine learning models in a production environment. They act as a bridge between Data Science and IT operations teams, enabling continuous integration and delivery of models."
      },
      "MLOPS-section2-responsibilities-р1": {
        "ua": "Забезпечення безперебійного впровадження моделей машинного навчання в продуктивне середовище та їх оптимізація для стабільної роботи.",
        "en": "Ensuring smooth deployment of machine learning models into production environments and optimizing them for stable performance."
    },
    "MLOPS-section2-responsibilities-р2": {
        "ua": "Створення та підтримка CI/CD-пайплайнів для автоматизованого тестування, валідації та розгортання моделей.",
        "en": "Creating and maintaining CI/CD pipelines for automated testing, validation, and deployment of models."
    },
    "MLOPS-section2-responsibilities-р3": {
        "ua": "Впровадження систем моніторингу для відстеження метрик моделей, виявлення дрейфу даних та забезпечення їхньої актуальності.",
        "en": "Implementing monitoring systems to track model metrics, detect data drift, and ensure their relevance."
    },
    "MLOPS-section2-responsibilities-р4": {
        "ua": "Забезпечення версіонування моделей та даних для відтворюваності та відповідності вимогам регуляторів.",
        "en": "Ensuring version control for models and data to support reproducibility and compliance with regulatory requirements."
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
        window.location.reload();
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
