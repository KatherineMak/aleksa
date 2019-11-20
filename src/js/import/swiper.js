import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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
