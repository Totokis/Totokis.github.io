// Import tłumaczeń z zewnętrznego pliku
import { translations } from './translations.js';


document.addEventListener('DOMContentLoaded', () => {
    // Deklaracje zmiennych
    const navTitle = document.getElementById('nav-title');
    const header = document.querySelector('header');
    const themeToggleButton = document.getElementById('theme-toggle');
    let currentLang = loadSavedLanguage(); // Ładowanie zapisanego języka

    // Inicjalizacja funkcji
    initializeThemeToggle();
    initializeLanguageToggle();
    initializeScrollListener();

    // Funkcje
    function initializeScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > header.offsetHeight) {
                navTitle.classList.remove('hidden');
            } else {
                navTitle.classList.add('hidden');
            }
        });
    }

    function initializeThemeToggle() {
        // Załaduj i zastosuj motyw z localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }

        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Zapisz aktualny motyw w localStorage
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        });
    }

    function initializeLanguageToggle() {
        const langEnButton = document.getElementById('lang-en');
        const langPlButton = document.getElementById('lang-pl');

        langEnButton.addEventListener('click', () => {
            changeLanguage('en');
        });

        langPlButton.addEventListener('click', () => {
            changeLanguage('pl');
        });

        if (currentLang) {
            translatePage(currentLang);
        }
    }

    function changeLanguage(selectedLang) {
        if (currentLang !== selectedLang) {
            currentLang = selectedLang;
            translatePage(currentLang);
            localStorage.setItem('lang', currentLang); // Zapisz wybrany język w localStorage
        }
    }


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
