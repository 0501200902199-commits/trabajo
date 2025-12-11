/* Archivo: assets/js/main.js */

let lastScrollTop = 0; // Variable para recordar la posición anterior
const header = document.getElementById('main-header'); // Seleccionamos tu menú

window.addEventListener('scroll', function() {
    // Detectamos la posición actual del scroll
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // --- LÓGICA 1: CAMBIO DE COLOR (Transparente a Sólido) ---
    // Si bajamos más de 50px, le ponemos fondo blanco
    if (currentScroll > 50) {
        header.classList.add('solid-bg');
    } else {
        // Si estamos arriba del todo, se quita el fondo (vuelve a transparente)
        header.classList.remove('solid-bg');
    }

    // --- LÓGICA 2: OCULTAR / MOSTRAR (Smart Navbar) ---
    // Si currentScroll > lastScrollTop significa que estamos BAJANDO
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Agregamos la clase que lo mueve hacia arriba (lo oculta)
        header.classList.add('nav-hide'); 
    } else {
        // Si no, significa que estamos SUBIENDO, así que le quitamos la clase (aparece)
        header.classList.remove('nav-hide');
    }

    // Actualizamos la posición "anterior" para la próxima vez que se mueva
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});