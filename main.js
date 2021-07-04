// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-active')
})

// Change Header's Background while scrolling
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        header.classList.add('header-background')
    } else {
        header.classList.remove('header-background')
    }
})