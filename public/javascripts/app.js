angular.
  module('app', ['Controllers', 'Services']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
          templateUrl : '/partials/about.html'
        , controller  : 'HomeCtrl'
      }).
      when('/articles', {
          templateUrl : '/partials/articles.html'
        , controller  : 'ArticleListCtrl'
      }).
      when('/articles/:article', {
          templateUrl : '/partials/article.html'
        , controller  : 'ArticleDetailCtrl'
      }).
      when('/readings', {
          templateUrl : '/partials/readings.html'
        , controller  : 'ReadingListCtrl'
      }).
      when('/projects', {
          templateUrl : '/partials/projects.html'
        , controller  : 'ProjectListCtrl'
        , redirectTo : '/'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);