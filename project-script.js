
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
};




import { translations } from './translations.js';
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = loadSavedLanguage(); // Ładowanie zapisanego języka
    translatePage(currentLang); // Tłumaczenie strony

    function translatePage(language) {
        document.querySelectorAll('[data-translate]').forEach((element) => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[language][key];
        });
    }

    function loadSavedLanguage() {
        return localStorage.getItem('lang') || 'en'; // Domyślny język to angielski
    }
});
