import modal from 'jquery-modal';
// pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});

window.onscroll = function showHeaderFixed() {
  const header = $('.header').get(0);
  if(window.pageYOffset > 70) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
};
$( document ).ready(function() {
  function addToCart(e) {
    e.preventDefault();
    console.log('Hi');
    $('#buy').closest('div.product-card').toggleClass('is-active');
  };
});


$(function() {
  // console.log("Hi ");

  $('.menu-toggle').click(function() {
    $('.menu').toggleClass('is-active');
    $( '.menu-bg' ).fadeIn();
  });

  $('.btn-close, .menu-bg').click(function(e) {
    e.preventDefault();
    $('.menu').toggleClass('is-active');
    $( '.menu-bg' ).fadeOut();
  });

  // $('.btn-next, .btn-next__container, .nav-links').on('click','a', function(event) {
  $('.container').on('click','a', function(event) {
    event.preventDefault();
    const id  = $(this).attr('href');
    const {top} = $(id).offset();
    $('body,html').animate({scrollTop: top - 50}, 1000);
  });
});
