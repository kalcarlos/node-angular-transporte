(function () {
  'use strict';

  angular
    .module('app')
    .controller('VeiculoCadController', VeiculoCadController);

  VeiculoCadController.$inject = ['VeiculoService', '$location', '$routeParams'];
  function VeiculoCadController(VeiculoService, $location, $routeParams) {
    var vm = this;
    vm.veiculo = {};
    vm.salvar = salvar;

    init();

    function init() {
      if ($routeParams.id) {
        VeiculoService.findById($routeParams.id)
          .success(function (data) {
            vm.veiculo = data;
          });
      }
    }

    function salvar() {
      VeiculoService.save(vm.veiculo)
        .success(function () {
          $location.path('/veiculos');
        });
    }
  }
})();