import Swiper from 'swiper';


//advantages
const swiper1 = new Swiper('.swiper-container-advantages', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  speed: 800,
  slidesPerView: 4,
  coverflowEffect: {
    rotate: 0,
    stretch: 15,
    depth: 0,
    modifier: 1,
    slideShadows : false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});


//gallery
const swiper = new Swiper('.swiper-container-gallery', {
  slidesPerView: 2,
  spaceBetween: 0,
  speed: 600,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-shares-gallery',
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
