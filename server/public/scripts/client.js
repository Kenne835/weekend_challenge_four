var myApp = angular.module('myApp', []); // Leave array empty for now

myApp.controller('ImageController', ['$scope', function($scope){
var message = this;
console.log(this);

  $scope.ImageOne = true;
  $scope.toggleImageOne = function() {
    $scope.ImageOne = $scope.ImageOne === true ? false: true;
    $scope.viewsOne ++;
  };
  $scope.viewsOne = 0;

  $scope.counterOne = 0;
  $scope.countOne = function (inc) {
    $scope.counterOne += inc;
  };

  $scope.ImageTwo = true;
  $scope.toggleImageTwo = function() {
    $scope.ImageTwo = $scope.ImageTwo === true ? false: true;
    $scope.viewsTwo ++;
  };
  $scope.viewsTwo = 0;

  $scope.counterTwo = 0;
  $scope.countTwo = function (inc) {
    $scope.counterTwo += inc;
  };


  $scope.ImageThree = true;
  $scope.toggleImageThree = function() {
    $scope.ImageThree = $scope.ImageThree === true ? false: true;
    $scope.viewsThree ++;
  };
  $scope.viewsThree = 0;

  $scope.counterThree = 0;
  $scope.countThree = function (inc) {
    $scope.counterThree += inc;
  };


  $scope.ImageFour = true;
  $scope.toggleImageFour = function() {
    $scope.ImageFour = $scope.ImageFour === true ? false: true;
      $scope.viewsFour ++;
  };
  $scope.viewsFour = 0;

  $scope.counterFour = 0;
  $scope.countFour = function (inc) {
    $scope.counterFour += inc;
  };


  $scope.ImageFive = true;
  $scope.toggleImageFive = function() {
    $scope.ImageFive = $scope.ImageFive === true ? false: true;
    $scope.viewsFive ++;
  };
  $scope.viewsFive = 0;

  $scope.counterFive = 0;
  $scope.countFive = function (inc) {
    $scope.counterFive += inc;
  };


  $scope.ImageSix = true;
  $scope.toggleImageSix = function() {
    $scope.ImageSix = $scope.ImageSix === true ? false: true;
    $scope.viewsSix ++;
  };
  $scope.viewsSix = 0;

  $scope.counterSix = 0;
  $scope.countSix = function (inc) {
    $scope.counterSix += inc;
  };
}]);
