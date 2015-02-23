(function () {

    var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule']);

    mainApp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/sport', {
                templateUrl: 'src/modules/sport/sport.tpl.html'
            }).otherwise('/');
        }]);
})();