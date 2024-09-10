document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');
    var playButton = document.getElementById('play-music');

    audio.play().catch(function(error) {
        console.log('Autoplay fue prevenido: ', error);
        // Mostrar el botón para iniciar manualmente la reproducción
        playButton.style.display = 'block';
    });
});

// Función para reproducir la música cuando se hace clic en el botón
function playMusic() {
    var audio = document.getElementById('bg-music');
    audio.play().then(function() {
        // Ocultar el botón después de reproducir
        var playButton = document.getElementById('play-music');
        playButton.style.display = 'none';
    }).catch(function(error) {
        console.log('Error al intentar reproducir la música: ', error);
    });
}
// Transición de header y logo al hacer scroll
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    if (window.scrollY > 50) { // Cambia 50 por la cantidad de desplazamiento deseada
        header.classList.add('transparent');
        logo.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
        logo.classList.remove('transparent');
    }
});
