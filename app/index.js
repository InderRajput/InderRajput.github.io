var animateApp = angular.module("animateApp", ["ui.router"]);

animateApp.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "index.html"
		})

		.state("about", {
			url: "/about",
			templateUrl: "about.html"
		})

}]);