var app = angular.module("featured", []);

app.controller("featuredController", function($scope){

  $scope.items = [
    {name: "spinner", price:3, image: "images/spinner.jpeg"},
    {name:"knife", price:20, image: "images/knife.jpg"},
    {name:"wallet", price: 35, image: "images/wallet.jpg"}
  ]


});


var app = angular.module("store", []);

app.controller("storeController", function($scope){
  //console.log("hi");
  $scope.storeItems = [
    {name: "Swiss Army Knife", price: 10, image: "images/swissArmyKnife.jpg", description: "Enjoy the simplicity and utility of the victorinox cadet, this styish multi-tool is perfect for urban edc."},
    {name: "Spinner", price: 3, image: "images/spinner.jpeg", description: "it spins."},
    {name:"wallet", price: 35, image: "images/wallet.jpg", description: "holds money."},
    {name:"knife", price:20, image: "images/knife.jpg", description: "regular knife."}
  ]
});


angular.bootstrap(document.getElementById("storePage"), ['store']);
