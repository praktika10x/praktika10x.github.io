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



const changeLangUaButton = document.querySelector('.change-lang-ua');
const changeLangEnButton = document.querySelector('.change-lang-en');

changeLangUaButton.addEventListener('click', () => {
   changeLangUaButton.classList.add('change-lang-ua-active');
   changeLangEnButton.classList.remove('change-lang-en-active');
});

changeLangEnButton.addEventListener('click', () => {
   changeLangEnButton.classList.add('change-lang-en-active');
   changeLangUaButton.classList.remove('change-lang-ua-active');
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
		"ua": "MLOps Engineer — це фахівець, який поєднує знання в галузях машинного навчання, розробки програмного забезпечення та DevOps для забезпечення ефективного впровадження та підтримки моделей машинного навчання в продуктивному середовищі. Він виступає мостом між командами Data Science та IT-операцій, забезпечуючи безперервну інтеграцію та доставку моделей.",
        "en": "MLOps Engineer is a specialist who combines expertise in machine learning, software development, and DevOps to ensure the efficient deployment and maintenance of machine learning models in a production environment. They act as a bridge between Data Science and IT operations teams, enabling continuous integration and delivery of models."
      },
    "MLOPS-section2-responsibilities": {
        "ua": "🎯 Основні обов'язки",
        "en": "🎯 Main Duties",
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
    },
    "MLOPS-section3-Path-p1": {
    "ua": "Отримайте технічну освіту в галузі комп'ютерних наук, інженерії або суміжній сфері. Вивчіть основи ML, DevOps, CI/CD.",
    "en": "Obtain a technical education in computer science, engineering, or a related field. Learn the basics of ML, DevOps, and CI/CD."
    },
    "MLOPS-section3-Path-p2": {
        "ua": "Освойте інструменти для автоматизації, контейнеризації та деплойменту (Docker, Kubernetes, Jenkins, MLflow, Terraform).",
        "en": "Master tools for automation, containerization, and deployment (Docker, Kubernetes, Jenkins, MLflow, Terraform)."
    },
    "MLOPS-section3-Path-p3": {
        "ua": "Отримайте практичний досвід: беріть участь у проєктах з розгортання моделей, автоматизації пайплайнів, моніторингу продуктивності ML-систем.",
        "en": "Gain practical experience: participate in projects involving model deployment, pipeline automation, and monitoring ML system performance."
    },
    "MLOPS-section3-Path-p4": {
        "ua": "Відвідуйте профільні події, слідкуйте за трендами (MLOps Community, Kubeflow, Vertex AI тощо).",
        "en": "Attend industry events and follow trends (MLOps Community, Kubeflow, Vertex AI, etc.)."
    },
    "MLOPS-section3-Path-h1": {
        "ua": "👓Шлях до професії",
        "en": "👓Path to the Profession"
    },
        "MLOPS-section3-Path-h2-1": {
        "ua": "Освіта",
        "en": "Education"
    },
    "MLOPS-section3-Path-h2-2": {
        "ua": "Технології",
        "en": "Technologies"
    },
    "MLOPS-section3-Path-h2-3": {
        "ua": "Досвід",
        "en": "Experience"
    },
    "MLOPS-section3-Path-h2-4": {
        "ua": "Розвиток",
        "en": "Development"
    },
    "MLOPS-section4-Skills-h1": {
    "ua": "⚙ Які навички потрібні MLOps інжинеру",
    "en": "⚙ What Skills Are Needed for an MLOps Engineer"
    },
    "MLOPS-section4-Skills-h2-1": {
        "ua": "Технічні навички (Hard Skills):",
        "en": "Technical Skills (Hard Skills):"
    },
    "MLOPS-section4-Skills-h2-2": {
        "ua": "Особисті якості (Soft Skills):",
        "en": "Personal Qualities (Soft Skills):"
    },
    "MLOPS-section4-Skills-li1": {
        "ua": "Python",
        "en": "Python"
    },
    "MLOPS-section4-Skills-li2": {
        "ua": "Docker, Kubernetes",
        "en": "Docker, Kubernetes"
    },
    "MLOPS-section4-Skills-li3": {
        "ua": "CI/CD (Jenkins, GitHub Actions)",
        "en": "CI/CD (Jenkins, GitHub Actions)"
    },
    "MLOPS-section4-Skills-li4": {
        "ua": "MLflow, DVC, Airflow",
        "en": "MLflow, DVC, Airflow"
    },
    "MLOPS-section4-Skills-li5": {
        "ua": "Хмарні платформи (AWS, GCP, Azure)",
        "en": "Cloud platforms (AWS, GCP, Azure)"
    },
    "MLOPS-section4-Skills-li6": {
        "ua": "Linux, Bash",
        "en": "Linux, Bash"
    },
    "MLOPS-section4-Skills-li7": {
        "ua": "Моніторинг (Prometheus, Grafana)",
        "en": "Monitoring (Prometheus, Grafana)"
    },
    "MLOPS-section4-Skills-li8": {
        "ua": "Архітектура ML-систем",
        "en": "Architecture of ML systems"
    },
    "MLOPS-section4-Skills-li9": {
        "ua": "Системне мислення",
        "en": "Systems thinking"
    },
    "MLOPS-section4-Skills-li10": {
        "ua": "Комунікабельність",
        "en": "Communication skills"
    },
    "MLOPS-section4-Skills-li11": {
        "ua": "Вміння вирішувати проблеми",
        "en": "Problem-solving skills"
    },
    "MLOPS-section4-Skills-li12": {
        "ua": "Робота в команді",
        "en": "Teamwork"
    },
    "MLOPS-section4-Skills-li13": {
        "ua": "Уважність до деталей",
        "en": "Attention to detail"
    },
    "MLOPS-section5-Demand-h1": {
        "ua": "🔥Затребуваність",
        "en": "🔥Demand"
    },
    "MLOPS-section5-Demand-p1": {
        "ua": "Попит на MLOps інженерів в Україні стрімко зростає, особливо в компаніях, що впроваджують AI/ML рішення. Високі зарплати обумовлені необхідністю автоматизації ML-процесів, забезпечення надійного деплойменту моделей та моніторингу їх продуктивності.",
        "en": "The demand for MLOps engineers in Ukraine is rapidly growing, especially in companies adopting AI/ML solutions. High salaries are driven by the need to automate ML processes, ensure reliable model deployment, and monitor their performance."
    },
    "MLOPS-section6-Salaries-h1": {
    "ua": "Середня $зарплата$ MLOps інженерів в Україні(2025)",
    "en": "Average $salary$ of MLOps Engineers in Ukraine (2025)"
    },
    "MLOPS-section7-PopularTools-h1-1": {
        "ua": "Оптимізація",
        "en": "Optimization"
    },
    "MLOPS-section7-PopularTools-p1": {
        "ua": "MLflow, DVC (Data Version Control), Weights & Biases.",
        "en": "MLflow, DVC (Data Version Control), Weights & Biases."
    },
    "MLOPS-section7-PopularTools-h1-2": {
        "ua": "Моніторинг",
        "en": "Monitoring"
    },
    "MLOPS-section7-PopularTools-p2": {
        "ua": "Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana).",
        "en": "Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana)."
    },
    "MLOPS-section7-PopularTools-h1-3": {
        "ua": "Популярні інструменти",
        "en": "Popular Tools"
    },
    "MLOPS-section7-PopularTools-h1-4": {
        "ua": "Контейнеризація",
        "en": "Containerization"
    },
    "MLOPS-section7-PopularTools-p3": {
        "ua": "Docker, Kubernetes.",
        "en": "Docker, Kubernetes."
    },
    "MLOPS-section7-PopularTools-h1-5": {
        "ua": "Хмарні сервіси",
        "en": "Cloud Services"
    },
    "MLOPS-section7-PopularTools-p4": {
        "ua": "AWS SageMaker, Google AI Platform, Azure Machine Learning",
        "en": "AWS SageMaker, Google AI Platform, Azure Machine Learning"
    },
    "MLOPS-section8-Prospects-h1": {
        "ua": "🚀 Перспективи кар'єри",
        "en": "🚀 Career Prospects"
    },
    "MLOPS-section8-Prospects-li1": {
        "ua": "MLOps Engineer – ключова фігура в успішному впровадженні ML-рішень.",
        "en": "MLOps Engineer is a key figure in the successful implementation of ML solutions."
    },
    "MLOPS-section8-Prospects-li2": {
        "ua": "Поєднання технічних навичок та комунікаційних здібностей.",
        "en": "A combination of technical skills and communication abilities."
    },
    "MLOPS-section8-Prospects-li3": {
        "ua": "Постійний розвиток та навчання – запорука успіху в цій ролі.",
        "en": "Continuous development and learning are the keys to success in this role."
    },
    "MLOPS-section9-Education-h1": {
        "ua": "📖Де отримати освіту?",
        "en": "📖Where to Get an Education?"
    },
    "MLOPS-section9-Education-h2-1": {
        "ua": "Освіта в Україні",
        "en": "Education in Ukraine"
    },
    "MLOPS-section9-Education-h3-1": {
        "ua": "🎓 Університети",
        "en": "🎓 Universities"
    },
    "MLOPS-section9-Education-h3-2": {
        "ua": "🧑‍💻 Курси та школи",
        "en": "🧑‍💻 Courses and Schools"
    },
    "MLOPS-section9-Education-h2-2": {
        "ua": "Освіта за кордоном",
        "en": "Education Abroad"
    },
    "MLOPS-section9-Education-h3-3": {
        "ua": "🎓 Університети",
        "en": "🎓 Universities"
    },
    "MLOPS-section9-Education-h3-4": {
        "ua": "🧑‍💻 Курси та школи",
        "en": "🧑‍💻 Courses and Schools"
    },
    "gen_prof": {
        "ua": "Калейдоскоп професій",
        "en": "Career Kaleidoscope"
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
