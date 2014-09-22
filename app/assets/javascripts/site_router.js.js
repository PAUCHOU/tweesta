// Generated by CoffeeScript 1.8.0
var Router, TweestaRouter;

TweestaRouter = angular.module("TweestaRouter", ["ngRoute"]);

Router = (function() {
  function Router(routeProvider, locationProvider) {
    this.routeProvider = routeProvider;
    this.locationProvider = locationProvider;
    console.log("Initialized Router");
    console.log("Setting Up");
    this.routeProvider.when("/", {
      templateUrl: "/site_templates",
      controller: "TweestasCtrl as tweestas"
    });
    this.locationProvider.html5Mode(true);
  }

  return Router;

})();

TweestaRouter.config(["$routeProvider", "$locationProvider", Router]);

TweestaRouter.config([
  "$httpProvider", function($httpProvider) {
    return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);
