(function () {
  'use strict';

  angular
    .module('app')
    .controller('MotoristaCadController', MotoristaCadController);

  MotoristaCadController.$inject = ['MotoristaService', '$location', '$routeParams'];
  function MotoristaCadController(MotoristaService, $location, $routeParams) {
    var vm = this;
    vm.motorista = {};
    vm.salvar = salvar;

    init();

    function init() {
      if ($routeParams.id) {
        MotoristaService.findById($routeParams.id)
          .success(function (data) {
            vm.motorista = data;
          });
      }
    }

    function salvar() {
      MotoristaService.save(vm.motorista)
        .success(function () {
          $location.path('/motoristas');
        });
    }
  }
})();