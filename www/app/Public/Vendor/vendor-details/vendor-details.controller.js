(function() {
    'use strict';

    angular
        .module('Public.Vendor')
        .controller('VendorDetailsController', VendorDetailsController);
        VendorDetailsController.$inject = [
            '$state',
            '$stateParams',
            'VendorService'
        ];
    function VendorDetailsController($state, $stateParams, VendorService) {
      var vendorId = $stateParams.vendorId;
        var vm = this;
        vm.vendor = {};

        init();
        function init() {
          VendorService.get(vendorId)
           .then(function(vendor) {
             console.log("vendor", vendor);

               var vendors = vendor.data.data;
               vm.vendor = vendors[vendorId];
               console.log ("vm.vendor", vm.vendor);
                console.log ("$stateParams", $stateParams);
           });
        }
    }
})();
