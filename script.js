// ==========================================
// LIGHT / DARK THEME TOGGLE INTERACTION
// ==========================================
const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
const htmlElement = document.documentElement;

// Check for saved user preference in localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });
});

function updateThemeIcons(theme) {
    themeToggles.forEach(toggle => {
        toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
}

// ==========================================
// MOBILE NAVIGATION TOGGLE INTERACTION
// ==========================================
const toggleBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('nav--active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav--active');
        toggleBtn.setAttribute('aria-expanded', 'false');
    });
});

// ==========================================
// DYNAMIC CONTENT UPDATE PLAYGROUND
// ==========================================
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

let stateToggle = false;

changeTextBtn.addEventListener('click', () => {
    stateToggle = !stateToggle;
    if (stateToggle) {
        dynamicText.textContent = "Current State: ⚡ Dynamic JavaScript Interactivity Active!";
        changeTextBtn.style.backgroundColor = "#1d4ed8";
    } else {
        dynamicText.textContent = "Current State: Standard Architectural Mode";
        changeTextBtn.style.backgroundColor = "";
    }
});

// ==========================================
// ELEMENT STYLE TOGGLE INTERACTION
// ==========================================
const toggleStyleBtn = document.getElementById('toggle-style-btn');
const playgroundCard = document.querySelector('.playground__card');

toggleStyleBtn.addEventListener('click', () => {
    playgroundCard.classList.toggle('highlighted');
    
    if (playgroundCard.classList.contains('highlighted')) {
        toggleStyleBtn.textContent = "Remove Highlight";
    } else {
        toggleStyleBtn.textContent = "Toggle Highlight";
    }
});