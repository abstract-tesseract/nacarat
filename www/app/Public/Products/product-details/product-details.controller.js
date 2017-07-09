(function() {
    'use strict';

    angular
        .module('Products')
        .controller('ProductDetailsController', ProductDetailsController);
        ProductDetailsController.$inject = [
            '$state',
            '$stateParams',
            'ProductsService',
        ];
    function ProductDetailsController($state, $stateParams, ProductsService) {
      var productId = $stateParams.productId;
        var vm = this;
        vm.product = {};

        init();
        function init() {
          ProductsService.get(productId)
           .then(function(product) {
             console.log("product", product);

               var products = product.data.data;
               vm.product = products[productId];
               console.log ("vm.product", vm.product);
                console.log ("$stateParams", $stateParams);
           });
        }
    }
})();