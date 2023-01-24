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

let chooseBasic = document.querySelector('.accordion-open--basic')
let chooseStandard = document.querySelector('.accordion-open--standard')
let choosePro = document.querySelector('.accordion-open--pro')

let showBasic = document.querySelector('.tariff--basic')
let showStandard = document.querySelector('.tariff--standard')
let showPro = document.querySelector('.tariff--pro')

let orderButton = document.querySelector('.tariff__order')

orderButton.addEventListener('click', e => e.stopPropagation())

let closeAccordion = document.querySelectorAll('.tariff__name')
let tariffs = document.querySelectorAll('.tariff')

function closeTariffs() {
  tariffs.forEach(item => item.classList.remove('tariff--active'))
}

closeAccordion.forEach(item => {
  item.addEventListener('click', closeTariffs)
})

chooseBasic.addEventListener('click', e => {
  closeTariffs()
  showBasic.classList.toggle('tariff--active')
})
chooseStandard.addEventListener('click', e => {
  closeTariffs()
  showStandard.classList.toggle('tariff--active')
})
choosePro.addEventListener('click', e => {
  closeTariffs()
  showPro.classList.toggle('tariff--active')
})

let dropdownArrow = document.querySelector('.select__arrow')
let openDropdown = document.querySelector('.contacts__select')
let dropdownSelect = document.querySelector('.select__dropdown')

openDropdown.addEventListener('click', e => {
  openDropdown.classList.add('select--active')
  dropdownSelect.classList.toggle('select__dropdown--active')
  dropdownArrow.classList.toggle('select__arrow--active')
})

let currentCity = document.querySelector('.select__current')
let dropdownCity = document.querySelectorAll('.select__item')

let cityCard = document.querySelector('.city-card')
let cityCardCity = document.querySelector('.city-card--city')
let cityCardPhone = document.querySelector('.city-card--phone')
let cityCardAddress = document.querySelector('.city-card--address')
let contactsWoman = document.querySelector('.contacts__women')
let callBtn = document.querySelector('.city-card__button')

dropdownCity.forEach(item => item.addEventListener('click', e => {
  e.stopPropagation()
  openDropdown.classList.add('select--active')
  dropdownSelect.classList.remove('select__dropdown--active')
  dropdownArrow.classList.remove('select__arrow--active')
  currentCity.textContent = e.target.textContent
  cityCard.classList.add('city-card--active')
  contactsWoman.classList.add('contacts__women--hide')

  switch(e.target.textContent) {
    case 'Yonkers, NY': cityCardCity.textContent = e.target.textContent
                        cityCardPhone.textContent = '+1	914	678 0003'
                        cityCardAddress.textContent = '511 Warburton Ave'
                        break;
    case 'Sherrill, NY': cityCardCity.textContent = e.target.textContent
                         cityCardPhone.textContent = '+1	315	908 0004'
                          cityCardAddress.textContent = '14 WEST Noyes BLVD'
                          break;
    case 'New York City': cityCardCity.textContent = e.target.textContent
                          cityCardPhone.textContent = '+1	212	456 0002'
                          cityCardAddress.textContent = '9 East 91st Street'
                          break;
    case 'Canandaigua, NY': cityCardCity.textContent = e.target.textContent
                            cityCardPhone.textContent = '+1	585	393 0001'
                            cityCardAddress.textContent = '151 Charlotte Street'
                            break;
  }
}))

callBtn.addEventListener('click', e => window.open(`tel:${cityCardPhone.textContent}`, '_self'))