(function() {
    'use strict';

    angular
        .module('Products')
        .controller('ProductsController', ProductsController);
        ProductsController.$inject = [
            '$state',
            '$stateParams',
            'ProductsService'
        ];
    function ProductsController($state, $stateParams, ProductsService) {
        var vm = this;
        vm.products = [];

        init();

        function init() {
          ProductsService
          .queryBySuggestion($stateParams.q)
          .then(function success(response) {
              console.log('response', response);
              vm.products = response.data;
          },
          function error(e) {
              console.error(e);
          });
        }
    }
})();
