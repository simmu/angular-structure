angular.module('PhotoModule', ['ui.router', 'PhotoModule.Service', 'PhotoModule.Directives', 'PhotoModule.Controllers'])
    
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        var photo = {
            url: '/photo',
            templateUrl: 'app/modules/photos/partials/layout.html',
            controller: 'PhotoCtrl as photo'
        };

        $stateProvider
            .state('photo', photo);

    
    }]);