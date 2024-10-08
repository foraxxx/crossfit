let bookButton = document.querySelector('.header__buttons-book-button');
let closeButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

bookButton.addEventListener('click', function(event1) {
    modal.style.display = "block";
    body.classList.add('no-scroll');
    header.setAttribute('inert', '');
    main.setAttribute('inert', '');
    footer.setAttribute('inert', '');
});

closeButton.addEventListener('click', function(event1) {
    modal.style.display = "none";
    body.classList.remove('no-scroll');
    header.removeAttribute('inert', '')
    main.removeAttribute('inert', '')
    footer.removeAttribute('inert', '')
});

const sliderTrack = document.querySelector('.family-body');
const slides = document.querySelectorAll('.family-image');


let currentIndex = 0;
const slideWidth = slides[0].clientWidth;


// function moveSlider() {
//   currentIndex++;
  
//   if (currentIndex >= slides.length) {
//     // sliderTrack.style.transition = 'none'; 
//     currentIndex = 0;
//     sliderTrack.style.transform = `translateX(0)`; 
//   } else {
//     sliderTrack.style.transition = 'transform 0.5s ease';
//     sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`; 
//   }
// }
// setInterval(moveSlider, 2000);

function addActiveClass(elements, activeClass) {
    elements.forEach(element => {
        element.addEventListener('click', function() {
            elements.forEach(el => el.classList.remove(activeClass));
            this.classList.add(activeClass);
        });
    });
}

let links = document.querySelectorAll('.header__menu-link');



let paginationButtons = document.querySelectorAll('.slider-pagination-button');
let sliderList = document.querySelectorAll('.slider-item');


paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

      sliderList.forEach(image => image.classList.remove('is-current'));
      paginationButtons.forEach(btn => btn.classList.remove('is-current'));
  
      sliderList[index].classList.add('is-current');
      button.classList.add('is-current');
    });
});

