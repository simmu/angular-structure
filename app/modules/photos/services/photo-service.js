angular.module('PhotoModule.Service', [])

    .service('PhotoService', function(){
        
        return {
            getPhotoList:getPhotoList,
            getPhotoQuestion: getPhotoQuestion
        }
        
        function getPhotoList(){
            return {
                photos:[
                        {
                            id:'guid-0',
                            name:'Read brief, confirm you\'ve read it',
                            is_completed:false

                        },
                        {
                            id:'guid-1',
                            name:'Confirm shipping address for event materials',
                            is_completed:false
                        },
                        {
                            id:'guid-2',
                            name:'Scout location',
                            is_completed:false
                        },
                        {
                            id:'guid-3',
                            name:'Pre-promote event',
                            is_completed:false
                        },
                        {
                            id:'guid-4',
                            name:'Confirm "all systems go" for event execution',
                            is_completed:false
                        }                     
                    ]
            }
        };

        function getPhotoQuestion(id){
            return('get question for' + id);
            
        }
    
    
});