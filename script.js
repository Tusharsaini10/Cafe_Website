const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
//Toggle mobile visiblity 
menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
});
//Close menu when the close button is Clicked
menuCloseButton.addEventListener("click",()=>
    menuOpenButton.click()
);




//Swipper class
const swiper = new Swiper('.slider-wrapper', {
  
  loop: true,
  grabCursor:true,
  spaceBetween :25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints :{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
  }

});
