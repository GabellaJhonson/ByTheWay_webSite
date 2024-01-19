const appText = document.getElementById('applicationText');
const lastInput = document.getElementById('phone');

appText.style.opacity = '0';
appText.style.transition = 'opacity 0.5s ease-in-out';

lastInput.addEventListener('input', function() {
    appText.style.opacity = '1';
});
