(function () {
    var countryModule = angular.module('countryModule', ['CrudModule', 'MockModule']);

    countryModule.constant('country.context', 'countries');

    countryModule.config(['country.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
            urlsProvider.registerUrl(context);
        }]);
})();