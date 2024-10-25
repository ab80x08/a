// Wait for the startup animation to finish before showing the gallery
window.addEventListener('load', () => {
    setTimeout(() => {
        const startupScreen = document.getElementById('startup-screen');
        startupScreen.style.display = 'none';
    }, 4000); // 2 seconds delay + 2 seconds fade-out animation
});
