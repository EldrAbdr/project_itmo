import {aboutArray} from '../utils/aboutUsArray.js';

var swiper = new Swiper(".aboutUs__cards", {
    slidesPerView: 1,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".aboutUs__pagination",
        clickable: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        430: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 25,
            slidesPerGroup: 2,
        },
        910: {
            slidesPerView: 3,
            spaceBetween: 35,
            slidesPerGroup: 3,
        }
    }
});

const aboutUsContainer = document.querySelector('.aboutUs-container')
aboutArray.forEach((item) => {
    let aboutUsElement = document
        .querySelector('#aboutUs-element')
        .content
        .querySelector('.swiper-slide')
        .cloneNode(true);
    aboutUsElement.querySelector('.aboutUs__date').textContent = item.date
    aboutUsElement.querySelector('.aboutUs__smallTitle').textContent = item.title;
    aboutUsElement.querySelector('.aboutUs__text').textContent = item.text;
    aboutUsContainer.append(aboutUsElement);
})
