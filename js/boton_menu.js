// Selección del botón y el menú
/*
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Escuchar el clic en el botón
menuBtn.addEventListener('click', () => {
    // Alternar la clase que muestra el menú
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});*/

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Alternar el menú en pantallas pequeñas
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});
