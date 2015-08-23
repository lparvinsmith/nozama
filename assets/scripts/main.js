'use strict';

var server = '//localhost:3000';
// var server = '[place production server here]';

//////////////////////////////////////////////
// BEGIN: document.ready
//////////////////////////////////////////////

$(document).ready(function() {

  $('#carousel').carousel();

  $('#carousel').show();
  $('#bikepage').hide();

  //////////////////////////////////////////////
  // BEGIN: show appropriate page; hide the rest
  //////////////////////////////////////////////

   $('#logo').on('click', function(event) {
    event.preventDefault();
    $('#carousel').show();
    $('#bikepage').hide();
  });

  $('.bicycles').on('click', function(event) {
    event.preventDefault();
    $('#carousel').hide();
    $('#bikepage').show();
  });

  //////////////////////////////////////////////
  // END: show appropriate page, hide the rest
  //////////////////////////////////////////////

});

//////////////////////////////////////////////
// END: document.ready
//////////////////////////////////////////////
