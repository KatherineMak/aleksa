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
