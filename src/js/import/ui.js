import modal from 'jquery-modal';
// import '../lib/fancybox';









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
$('.btn-next, .btn-next__container, .nav-links, .home-advantages, .menu li').on('click','a', function(event) {
// $('.container').on('click','a', function(event) {
  event.preventDefault();
  const id  = $(this).attr('href');
  const {top} = $(id).offset();
  $('body,html').animate({scrollTop: top - 50}, 1000);
});
