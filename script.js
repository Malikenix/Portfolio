// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

/**
 * Updates the visibility of the sun/moon icons based on the current theme.
 * Light Mode -> Shows Moon (Dark Icon)
 * Dark Mode -> Shows Sun (Light Icon)
 */
function updateIcons() {
    if (document.documentElement.classList.contains('dark')) {
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    } else {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }
}

/**
 * Initializes the theme based on local storage or system preference.
 */
function initTheme() {
    const savedTheme = localStorage.getItem('color-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    updateIcons();
}

/**
 * Toggles the 'dark' class on the HTML element and saves the preference.
 */
function toggleTheme() {
    // Toggle the dark class
    document.documentElement.classList.toggle('dark');

    // Save choice to localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('color-theme', 'dark');
    } else {
        localStorage.setItem('color-theme', 'light');
    }

    // Refresh the icons
    updateIcons();
}

// Event Listeners & Execution
if (themeToggleBtn) {
    initTheme();
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Optional: Listen for system theme changes while the user is on the site
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('color-theme')) {
        if (e.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateIcons();
    }
});