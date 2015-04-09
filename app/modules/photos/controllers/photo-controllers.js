angular.module('PhotoModule.Controllers', [])
    .controller('PhotoCtrl', ['$scope', 'PhotoService', function($scope, photoService){

        this.photoList = photoService.getPhotoList().photos;
        console.log(this.photoList);
    }]);