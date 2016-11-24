angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {




})

.controller('PlaylistsCtrl', function($scope, $http,  $ionicLoading) {


$scope.link= function(links)
{

  console.log(links.url);
  var url=links.url;
  var ref = window.open(url, '_blank', 'location=no');




}



  $scope.news1 = function(){
    $scope.doRefresh = function() {
      $scope.a =[];
      	$scope.type="";
      	$http({
      		method: "GET",
      		url: "https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=7e347fde8143456d8d849747a8659c5b"
      	}).then(function(newsdata){

      			 console.log(newsdata);
      		$scope.a = newsdata.data.articles;
      		$scope.type=newsdata.data;
        $ionicLoading.hide();
          $scope.$broadcast('scroll.refreshComplete');
      	})


      };
$ionicLoading.show();
$scope.doRefresh();

}
 $scope.news2 = function(){



   $scope.doRefresh = function() {
     $scope.a =[];
     	$scope.type="";
     	$http({
     		method: "GET",
     		url: " https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey=7e347fde8143456d8d849747a8659c5b"
     	}).then(function(newsdata){

         angular.forEach(newsdata.data.articles,function(newss)
       {
         console.log(newss);
         $scope.a.push(newss);
         $scope.type=newsdata.data;
         $ionicLoading.hide();
         $scope.$broadcast('scroll.refreshComplete');
       });
     	})


     };

$ionicLoading.show();
  $scope.doRefresh();

}
$scope.news1();


})

.controller('hindhuctrl', function($scope, $http,$ionicLoading) {



  $scope.link= function(links)
  {

    console.log(links.url);
    var url=links.url;
    var ref = cordova.InAppBrowser.open(url, '_blank', 'location=no');


  }


  $scope.news1 = function(){
    $scope.doRefresh = function() {
      $scope.a =[];
       $scope.type="";
       $http({
         method: "GET",
         url: " https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=7e347fde8143456d8d849747a8659c5b"
       }).then(function(newsdata){

          angular.forEach(newsdata.data.articles,function(newss)
        {
          console.log(newss);
          $scope.a.push(newss);
          $scope.type=newsdata.data;
          $ionicLoading.hide();
          $scope.$broadcast('scroll.refreshComplete');
        });
       })

      };
      $ionicLoading.show();
      $scope.doRefresh();

}
 $scope.news2 = function(){

     $scope.doRefresh = function() {
$scope.a =[];
	$scope.type="";
	$http({
		method: "GET",
		url: " https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey=7e347fde8143456d8d849747a8659c5b"
	}).then(function(newsdata){
    angular.forEach(newsdata.data.articles,function(newss)
  {
    console.log(newss);
    $scope.a.push(newss);
    $scope.type=newsdata.data;
    $ionicLoading.hide();
      $scope.$broadcast('scroll.refreshComplete');
  });


	})

};
$ionicLoading.show();
$scope.doRefresh();
}

$scope.news1();





})
