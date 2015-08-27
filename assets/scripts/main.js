'use strict';

var server = '//localhost:3000';
// var server = '[production server name goes here]';

//////////////////////////////////////////////
// BEGIN: document.ready
//////////////////////////////////////////////

$(document).ready(function() {

  // WAT
  window.Main = window.Main || {};

  // invokes carousel
  $('#carousel').carousel();

  // initial state of landing page
  showPage.landingPage();

  //////////////////////////////////////////////
  // BEGIN: show appropriate page; hide the rest
  //////////////////////////////////////////////

  $('#logo').on('click', function(event) {
    showPage.landingPage();
  });

  $('.bicycles').on('click', function(event) {
    showPage.bikePage();
  });

  $('.accessories').on('click', function(event) {
    showPage.accessoriesPage();
  });

  function classShowClickHandler1(event) {
    console.log("show click");
    event.preventDefault();
    $('#showpage').show();
    $('#carousel').hide();
    $('#bikepage').hide();
    $('#accessoriespage').hide();
    $('#registerpage').hide();
    $('#loginpage').hide();
    $('#cartpage').hide();
  }

  // WAT
  window.Main.classShowClickHandler1 = classShowClickHandler1;

  $('.show').on('click', classShowClickHandler1);

  $('.register').on('click', function(event) {
    showPage.registerPage();
  });

  $('.login').on('click', function(event) {
    showPage.loginPage();
  });

  $('.cart').on('click', function(event) {
    showPage.cartPage();
  });

  //////////////////////////////////////////////
  // END: show appropriate page, hide the rest
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  // BEGIN: prepare all handlebars objects
  //////////////////////////////////////////////

  $('.bicycles').on('click', function() {
    MyApi.getBicycles();
  });

  // $('.accessories').on('click', function() {
  //   console.log ('accessories button');
  //   var products = data.products;
  //   var accessories = $.grep(products, function(e) { return e.category !== 'bicycles';
  //   });
  //   $('#accessoryResults').html(View.accessoryIndexHTML({accessories: accessories}));
  // });

  // WAT
  function classShowClickHandler2(event) {
    var id = $(event.target).data('id');
    $.ajax({
     url: server + '/products/' + id,
     type: 'GET',
     dataType: 'json',
    })
    .done(function(product) {
     $('#productResults').html(View.itemShowHTML({product: product}));
     console.log(product);
    })
    .fail(function() {
     console.log("error");
    })
    .always(function() {
     console.log("complete");
    });
    $('#productResults').html(View.itemShowHTML({product: product}));
  };

  // WAT
  window.Main.classShowClickHandler2 = classShowClickHandler2;

  $('.show').on('click', classShowClickHandler2);

  //
  // $("#products").html(View.productIndexHTML({products: bikes}));
  // });

  //////////////////////////////////////////////
  // END: prepare all handlebars objects
  //////////////////////////////////////////////

});

//////////////////////////////////////////////
// END: document.ready
//////////////////////////////////////////////
