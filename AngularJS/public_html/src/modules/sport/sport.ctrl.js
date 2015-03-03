(function () {
    var sportModule = angular.module('sportModule');

    sportModule.controller('sportCtrl', ['$scope', 'sportService', function ($scope, sportService) {
            sportService.extendCtrl(this, $scope);
            this.fetchRecords();
        }]);
})();
