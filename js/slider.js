const slider = document.querySelector('.swiper-container');

let swiper = new Swiper(slider, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
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
    autoplay: {
        delay: 1500,
        stoponclick: false,
        
    },
    speed: 500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    loop: true,
  });




/*new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoheight: true,
    centeredslides: true,
    autoplay: {
        delay: 1500,
        stoponclick: false,
        
    },
    speed: 500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    loop: true,
});*/