(function () {
    'use strict';

    angular
        .module('starterApp')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['DataService'];

    /* @ngInject */
    function HomeCtrl(DataService) {

        var home = angular.extend(this, {
            openAddModal:openAddModal,
            openDeleteModal:openDeleteModal,
            addToDo : addToDo,
            deleteToDo : deleteToDo,
            checkToDo : checkToDo
        })
        home.checkedList = [];
        activate();

        function activate() {
            console.log(DataService.functionName());
            home.toDoList = DataService.todoData;
        }

        function openAddModal(){
            console.log('sadsd');
            var modal1 = $('.modal1').modal();
            modal1.modal('open');
        }

        function openDeleteModal(){
            var modal2 = $('.modal2').modal();
            modal2.modal('open');
        }
        function addToDo() {
            console.log(home.text);
            DataService.todoData.push(home.text);
            home.text = '';
            console.log('add to');
        }
        function deleteToDo() {
            console.log('deleteToDo');
            console.log(home.checkedList);
            if(home.checkedList && home.checkedList.length) {
                var deletedList = [];
                _.each(DataService.todoData, function (item, key) {
                    _.each(home.checkedList, function (checked) {
                        if(checked === key) {
                            deletedList.push(item);
                        }
                    })
                })
                console.log(deletedList);
                DataService.todoData = _.difference(DataService.todoData, deletedList);
                console.log(DataService.todoData);
                home.toDoList = DataService.todoData;
            } else {
                console.log('no data to delete');
            }

        }
        function checkToDo(todoIndex) {
            console.log(todoIndex);
            if (_.indexOf(home.checkedList, todoIndex) == -1) {
                home.checkedList.push(todoIndex);
            } else {
                home.checkedList = _.reject(home.checkedList, function (n) {
                    return n == todoIndex;
                });
            }

        }
    }

})();

