import './pages/index.css'
import './components/Swiper.js'
import './components/projects.js'

// мобильное меню
const burgerMenu = document.querySelector('.header__buttonMenu');
const menu = document.querySelector('.header__menu');
const exit = document.querySelector('.header__exit');

burgerMenu.addEventListener('click', () => {
    menu.classList.add('header__menu_active')
})
exit.addEventListener('click', () => {
    menu.classList.remove('header__menu_active')

})

/*education block script*/
const magistrBtn = document.querySelector('.education__tab_magistr');
const aspirantBtn = document.querySelector('.education__tab_aspirant');

function handleClickOnEducationBar() {
    magistrBtn.classList.toggle('education__tab_active');
    aspirantBtn.classList.toggle('education__tab_active');
    document.querySelector('.education__card_magistr').classList.toggle('education__card_inActive');
    document.querySelector('.education__card_aspirant').classList.toggle('education__card_inActive');
}

magistrBtn.addEventListener('click', handleClickOnEducationBar);
aspirantBtn.addEventListener('click', handleClickOnEducationBar);
/*///////////////*/

//всплывающие ссылки
const linkEducation = document.querySelector('#educ');
const linkPopUp = document.querySelector('.header__link_group');
linkEducation.addEventListener('click', () => {
    if (linkPopUp.style.opacity == 1) {
        linkPopUp.style.opacity = 0
    } else {
        linkPopUp.style.opacity = 1
    }
})
//всплывающие ссылки на телефоне header
const linkEducationMobile = document.querySelector('#educm');
const linkOpacity = document.querySelectorAll('.opacity');
const linkPopUpMobile = document.querySelector('.header__link_mobile_group');
linkEducationMobile.addEventListener('click', () => {
    if (linkPopUpMobile.style.opacity == 1) {
        linkOpacity.forEach((item) => {
            item.style.opacity = 1
        })
        linkPopUpMobile.style.opacity = 0;
        linkPopUpMobile.style.position = 'absolute';
        linkPopUpMobile.style.visibility = 'hidden';
        linkEducationMobile.style.fontWeight = 400
    } else {
        linkOpacity.forEach((item) => {
            item.style.opacity = 0.5
        })
        linkEducationMobile.style.fontWeight = 600
        linkPopUpMobile.style.opacity = 1;
        linkPopUpMobile.style.position = 'relative';
        linkPopUpMobile.style.visibility = 'visible';
    }
})

//форма feedback
const feedbackForm = document.querySelector('.feedback__form');
const feedbackSubmitBtn = document.querySelector('.feedback__submitBtn');
const feedbackFormInputValues = {};

feedbackSubmitBtn.disabled = true;

function checkInputValidity(evt) {
    const form = evt.target.form;
    form.querySelector('.button').disabled = !form.checkValidity();
}

feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputList = Array.from(feedbackForm.querySelectorAll('.input'));
    inputList.forEach(input => {
        feedbackFormInputValues[input.name] = input.value;
    });
});

feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
});

feedbackForm.addEventListener('input', checkInputValidity);
//форма feedback

//industrial анимация карточек при наведении курсора
const industrialCardContainer = document.querySelector('.industrial__cards');
const cardArray = Array.from(industrialCardContainer.querySelectorAll('.industrial__card'));
cardArray.forEach(card => {
    card.addEventListener('mouseenter', () => {

    })
});