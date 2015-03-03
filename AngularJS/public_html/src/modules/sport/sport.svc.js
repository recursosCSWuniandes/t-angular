(function(){
    var sportModule = angular.module('sportModule');
    
    sportModule.service('sportService', ['CRUDBase','sport.context', function(CRUDBase, context){
            this.url = context;
            CRUDBase.extendService(this);
    }]);
})();
