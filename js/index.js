console.log('110/110')

let navBurger = document.querySelector('.header__burger')
let navMenu = document.querySelector('.header__nav')
let navCross = document.querySelector('.nav__cross')

function toggleMenu() {
  navMenu.classList.toggle('header__nav--active')
}

navBurger.addEventListener('click', toggleMenu)
navCross.addEventListener('click', toggleMenu)
window.addEventListener('click', (e) => {
  if (e.target !== navBurger) {
    navMenu.classList.remove('header__nav--active')
  }
})