import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiper1 = new Swiper('.swiper-container-1', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 4,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});


// //home
// var swiper = new Swiper('.swiper-shares', {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-shares-next',
//     prevEl: '.swiper-shares-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination-shares',
//     clickable: true,
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 1,
//       spaceBetween: 30
//     }
//   }
// });
