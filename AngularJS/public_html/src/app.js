(function () {

    var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule', 'countryModule']);

    mainApp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/sport', {
                templateUrl: 'src/modules/sport/sport.tpl.html'
            }).when('/country', {
                templateUrl: 'src/modules/country/country.tpl.html'
            }).otherwise('/');
        }]);
})();