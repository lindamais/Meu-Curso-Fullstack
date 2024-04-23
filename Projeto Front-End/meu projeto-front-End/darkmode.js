const darkModeButton = document.getElementById('darkModeButton');
const stylesheet = document.getElementById('stylesheet');

darkModeButton.addEventListener('click', () => {
    if (stylesheet.getAttribute('href') === 'style-light.css') {
        stylesheet.setAttribute('href', 'style-dark.css');
        darkModeButton.textContent = 'Modo Claro';
    } else {
        stylesheet.setAttribute('href', 'style-light.css');
        darkModeButton.textContent = 'Modo Escuro';
    }
});