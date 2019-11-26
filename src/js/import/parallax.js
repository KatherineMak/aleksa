import Parallax from 'parallax-js';
if(window.innerWidth > '1040') {
  let spray = $('.intro__img-container').get(0);
  let parallaxSpray = new Parallax(spray);
  let brandName = $('.brand-name__container').get(0);
  let parallaxBrandName = new Parallax(brandName);
}

