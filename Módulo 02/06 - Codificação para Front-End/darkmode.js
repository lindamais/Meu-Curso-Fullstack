const stylesheet = document.getElementById('stylesheet');

let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        stylesheet.href = 'dark-style.css'; // Altere para o nome do seu arquivo CSS de dark mode
    } else {
        stylesheet.href = 'style.css'; // Altere para o nome do seu arquivo CSS normal
    }
}

// Exemplo: Adicionando um botão para alternar entre os modos claro e escuro
const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Toggle Dark Mode';
darkModeButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeButton);
