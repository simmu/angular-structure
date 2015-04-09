angular.module('TaskModule.Controllers', [])
    .controller('TaskCtrl', ['$scope', 'TaskService', function($scope, taskService){

        this.taskList = taskService.getTaskList().tasks;
        console.log(this.taskList);
    }]);