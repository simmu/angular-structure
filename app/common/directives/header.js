angular.module('tom.global.directives', [])
    .directive('siteHeader', function () {
        var link = function (scope, el) {
            
        };
        return {
            link: link,
            replace: true,
            templateUrl: 'app/partials/main-header.html'
        };
    })
