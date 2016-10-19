app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes = [
    {id:'ertong',name:'儿童',img:'./images/童书.png',description:''},
    {id:'lishi',name:'历史',img:'./images/历史.png',description:''},
    {id:'dongman',name:'动漫',img:'./iamges/小说.png',description:''},
    {id:'qingchunwenxue',name:'青春文学',img:'./images/文学.png',description:''}
  ]

}])
