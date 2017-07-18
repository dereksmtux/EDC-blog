var app = angular.module("reviews", []);

app.controller("reviewsController", function($scope){
  $scope.reviewItems = [
    {name: "Swiss Army Knife", price: 10, image: "images/swissArmyKnife.jpg" , link: "reviews/swissArmyKnifeReview.html", description: "Enjoy the simplicity and utility of the victorinox cadet, this styish multi-tool is perfect for urban edc."},
    {name:"wallet", price: 35, image: "images/wallet.jpg", description: "holds money."}
  ]
});
angular.bootstrap(document.getElementById("reviewPage"), ['reviews']);
