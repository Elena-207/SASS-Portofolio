
//burger menu btn interactive when open or close
const menuBtn =document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.menu-nav_item'); //with selector all we will get an array of elements here


let shoMenu = false;

menuBtn.addEventListener('click', toggleMenu);

//now when the button is clicked :menu,nav list 
function toggleMenu() {
    if(!shoMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        shoMenu = true;
    }else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    shoMenu = false;
    }
}