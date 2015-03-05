(function(){
    var countryModule = angular.module('countryModule');
    
    countryModule.service('countryService', ['CRUDBase','country.context', function(CRUDBase, context){
            this.url = context;
            CRUDBase.extendService(this);
            this.getMostPopulated = function(){
                return this.api.customGET('mostPopulated');
            };
            this.getLeastPopulated = function(){
                return this.api.customGET('leastPopulated');
            };
    }]);
})();
