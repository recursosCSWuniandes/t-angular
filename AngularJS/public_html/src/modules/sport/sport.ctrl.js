(function () {
    var sportModule = angular.module('sportModule');

    sportModule.controller('sportCtrl', ['$scope', 'sportService','countryService', function ($scope, sportService, countryService) {
            sportService.extendCtrl(this, $scope);
            this.fetchRecords();
            this.getAvgAge = function (sport) {
                return (sport.minAge + sport.maxAge) / 2;
            };
            countryService.fetchRecords().then(function(data){
                $scope.countryRecords = data;
            });
        }]);
})();