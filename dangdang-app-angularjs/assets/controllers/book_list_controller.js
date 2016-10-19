app.controller('bookListController',['$scope','commonService',function($scope,c_service){
  $scope.data = [];
  c_service.getData(function(res){
    $scope.data = res.data.data;
  })
}])
