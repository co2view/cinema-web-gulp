// Creating basic module for AngularJS.
// Add all other created modules in basic model.
var cinemaApp = angular.module('cinemaApp', [ 'ngRoute', 'cinemaHomeModule', 'cinemaMovieModule' ]);

// Configuration for AngularJS application.
cinemaApp.config([ '$routeProvider', function($routeProvider, $compile) {

	// Routing for application - routes the application to different pages without reloading the entire application.
	$routeProvider.when('/', {
		templateUrl : 'views/home.html',
		controller : 'homeController'
	}).when('/movies', {
		templateUrl : 'views/movie/movies.html',
		controller : 'movieController'
	}).when('/movies/edit/:id', {
		templateUrl : 'views/movie/add-edit.html',
		controller  : 'movieAddEditController'
    })
    .when('/movies/add', {
		templateUrl : 'views/movie/add-edit.html',
		controller  : 'movieAddEditController'
    })

} ])

//use constants in whole app
cinemaApp.constant('config', {
	version: '1.0.0.'
})

// another way
cinemaApp.run(function ($rootScope){
	$rootScope.version = '1.0.0.';
})
