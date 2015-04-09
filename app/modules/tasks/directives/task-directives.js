angular.module('TaskModule.Directives', ['TaskModule.Directives.TaskList', 'TaskModule.Directives.TaskItem'])

/*
@Name:Task List
@Type:UI
*/
angular.module('TaskModule.Directives.TaskList', [])
    .directive('tomTasksList', [function(){
        
        return {
            link:link,
            templateUrl: 'app/modules/tasks/partials/task-list.html',
            replace:true
        }
        
        function link(){
        }
}]);


/*
@Name:Task Item
@Type:UI
*/

angular.module('TaskModule.Directives.TaskItem', [])
    .directive('tomTaskItem', ['TaskService', function(taskService){
        
        return {
            link:link,
        }
        
        function link($scope, element, attrs){
            element.click(function(){
                onGetTaskQuestion(attrs.id);
            });
        }

        function onGetTaskQuestion(id){
            console.log(taskService.getTaskQuestion(id));
        }
}]);