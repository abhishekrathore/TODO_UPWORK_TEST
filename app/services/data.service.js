(function () {
    'use strict';

    angular
        .module('starterApp')
        .service('DataService', DataService);

    DataService.$inject = ['$http'];

    /* @ngInject */
    function DataService($http) {
        this.functionName = functionName;
        this.todoData = [];
        
        function functionName() {
            return 'randomService';
        }
    }

})();

