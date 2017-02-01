(function(){
	"use strict";

	angular
		.module('app', ['ui.router','ngMaterial'])
		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

			$locationProvider
				.html5Mode(true)
				.hashPrefix('!');

			$urlRouterProvider.otherwise("/");
			$stateProvider

			// страница анкеты
			.state( 'layout', {
				url: '',
				templateUrl: 'templates/questionary/layout.html'
			})
				.state('layout.home', {
					url: '/home',
					templateUrl: 'templates/questionary/home.html'
				})

			// страница кто мы?
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about/about.html'
			})
		});
}());