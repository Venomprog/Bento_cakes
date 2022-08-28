$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .dop__supstar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


const links1 = document.querySelector('.header__link1');
const links2 = document.querySelector('.header__link2');
const links3 = document.querySelector('.header__link3');
const links4 = document.querySelector('.header__link4');
const links5 = document.querySelector('.header__link5');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const dopSupstar = document.querySelector('.dop__supstar');

links1.addEventListener("click", () => {
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
    dopSupstar.classList.remove('active');
});
links2.addEventListener("click", () => {
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
    dopSupstar.classList.remove('active');
});
links3.addEventListener("click", () => {
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
    dopSupstar.classList.remove('active');
});
links4.addEventListener("click", () => {
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
    dopSupstar.classList.remove('active');
});
links5.addEventListener("click", () => {
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
    dopSupstar.classList.remove('active');
});