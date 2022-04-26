import { projectsArray } from "../utils/projectsArrey.js";

// слайдер _______________________________________________________________
let swiper = new Swiper(".mySwiper-projects", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  breakpoints: {
    430: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    910: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
    }
  },
  pagination: {
    el: ".projects__pagination-fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".projects__pagination-arrow_right",
    prevEl: ".projects__pagination-arrow_left",
  },
});


// выпадающий список _________________________________________________________
const dropdownButton = document.querySelector('.projects__menu-dropdown-button');
const dropdownMenu = document.querySelector('.projects__dropdown-content');

function handleOpenMenu() {
  dropdownMenu.classList.toggle('projects__dropdown-content_opened');
  
}

dropdownButton.addEventListener('click', handleOpenMenu)


// проекты ____________________________________________________________________________
let projectsContainer = document.querySelector('.projects__container')


projectsArray.forEach((projec) => {
  let projectElement = document
        .querySelector('#project-element') 
        .content                           
        .querySelector('.swiper-slide')          
        .cloneNode(true);
  projectElement.querySelector('.projects__item-about').textContent = projec.about;
  projectElement.classList.add(projec.type);
  projectsContainer.append(projectElement)
});


let menu = document.querySelector('.projects__menu');
let allObjects = document.querySelectorAll('.swiper-slide');

menu.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.tagName !== 'LI') return false;
  let filterClass = e.target.dataset['f'];
  
  allObjects.forEach (el => {
    el.classList.remove('swiper-slide_hide')
    if(!el.classList.contains(filterClass) && filterClass !== 'all') {
      el.classList.add('swiper-slide_hide');
    }
  })
})