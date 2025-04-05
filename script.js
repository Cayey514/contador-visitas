// Elementos del DOM
const welcomeMessage = document.getElementById('welcome-message');
const visitCountElement = document.getElementById('visit-count');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');

// Leer el contador de visitas del archivo JSON (simulado aquí)
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

// Incrementar el contador de visitas
visitCount += 1;
localStorage.setItem('visitCount', visitCount);

// Mostrar el contador de visitas
visitCountElement.textContent = visitCount;

// Leer el nombre del usuario del localStorage
const savedName = localStorage.getItem('userName');

if (savedName) {
    // Si hay un nombre guardado, mostrar un mensaje personalizado
    welcomeMessage.textContent = `¡Bienvenido de nuevo, ${savedName}!`;
} else {
    // Si no hay un nombre guardado, mostrar el mensaje predeterminado
    welcomeMessage.textContent = '¡Bienvenido!';
}

// Manejar el envío del formulario
nameForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    const name = nameInput.value.trim();

    if (name) {
        // Guardar el nombre en localStorage
        localStorage.setItem('userName', name);

        // Actualizar el mensaje de bienvenida
        welcomeMessage.textContent = `¡Bienvenido, ${name}!`;

        // Limpiar el campo de entrada
        nameInput.value = '';
    }
});