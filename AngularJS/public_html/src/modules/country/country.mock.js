(function(){
    var countryModule = angular.module('countryModule');
    
    countryModule.run(['$httpBackend', 'country.context', 'MockModule.mockRecords', function ($httpBackend, context, mockRecords) {
            $httpBackend.whenGET('webresources/' + context + '/mostPopulated').respond(function () {
                var top;
                var collection = mockRecords[context];
                for (var i in collection) {
                    if (!top && collection[i].population) {
                        top = collection[i];
                    } else {
                        if (collection[i].population && top.population < collection[i].population) {
                            top = collection[i];
                        }
                    }
                }
                return [200, top || {}, {}];
            });
            
            $httpBackend.whenGET('webresources/' + context + '/leastPopulated').respond(function () {
                var top;
                var collection = mockRecords[context];
                for (var i in collection) {
                    if (!top && collection[i].population) {
                        top = collection[i];
                    } else {
                        if (collection[i].population && top.population > collection[i].population) {
                            top = collection[i];
                        }
                    }
                }
                return [200, top || {}, {}];
            });
        }]);
})();