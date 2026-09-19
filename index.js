// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-moon';
    }
});

// Visit Counter Storage
let visits = localStorage.getItem('siteVisits');
if (!visits) {
    visits = 0;
} else {
    visits = parseInt(visits) + 1;
}
localStorage.setItem('siteVisits', visits);
document.getElementById('visitCounter').textContent = visits;

// Interactive Click Counter Challenge
const clickMeBtn = document.getElementById('clickMeBtn');
const clickCountDisplay = document.getElementById('clickCount');
let clicks = 0;

clickMeBtn.addEventListener('click', () => {
    clicks++;
    clickCountDisplay.textContent = clicks;

    // Tiny bounce animation effect
    clickCountDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        clickCountDisplay.style.transform = 'scale(1)';
    }, 150);
});

// Celebration Launch Button (Alert / Console log effect)
const confettiBtn = document.getElementById('confettiBtn');
confettiBtn.addEventListener('click', () => {
    alert("🎉 Woohoo! Thanks for checking out my first website. You're awesome!");
});