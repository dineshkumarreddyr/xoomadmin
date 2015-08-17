(function() {
  'use strict';

  angular
    .module('xoomadmin')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('manageaccounts',{
        url:'/manage',
        templateUrl:'app/components/manageaccount/xoomadmin.manageaccount.tmpl.html'
      });
      
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
