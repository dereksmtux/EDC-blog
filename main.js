var app = angular.module("featured", []);

app.controller("featuredController", function($scope){
  $scope.items = [
    {name: "spinner", price:3, image: "spinner.jpeg"},
    {name:"knife", price:20, image: "knife.jpg"},
    {name:"wallet", price: 35, image: "wallet.jpg"}
  ]
});
