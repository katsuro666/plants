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

let filterGardenButton = document.querySelector('.filter--garden')
let filterLawnButton = document.querySelector('.filter--lawn')
let filterPlantingButton = document.querySelector('.filter--planting')
let serviceButtons = document.querySelectorAll('.service__button')

let cardsGarden = document.querySelectorAll('.card--garden')
let cardsLawn = document.querySelectorAll('.card--lawn')
let cardsPlanting = document.querySelectorAll('.card--planting')

function cardsFilter() {
  if (this.classList.contains('service__button--active')) {
    serviceButtons.forEach(item => item.classList.remove('service__button--active'))
  } else {
    serviceButtons.forEach(item => item.classList.remove('service__button--active'))
    this.classList.add('service__button--active')
  }
}

filterGardenButton.addEventListener('click', function() {
  if (this.classList.contains('service__button--active')) {
    serviceButtons.forEach(item => item.classList.remove('service__button--active'))
    cardsGarden.forEach(item => item.classList.remove('card-item--inactive'))
    cardsLawn.forEach(item => item.classList.remove('card-item--inactive'))
    cardsPlanting.forEach(item => item.classList.remove('card-item--inactive'))
  } else {
    serviceButtons.forEach(item => item.classList.remove('service__button--active'))
    this.classList.add('service__button--active')
    cardsGarden.forEach(item => item.classList.remove('card-item--inactive'))
    cardsLawn.forEach(item => item.classList.add('card-item--inactive'))
    cardsPlanting.forEach(item => item.classList.add('card-item--inactive'))
  }
})
filterLawnButton.addEventListener('click', function() {
  if (this.classList.contains('service__button--active')) {
    serviceButtons.forEach(item => item.classList.remove('service__button--active'))
    cardsLawn.forEach(item => item.classList.remove('card-item--inactive'))
    cardsGarden.forEach(item => item.classList.remove('card-item--inactive'))
    cardsPlanting.forEach(item => item.classList.remove('card-item--inactive'))
  } else {
    serviceButtons.forEach(item => item.classList.remove('service__button--active'))
    this.classList.add('service__button--active')
    cardsLawn.forEach(item => item.classList.remove('card-item--inactive'))
    cardsGarden.forEach(item => item.classList.add('card-item--inactive'))
    cardsPlanting.forEach(item => item.classList.add('card-item--inactive'))
  }
})
filterPlantingButton.addEventListener('click', function() {
  if (this.classList.contains('service__button--active')) {
    serviceButtons.forEach(item => item.classList.remove('service__button--active'))
    cardsPlanting.forEach(item => item.classList.remove('card-item--inactive'))
    cardsLawn.forEach(item => item.classList.remove('card-item--inactive'))
    cardsGarden.forEach(item => item.classList.remove('card-item--inactive'))
  } else {
    serviceButtons.forEach(item => item.classList.remove('service__button--active'))
    this.classList.add('service__button--active')
    cardsPlanting.forEach(item => item.classList.remove('card-item--inactive'))
    cardsLawn.forEach(item => item.classList.add('card-item--inactive'))
    cardsGarden.forEach(item => item.classList.add('card-item--inactive'))
  }
})