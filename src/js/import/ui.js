import modal from 'jquery-modal';
// pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});

//fixed header
window.onscroll = function showHeaderFixed() {
  const header = $('.header').get(0);
  if(window.pageYOffset > 70) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
};

//mobile menu
//open
$('.menu-toggle').click(function() {
  $('.menu').toggleClass('is-active');
  $( '.menu-bg' ).fadeIn();
});
//close
$('.btn-close, .menu-bg').click(function(e) {
  e.preventDefault();
  $('.menu').toggleClass('is-active');
  $( '.menu-bg' ).fadeOut();
});
//open pop-up mobile menu
$('.menu__link').click(function(e) {
  e.preventDefault();
  $('.menu').toggleClass('is-active');
  $( '.menu-bg' ).fadeOut();
});


// anchor
$('.btn-next, .btn-next__container, .nav-links, .home-advantages, .menu').on('click','a', function(event) {
// $('.container').on('click','a', function(event) {
  event.preventDefault();
  const id  = $(this).attr('href');
  const {top} = $(id).offset();
  $('body,html').animate({scrollTop: top - 50}, 1000);
});


//add basket
$('.product-card a').on('click', function(event) {
  event.preventDefault();
  $(this).closest('.product-card').toggleClass('is-active');
  let productNumber = $('.product-card.is-active').length;
  $('.home-shop .order__items, .menu a span, .nav-links a span').text(productNumber);
  let sum = 0;
  $('.product-card.is-active').each(function(i, elem) {
    let coins = $(elem).find('.card-bottom span div').text();
    sum += +coins;
  });
  $('.order__price, .product__amount span').text(sum);

  $('.product__list').append('<div class="product" id="1"><div class="product__img"></div><div class="product__description"></div><div class="product__number"><p>Кол.</p><span class="number__span">1</span><div class="product__number-control"><a href="#" class="number-plus">+</a><a href="#" class="number-minus">-</a></div></div></div>');
  // $('.product__list').empty();
  $('.product__list').append($(this).closest('.product-description').clone());
  // console.log($(this).closest('h3').text());

  // $('.product__list-first').after('<div class="product"><div class="product__img"><img src="img/xsm-jar.png" alt="Product" /></div><div class="product__description"><h3>Aleksa Spray</h3><p>250 грн</p></div><div class="product__number"><p>Кол.</p><span>1</span><div class="product__number-control"><a href="#" class="number-plus">+</a><a href="#" class="number-minus">-</a></div></div></div>');
});
//plus product in basket
$('.number-plus').click(function(event) {
  event.preventDefault();
  console.log('Plus');
  let number = $(this).closest('.number__span').text();
  number += +number;
  $(this).closest('.number__span').text(number);
});





