(function () {
    var crud = angular.module('CrudModule');

    crud.factory('CRUDBase', ['Restangular', function (RestAngular) {
            function crudConstructor() {
                this.api = RestAngular.all(this.url);

                this.fetchRecords = function () {
                    return this.api.getList();
                };
                this.saveRecord = function (currentRecord) {
                    if (currentRecord.id) {
                        return currentRecord.put();
                    } else {
                        return this.api.post(currentRecord);
                    }
                };
                this.deleteRecord = function (record) {
                    return record.remove();
                };
                this.extendCtrl = function (ctrl, scope) {
                    //Variables para el scope
                    scope.currentRecord = {};
                    scope.records = [];

                    //Variables para el controlador
                    ctrl.editMode = false;

                    //Funciones que no requieren del servicio
                    ctrl.createRecord = function () {
                        this.editMode = true;
                        scope.currentRecord = {};
                    };
                    ctrl.editRecord = function (record) {
                        scope.currentRecord = RestAngular.copy(record);
                        this.editMode = true;
                    };

                    //Funciones que usan el servicio CRUD
                    var service = this;

                    ctrl.fetchRecords = function () {
                        return service.fetchRecords().then(function (data) {
                            scope.records = data;
                            scope.currentRecord = {};
                            ctrl.editMode = false;
                            return data;
                        });
                    };
                    ctrl.saveRecord = function () {
                        return service.saveRecord(scope.currentRecord).then(function () {
                            ctrl.fetchRecords();
                        });
                    };
                    ctrl.deleteRecord = function (record) {
                        return service.deleteRecord(record).then(function () {
                            ctrl.fetchRecords();
                        });
                    };
                };
            }
            return {extendService: function (svc) {
                    crudConstructor.call(svc);
                }};
        }]);
})();
