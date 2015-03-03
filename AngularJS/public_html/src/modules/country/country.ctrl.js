(function () {
    var countryModule = angular.module('countryModule');

    countryModule.controller('countryCtrl', ['$scope', 'countryService', function ($scope, countryService) {
            countryService.extendCtrl(this, $scope);
            this.fetchRecords();
            this.getMostPopulated = function () {
                countryService.api.customGET('mostPopulated').then(function (data) {
                    if (data.name) {
                        alert('The most populated country is ' + data.name + ' with ' + data.population + ' habitants');
                    } else {
                        alert('There are no countries with population on server');
                    }
                });
            };

            this.getLeastPopulated = function () {
                countryService.api.customGET('leastPopulated').then(function (data) {
                    if (data.name) {
                        alert('The least populated country is ' + data.name + ' with ' + data.population + ' habitants');
                    } else {
                        alert('There are no countries with population on server');
                    }
                });
            };
        }]);
})();