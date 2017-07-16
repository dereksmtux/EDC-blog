var app = angular.module("reviews", []);

app.controller("reviewsController", function($scope){
  $scope.reviewItems = [
    {name: "Swiss Army Knife", price: 10, video: "https://www.youtube.com/embed/xa_nj8NfQ9Q", description: "Enjoy the simplicity and utility of the victorinox cadet, this styish multi-tool is perfect for urban edc."}
  ]
});
angular.bootstrap(document.getElementById("reviewPage"), ['reviews']);
