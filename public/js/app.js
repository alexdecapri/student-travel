var app = angular.module("studentTravel", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/templates/mainTmpl.html",
      controller: "mainCtrl"
    })


  $urlRouterProvider
    .otherwise("/"); 

})
