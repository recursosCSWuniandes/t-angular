(function () {
    var countryModule = angular.module('countryModule');

    countryModule.controller('countryCtrl', ['$scope', 'countryService', function ($scope, countryService) {
            countryService.extendCtrl(this, $scope);
            this.fetchRecords();
            this.getMostPopulated = function () {
                countryService.getMostPopulated().then(function(data){
                    alert('The most populated country is ' + data.name + ' with ' + data.population + ' habitants');
                }, function(){
                    alert('There are no countries with population on server');
                });
            };

            this.getLeastPopulated = function () {
                countryService.getLeastPopulated().then(function (data) {
                    alert('The least populated country is ' + data.name + ' with ' + data.population + ' habitants');
                }, function(){
                    alert('There are no countries with population on server');
                });
            };
        }]);
})();