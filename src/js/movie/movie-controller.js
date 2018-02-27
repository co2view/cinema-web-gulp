// Module for movie.html
var appMovieModule = angular.module('cinemaMovieModule', []);

// Controller for movie module
appMovieModule.controller('movieController', function($scope, movieService, movieFactory, $location, $filter,$timeout, $rootScope) {

	$scope.movie = {};

	$scope.moviePageInit = function() {
		$scope.version = $rootScope.version;
		// call movie service module to get a list of the movies.
		movieService.getAll().then(function successCallback(response) {
			$scope.movies = response.data;
			movieFactory.setMovie(undefined);
		}, function errorCallback(response) {
			alert("Error movie page init!!!");
		});
	};

	$scope.addEdit = function(movieId) {
		if (movieId !== "") {
			movieService.getById(movieId).then(
					function successCallback(response) {
						movieFactory.setMovie(response.data);
						$location.path("/movies/edit/" + movieId);
					}, function errorCallback(response) {
						alert("Error find movie!!!");
					});
		} else {
			$location.path("/movies/add");
		}
	};

	$scope.deleteOne = function(moviId) {
		movieService.delete(moviId).then(function successCallback(){
			
			movieDeleted = $filter('filter')($scope.movies,{
				id : moviId
			})[0];
			index = $scope.movies.indexOf(movieDeleted);
			$scope.movies.splice(index,1);
			//? ako se stavi bez timeout onda se pojavi greska inprog
			$timeout(function () {
				$scope.$apply($scope.movies);
			},300);
			
		}, function errorCallback(response) {
			alert("Error delete movie!!!");
		});
	};

})

appMovieModule.controller('movieAddEditController', function($scope, movieService, movieFactory, $location) {

	$scope.save = function(movie) {
		movieService.save(movie).then(function successCallback(response){
			$location.path("/movies");
		}, function errorCallback(response){
			alert("Error save the movie!")
		})
	}

	$scope.initAddEditMovie = function() {
		$scope.movie = movieFactory.getMovie();
	}
})
