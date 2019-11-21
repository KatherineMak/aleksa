// import '../lib/maskedinput.js';
// import selectric from 'selectric';

// select
// $('select').selectric();

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
  if(window.pageYOffset > 500) {
      header.classList.add("header-fixed");
  } else {
      header.classList.remove("header-fixed");
  }
};

$(function() {
    $(".menu-toggle").click(function(){
        $(".menu").toggleClass("is-active");
        $( ".menu-bg" ).fadeIn();
    });

    $(".btn-close, .menu-bg").click(function(){
        $(".menu").toggleClass("is-active");
        $( ".menu-bg" ).fadeOut();
    });

    $(".btn-next, .btn-next__container, .nav-links").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href');
            const {top} = $(id).offset();
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
