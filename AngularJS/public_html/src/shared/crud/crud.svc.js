(function () {
    var crud = angular.module('CrudModule');

    crud.factory('CRUDUtils', ['Restangular', function (RestAngular) {
            function crudFunction($scope) {
                this.api = RestAngular.all(this.url);
                $scope.currentRecord = {};
                $scope.records = [];
                this.editMode = false;

                this.pageChanged = function () {
                    this.fetchRecords();
                };
                
                $scope.maxSize = 5;
                $scope.itemsPerPage = 5;
                $scope.totalItems = 0;
                $scope.currentPage = 1;

                this.fetchRecords = function () {
                    var self = this;
                    this.api.getList(null,{page: $scope.currentPage, maxRecords: $scope.itemsPerPage}).then(function (data) {
                        $scope.records = data;
                        $scope.totalItems = data.totalRecords;
                        $scope.currentRecord = {};
                        self.editMode = false;
                    });
                };
                this.createRecord = function () {
                    this.editMode = true;
                    $scope.currentRecord = {};
                };
                this.saveRecord = function () {
                    var self = this;
                    if ($scope.currentRecord.id) {
                        $scope.currentRecord.put().then(function () {
                            self.fetchRecords();
                        });
                    } else {
                        this.api.post($scope.currentRecord).then(function () {
                            self.fetchRecords();
                        });
                    }
                };
                this.deleteRecord = function (record) {
                    var self = this;
                    record.remove().then(function () {
                        self.fetchRecords();
                    });
                };
                this.editRecord = function (record) {
                    $scope.currentRecord = RestAngular.copy(record);
                    this.editMode = true;
                };
            }
            ;
            return {
                extendCtrl: function (obj, scope) {
                    crudFunction.call(obj, scope);
                }
            };
        }]);
})();