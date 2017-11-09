/**
 * Created by Latte on 11/10/2017.
 */
var latteApp = angular.module('latteApp', ['ngRoute', 'ngAnimate']);

latteApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .when('/portfolio'{
            templateUrl: 'pages/portfolio.html'

        })
        .when('/code',{
            templateUrl: 'pages/code.html'
        })
        .when('/testimonials',{
            templateUrl: 'pages/testimonials.html'
        });

});

latteApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

latteApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

latteApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});