(function () {
    var sportModule = angular.module('sportModule', ['CrudModule', 'MockModule']);

    sportModule.constant('sport.context', 'sports');

    sportModule.config(['sport.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
            urlsProvider.registerUrl(context);
        }]);
})();