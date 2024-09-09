const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

// Abrir el menú
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('expanded');
});

// Cerrar el menú
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('expanded');
});
