var myApp = angular.module('myApp', []); // Leave array empty for now

myApp.controller('ImageController', ['$scope', function($scope){

  $scope.ImageOne = true;
  $scope.toggleImageOne = function() {
    $scope.ImageOne = $scope.ImageOne === true ? false: true;
  };
  $scope.counterOne = 0;
  $scope.countOne = function (inc) {
    $scope.counterOne += inc;
  };

  $scope.ImageTwo = true;
  $scope.toggleImageTwo = function() {
    $scope.ImageTwo = $scope.ImageTwo === true ? false: true;
  };
  $scope.counterTwo = 0;
  $scope.countTwo = function (inc) {
    $scope.counterTwo += inc;
  };

  $scope.ImageThree = true;
  $scope.toggleImageThree = function() {
    $scope.ImageThree = $scope.ImageThree === true ? false: true;
  };
  $scope.counterThree = 0;
  $scope.countThree = function (inc) {
    $scope.counterThree += inc;
  };

  $scope.ImageFour = true;
  $scope.toggleImageFour = function() {
    $scope.ImageFour = $scope.ImageFour === true ? false: true;
  };
  $scope.counterFour = 0;
  $scope.countFour = function (inc) {
    $scope.counterFour += inc;
  };

  $scope.ImageFive = true;
  $scope.toggleImageFive = function() {
    $scope.ImageFive = $scope.ImageFive === true ? false: true;
  };
  $scope.counterFive = 0;
  $scope.countFive = function (inc) {
    $scope.counterFive += inc;
  };

  $scope.ImageSix = true;
  $scope.toggleImageSix = function() {
    $scope.ImageSix = $scope.ImageSix === true ? false: true;
  };
  $scope.counterSix = 0;
  $scope.countSix = function (inc) {
    $scope.counterSix += inc;
  };
}]);
