var myApp = angular.module("myApp", ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/page1");

    $stateProvider
        .state("page1", {
            url: "/page1",
            templateUrl: "page1.html",
            controller: "page1Ctrl"
        })
        .state("page2", {
            url: "/page2",
            templateUrl: "page2.html",
            controller: "page2Ctrl"
        });
});