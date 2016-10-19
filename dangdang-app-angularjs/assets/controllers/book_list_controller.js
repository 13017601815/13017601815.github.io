app.controller('bookListController',['$scope','commonService',function($scope,c_service){
  $scope.data = [];
  var type = $scope.bookTypes.id;
  c_service.getData(type,function(res){
    $scope.data = res.data.data;
  })
}])
