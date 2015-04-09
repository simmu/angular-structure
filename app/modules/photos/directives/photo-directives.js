angular.module('PhotoModule.Directives', ['PhotoModule.Directives.PhotoList', 'PhotoModule.Directives.PhotoItem'])

/*
@Name:Photo List
@Type:UI
*/
angular.module('PhotoModule.Directives.PhotoList', [])
    .directive('tomPhotosList', [function(){
        
        return {
            link:link,
            templateUrl: 'app/modules/photos/partials/photo-list.html',
            replace:true
        }
        
        function link(){
        }
}]);


/*
@Name:Photo Item
@Type:UI
*/

angular.module('PhotoModule.Directives.PhotoItem', [])
    .directive('tomPhotoItem', ['PhotoService', function(photoService){
        
        return {
            link:link,
        }
        
        function link($scope, element, attrs){
            element.click(function(){
                onGetPhotoQuestion(attrs.id);
            });
        }

        function onGetPhotoQuestion(id){
            console.log(photoService.getPhotoQuestion(id));
        }
}]);