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
let cards = document.querySelectorAll('.card-item')

let flag = false;

filterGardenButton.addEventListener('click', function() {
  if (flag === false) {
    cards.forEach(item => item.classList.add('card-item--inactive'))
  }
  if (filterLawnButton.classList.contains('service__button--active') && filterPlantingButton.classList.contains('service__button--active')) {
    return
  } else {
    cardsGarden.forEach(item => item.classList.toggle('card-item--inactive'))
    this.classList.toggle('service__button--active')
    flag = true
  }
})
filterLawnButton.addEventListener('click', function() {
  if (flag === false) {
    cards.forEach(item => item.classList.add('card-item--inactive'))
  }
  if (filterGardenButton.classList.contains('service__button--active') && filterPlantingButton.classList.contains('service__button--active')) {
    return
  } else {
    cardsLawn.forEach(item => item.classList.toggle('card-item--inactive'))
    this.classList.toggle('service__button--active')
    flag = true
  }
})
filterPlantingButton.addEventListener('click', function() {
  if (flag === false) {
    cards.forEach(item => item.classList.add('card-item--inactive'))
  }
  if (filterGardenButton.classList.contains('service__button--active') && filterLawnButton.classList.contains('service__button--active')) {
    return
  } else {
    cardsPlanting.forEach(item => item.classList.toggle('card-item--inactive'))
    this.classList.toggle('service__button--active')
    flag = true
  }
})

// let chooseBasic = document.querySelector('.accordion--basic')
// let chooseStandard = document.querySelector('.accordion--standard')
// let choosePro = document.querySelector('.accordion--pro')

// let showBasic = document.querySelector('.tariff--basic')
// let showStandard = document.querySelector('.tariff--standard')
// let showPro = document.querySelector('.tariff--pro')

// chooseBasic.addEventListener('click', e => {
//   console.log(e.target)
//   event.stopPropagation()
//   showBasic.classList.toggle('tariff--active')
// }, true)