(function () {
  'use strict';

  angular
    .module('app')
    .controller('EmpresaCadController', EmpresaCadController);

  EmpresaCadController.$inject = ['EmpresaService', '$location', '$routeParams'];
  function EmpresaCadController(EmpresaService, $location, $routeParams) {
    var vm = this;
    vm.empresa = {};
    vm.salvar = salvar;

    init();

    function init() {
      if ($routeParams.id) {
        EmpresaService.findById($routeParams.id)
          .success(function (data) {
            vm.empresa = data;
          });
      }
    }

    function salvar() {
      EmpresaService.save(vm.empresa)
        .success(function () {
          $location.path('/empresas');
        });
    }
  }
})();