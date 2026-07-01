// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

function updateIcons() {
    if (document.documentElement.classList.contains('dark')) {
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    } else {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }
}

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

themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    updateIcons();
});

initTheme();

// Lightbox Logic
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lb.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// EmailJS Initialization
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init("GY2krpdDvgNlENp1a");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Replace these placeholders with your actual IDs from EmailJS dashboard
    const serviceID = 'service_n5i5r0o';
    const templateID = 'template_er02ag5';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully! I will get back to you soon.');
            this.reset();
        }, (error) => {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
});


function copyAndMail(event, anchorElement) {
    // 1. Copy the email text seamlessly behind the scenes
    navigator.clipboard.writeText('carryromero2@gmail.com');

    // 2. Identify target elements inside the clicked link
    const copyIcon = anchorElement.querySelector('.copy-icon');
    const checkIcon = anchorElement.querySelector('.check-icon');

    // 3. Transform icon to checkmark state
    if (copyIcon && checkIcon) {
        copyIcon.classList.add('hidden');
        checkIcon.classList.remove('hidden');

        // 4. Revert back to original layout after 2 seconds
        setTimeout(() => {
            copyIcon.classList.remove('hidden');
            checkIcon.classList.add('hidden');
        }, 2000);
    }
    
    // Note: The browser will naturally proceed to open the mailto link 
    // simultaneously without interrupting the clipboard function execution loop.
}


// Service ID:  service_n5i5r0o