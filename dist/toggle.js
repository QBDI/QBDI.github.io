var toggle = document.querySelector('#nav-toggle');
var menu = document.querySelector('#nav-menu');

toggle.addEventListener('click', toggleNav);

function toggleNav() {
toggle.classList.toggle('is-active');
menu.classList.toggle('is-active');
}