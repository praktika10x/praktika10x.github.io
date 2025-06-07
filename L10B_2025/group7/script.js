const translations = {
    'uk': {
        'home': 'Головна',
        'about_project': 'Про проєкт',
        'hero_heading': 'Безпека в Інтернеті починається з тебе',
        'hero_paragraph': 'Ми допоможемо розібратися, як захистити себе онлайн та обрати сучасну кіберпрофесію.',
        'intro_heading': 'Кібербезпека — захист твого цифрового світу',
        'intro_text': 'У світі, де майже кожен наш крок залишає цифровий слід, питання безпеки стає ключовим. Кібербезпека — це система заходів, яка захищає комп’ютери, мережі, програми й дані від несанкціонованого доступу та атак. Розуміння основ кібербезпеки та можливість захистити себе і свою інформацію є ключовими навичками для кожного.',
        'cybersecurity_analyst_title': 'Cybersecurity Analyst',
        'cybersecurity_analyst_description': 'Аналітик з кібербезпеки моніторить та захищає комп\'ютерні системи, мережі та дані організації від загроз. Він виявляє вразливості, реагує на інциденти безпеки та впроваджує заходи для запобігання кібератакам.',
        'soc_analyst_title': 'SOC Analyst',
        'soc_analyst_description': 'Аналітик Центру Операцій Безпеки (SOC Analyst) працює в команді, яка постійно відстежує та аналізує події безпеки, щоб швидко виявляти та реагувати на кіберзагрози у реальному часі.',
        'incident_responder_title': 'Incident Responder',
        'incident_responder_description': 'Фахівець з реагування на інциденти відповідає за швидке виявлення, локалізацію та усунення наслідків кібератак. Його мета – мінімізувати збитки та відновити нормальну роботу систем.',
        'penetration_tester_title': 'Penetration Tester',
        'penetration_tester_description': 'Пентестер (фахівець з тестування на проникнення) імітує хакерські атаки на системи компанії, щоб знайти та виявити вразливості до того, як їх використають зловмисники.',
        'details_button': 'Детальніше',
        'footer_info': 'Контакти: bbuhikalo@gmail.com | Телефон: +380 97 407 45 29 © 2025 Safe WEB squad. | Всі права захищено.',
        'sources_button': '📝',
        'logo_text': 'Safe WEB squad'
    },
    'en': {
        'home': 'Home',
        'about_project': 'About Project',
        'hero_heading': 'Online Safety Starts With You',
        'hero_paragraph': 'We\'ll help you understand how to protect yourself online and choose a modern cybersecurity profession.',
        'intro_heading': 'Cybersecurity — Protecting Your Digital World',
        'intro_text': 'In a world where almost every step we take leaves a digital footprint, security becomes a key issue. Cybersecurity is a set of measures that protects computers, networks, programs, and data from unauthorized access and attacks. Understanding the basics of cybersecurity and being able to protect yourself and your information are key skills for everyone.',
        'cybersecurity_analyst_title': 'Cybersecurity Analyst',
        'cybersecurity_analyst_description': 'A Cybersecurity Analyst monitors and protects an organization\'s computer systems, networks, and data from threats. They identify vulnerabilities, respond to security incidents, and implement measures to prevent cyberattacks.',
        'soc_analyst_title': 'SOC Analyst',
        'soc_analyst_description': 'A Security Operations Center (SOC) Analyst works in a team that constantly monitors and analyzes security events to quickly detect and respond to cyber threats in real-time.',
        'incident_responder_title': 'Incident Responder',
        'incident_responder_description': 'An Incident Responder is responsible for quickly detecting, containing, and resolving the aftermath of cyberattacks. Their goal is to minimize damage and restore normal system operation.',
        'penetration_tester_title': 'Penetration Tester',
        'penetration_tester_description': 'A Penetration Tester (pentester) simulates hacker attacks on a company\'s systems to find and identify vulnerabilities before they can be exploited by malicious actors.',
        'details_button': 'Details',
        'footer_info': 'Contacts: bbuhikalo@gmail.com | Phone: +380 97 407 45 29 © 2025 Safe WEB squad. | All rights reserved.',
        'sources_button': '📝',
        'logo_text': 'Safe WEB squad'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-lang-href]').forEach(element => {
        const key = element.getAttribute('data-lang-href');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.btn').forEach(button => {
        button.textContent = translations[lang]['details_button'];
    });

    document.querySelector('.logo-text').textContent = translations[lang]['logo_text'];

    document.querySelector('.sources-emoji').textContent = translations[lang]['sources_button'];

    document.querySelector('.language-switcher .active')?.classList.remove('active');
    document.querySelector(`.language-switcher a[href="#"][data-lang-switcher="${lang}"]`).classList.add('active');

    localStorage.setItem('selectedLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.language-switcher a[data-lang-switcher="uk"]').addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('uk');
    });

    document.querySelector('.language-switcher a[data-lang-switcher="en"]').addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });

    const storedLang = localStorage.getItem('selectedLanguage');
    if (storedLang) {
        setLanguage(storedLang);
    } else {
        setLanguage('uk');
    }
});
