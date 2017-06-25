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
      .when('/produtos', {
        templateUrl: 'partials/produtos.html',
        controller: 'ProdutoController',
        controllerAs: 'vm'
      })
      .when('/produtos/new', {
        templateUrl: 'partials/produtos-cad.html',
        controller: 'ProdutoCadController',
        controllerAs: 'vm'
      })
      .when('/produtos/:id', {
        templateUrl: 'partials/produtos-cad.html',
        controller: 'ProdutoCadController',
        controllerAs: 'vm'
      })
      .when('/motoristas', {
        templateUrl: 'partials/motoristas.html',
        controller: 'MotoristaController',
        controllerAs: 'vm'
      })
      .when('/motoristas/new', {
        templateUrl: 'partials/motoristas-cad.html',
        controller: 'MotoristaCadController',
        controllerAs: 'vm'
      })
      .when('/motoristas/:id', {
        templateUrl: 'partials/motoristas-cad.html',
        controller: 'MotoristaCadController',
        controllerAs: 'vm'
      })
      .when('/rotas', {
        templateUrl: 'partials/rotas.html',
        controller: 'RotaController',
        controllerAs: 'vm'
      })
      .when('/rotas/new', {
        templateUrl: 'partials/rotas-cad.html',
        controller: 'RotaCadController',
        controllerAs: 'vm'
      })
      .when('/rotas/:id', {
        templateUrl: 'partials/rotas-cad.html',
        controller: 'RotaCadController',
        controllerAs: 'vm'
      })
      .when('/transportes', {
        templateUrl: 'partials/transportes.html',
        controller: 'TransporteController',
        controllerAs: 'vm'
      })
      .when('/transportes/new', {
        templateUrl: 'partials/transportes-cad.html',
        controller: 'TransporteCadController',
        controllerAs: 'vm'
      })
      .when('/transportes/:id', {
        templateUrl: 'partials/transportes-cad.html',
        controller: 'TransporteCadController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }
})();