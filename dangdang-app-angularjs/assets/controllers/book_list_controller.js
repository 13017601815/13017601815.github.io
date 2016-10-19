app.controller('bookListController',
['$scope','commonService','$routeParams',
function($scope,c_service,$routeParams){
  $scope.data = [];
  var id = $routeParams.id;
  console.log($routeParams.id);
  c_service.getData(id,function(res){
    console.dir(res);
    $scope.data = res.data;
  })
}])
