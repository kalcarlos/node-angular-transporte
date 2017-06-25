(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
  ]).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];
  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/empresas', {
        templateUrl: 'partials/empresas.html',
        controller: 'EmpresaController',
        controllerAs: 'vm'
      })
      .when('/empresas/new', {
        templateUrl: 'partials/empresas-cad.html',
        controller: 'EmpresaCadController',
        controllerAs: 'vm'
      })
      .when('/empresas/:id', {
        templateUrl: 'partials/empresas-cad.html',
        controller: 'EmpresaCadController',
        controllerAs: 'vm'
      })
      .when('/enderecos', {
        templateUrl: 'partials/enderecos.html',
        controller: 'EnderecoController',
        controllerAs: 'vm'
      })
      .when('/enderecos/new', {
        templateUrl: 'partials/enderecos-cad.html',
        controller: 'EnderecoCadController',
        controllerAs: 'vm'
      })
      .when('/enderecos/:id', {
        templateUrl: 'partials/enderecos-cad.html',
        controller: 'EnderecoCadController',
        controllerAs: 'vm'
      })
      .when('/veiculos', {
        templateUrl: 'partials/veiculos.html',
        controller: 'VeiculoController',
        controllerAs: 'vm'
      })
      .when('/veiculos/new', {
        templateUrl: 'partials/veiculos-cad.html',
        controller: 'VeiculoCadController',
        controllerAs: 'vm'
      })
      .when('/veiculos/:id', {
        templateUrl: 'partials/veiculos-cad.html',
        controller: 'VeiculoCadController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }
})();