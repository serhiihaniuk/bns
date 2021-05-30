const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   direction: 'vertical',
   loop: false,
   speed: 800,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
   mousewheel: {
      invert: false,
    },

    simulateTouch: true,
 });
 

 new Swiper('.swiper-container--info', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  speed: 300,
  slidesPerView: 'auto',
  centeredSlides: true,
  mousewheel: {
     invert: false,
   },
});

let swiperTop = new Swiper('.swiper-container-top', {
  // Optional parameters
  
  speed:1000,
  
  slidesPerView: '1',
  centeredSlides: true,
  loop: true,
  

  

 
});
let swiperBot = new Swiper('.swiper-container-bot', {
 // Optional parameters
 
  speed:1000,
  
  slidesPerView: '1',
  centeredSlides: true,
  loop: true,
 
});

swiperBot.controller.control = swiperTop;
swiperTop.controller.control = swiperBot;

