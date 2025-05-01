 /**=====================
     Custom Swiper js
==========================**/
 var swiper = new Swiper(".mySwiper", {
     effect: "cards",
     grabCursor: true,
     loop: true,
     centeredSlides: true,
     autoplay: {
         delay: 3000,
         //  disableOnInteraction: false,
     },
     pagination: {
         el: ".swiper-pagination",
         dynamicBullets: true,
         clickable: true,
     },
     //  navigation: {
     //      nextEl: ".swiper-button-next",
     //      prevEl: ".swiper-button-prev",
     //  },
 });