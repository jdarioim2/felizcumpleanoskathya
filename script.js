// Capturamos los elementos del HTML
const btnOpen = document.getElementById("open-btn");
const startScreen = document.getElementById("start-screen");
const mainContent = document.getElementById("main-content");
const cake = document.getElementById("cake");
const message = document.getElementById("message");
const audio = document.getElementById("bday-audio");

// Qué pasa al hacer clic en el botón
btnOpen.addEventListener("click", () => {
    // 1. Ocultar el botón
    startScreen.style.display = "none";
    
    // 2. Mostrar el contenedor principal
    mainContent.style.display = "flex";
    
    // 3. Reproducir la música
    audio.play();
    
    // 4. Activar las animaciones agregando la clase 'show'
    cake.classList.add("show");
    message.classList.add("show");
});