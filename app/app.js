var moduleConfig = ['TaskModule'];

(function(angular, dependency){
    
    dependency.push('ui.router')
    
    angular.module('tom', dependency)
        .constant('version', '0.1')
    
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                console.log(toState.name);
                console.log(fromState.name);
            }
        );
    }]);

})(angular, moduleConfig);