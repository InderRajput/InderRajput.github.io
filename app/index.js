var animateApp = angular.module("animateApp", ["ngRoute", "ngAnimate"]);

animateApp.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "home.html",
			controller: "homeController"
		})

		.when("/about", {
			templateUrl: "about.html",
			controller: "aboutController"
		})

		.when("/contact", {
			templateUrl: "contact.html",
			controller: "contactController"
		})

		.when("/portfolio", {
			templateUrl: "portfolio.html",
			controller: "portfolioController"
		})

		.when("/skills", {
			templateUrl: "skills.html",
			controller: "skillsController"
		});
});


animateApp.controller('homeController', function($scope) {
    $scope.pageClass = 'home';
});

// about page controller
animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'about';
});

// contact page controller
animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'contact';
});

animateApp.controller('portfolioController', function($scope) {
    $scope.pageClass = 'portfolio';
});

animateApp.controller('skillsController', function($scope) {
    $scope.pageClass = 'skills';
});