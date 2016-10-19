app.controller('mainController',['$scope','commonService',function($scope,commonService,c_service){
  c_service.getData('ertong',function(res){
    console.dir(res);
  })
}])
