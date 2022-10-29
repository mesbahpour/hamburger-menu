let container = document.getElementById('menu-container');
let nav = document.querySelector('nav');

container.addEventListener('click', toggleMenu);

function toggleMenu() {
    container.classList.toggle('open');
    nav.classList.toggle('open');
}
