angular.module('TaskModule', ['ui.router', 'TaskModule.Service', 'TaskModule.Directives', 'TaskModule.Controllers'])
    .value('TaskModuleConfig',{
        layout:'app/modules/tasks/partials/layout.html',
        taskCtrl:'TaskCtrl as tasks'
    })

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        var task = {
            url: '/task',
            templateUrl: 'app/modules/tasks/partials/layout.html',
            controller: 'TaskCtrl as task'
        };

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('task', task);

    }]);