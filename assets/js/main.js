// const carousel = document.getElementById('carousel');
// const slides = carousel.children;
// let index = 0;

// setInterval(showNextSlide, 1000); // Cambia cada 30 segundos

// CARGAR NUEVO CAROUSEL

let cont = 0;
let xx;


fetch('./components/carousel.html')
    .then(response => response.text())
    .then(data => document.getElementById('carousel-inpro').innerHTML = data);


// window.addEventListener('load', function() {
document.addEventListener('DOMContentLoaded', function() {
    // alert('dom');
    // document.getElementById("slider-2").style.display = 'none';
    // addClass(document.getElementById("sButton1"), "bg-purple-800");
    loopSlider(cont, xx);
});

// document.addEventListener('DOMContentLoaded', function() {

//     // TAILWIND CAROUSEL 
//     const carousel = document.getElementById('carousel');
//     const slides = carousel.children;
//     let index = 0;

//     // setInterval(showNextSlide(carousel, slides, index), 30000); // Cambia cada 30 segundos
//     setInterval(showNextSlide(carousel, slides, index), 1000); // Cambia cada 30 segundos

// });


// let showNextSlide = (carousel, slides, index) => {

//     index = (index + 1) % slides.length;
//     carousel.scrollTo({
//       left: slides[index].offsetLeft,
//       behavior: 'smooth'
//     });

// }

// FUNCIONES

function showNextSlide() {
    index = (index + 1) % slides.length;
    carousel.scrollTo({
        left: slides[index].offsetLeft,
        behavior: 'smooth'
    });
}

function fadeOut(element, duration, callback) {
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.display = 'none';
        if (callback) callback();
    }, duration);
}

function fadeIn(element, duration, callback) {
    element.style.opacity = 0;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = 1;
        if (callback) callback();
    }, 10);
    setTimeout(callback, duration);
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function loopSlider(cont, xx) {
    xx = setInterval(function() {
        if (cont === 0) {
            sliderButton2(cont);
        } else {
            sliderButton1(cont);
        }
    }, 8000);
}

function reinitLoop(time) {
    clearInterval(xx);
    setTimeout(loopSlider, time);
}

function sliderButton1() {
    fadeOut(document.getElementById("slider-2"), 400, function() {
        fadeIn(document.getElementById("slider-1"), 400);
    });
    removeClass(document.getElementById("sButton2"), "bg-purple-800");
    addClass(document.getElementById("sButton1"), "bg-purple-800");
    reinitLoop(4000);
    cont = 0;
}

function sliderButton2() {
    fadeOut(document.getElementById("slider-1"), 400, function() {
        fadeIn(document.getElementById("slider-2"), 400);
    });
    removeClass(document.getElementById("sButton1"), "bg-purple-800");
    addClass(document.getElementById("sButton2"), "bg-purple-800");
    reinitLoop(4000);
    cont = 1;
}