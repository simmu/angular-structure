angular.module('tom.global.directives', [])
    .directive('tom-mainH-header', function () {
        var link = function (scope, el) {
            $('.phone-wrapper').perfectScrollbar();
        };
        return {
            link: link,
            replace: true,
            templateUrl: 'partials/main-header.html'
        };
    })
