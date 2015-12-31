var app = angular.module("myApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home")

	$stateProvider
		.state("home", {
			url: "/home",
			templateUrl: "templates/home.html"
		})

		.state("about", {
			url: "/about",
			templateUrl: "templates/about.html"
		})

		.state("work", {
			url: "/work",
			templateUrl: "templates/work.html"
		})

		.state("skills", {
			url: "/skills",
			templateUrl: "templates/skills.html"
		})

		.state("contact", {
			url: "/contact",
			templateUrl: "templates/contact.html"
		});
})

app.controller("myController", function() {

});