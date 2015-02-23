(function () {
	var app = angular.module('sportModule');

	app.controller('sportCtrl', ['$scope', 'CRUDUtils', 'sport.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
			this.getAvgAge = function(sport){
				return (sport.minAge + sport.maxAge)/2;
			};
		}]);
})();