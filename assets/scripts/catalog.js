var Catalog = (function(){

  var catalog = {};
  catalog.products = [];

  catalog.seedCatalog = function(){
    var self = this;
    $.ajax({
      url: 'https://infinite-eyrie-1136.herokuapp.com/products'
    }).then(function(products){
      self.products = products;
    });
  };

  return catalog;

})();
