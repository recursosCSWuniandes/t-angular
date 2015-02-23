(function () {
	var app = angular.module('countryModule');

	app.controller('countryCtrl', ['$scope', 'CRUDUtils', 'country.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
			this.getMostPopulated = function () {
				this.api.customGET('mostPopulated').then(function(data){
					if (data.name) {
						alert('The most populated country is '+data.name+' with '+data.population+' habitants');
					}else {
						alert('There are no countries with population on server');
					}
				});;
			};
		}]);
})();