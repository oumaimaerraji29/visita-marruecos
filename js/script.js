let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
//Esta línea de código se encarga de asignar una función que se ejecutará cuando se haga clic en el elemento que tenga el id menu-btn en el documento HTML. La función asignada se define usando una sintaxis de función flecha de ES6 y tiene como tarea agregar la clase active al elemento que tenga la clase navbar.

document.querySelector('#nav-close').onclick = () =>{ //capturarlo
    navbar.classList.remove('active');
}
// es una función flecha que se ejecutará cuando se haga clic en el elemento nav-close. En este caso, se elimina la clase active del elemento que tenga la clase navbar, lo que probablemente desencadenará algunos cambios visuales en la interfaz de usuario.
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{ // Ambas nos permiten acceder a elementos del DOM utilizando un selector de CSS
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};


var swiper = new Swiper(".home-slider", { //
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".clients-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});