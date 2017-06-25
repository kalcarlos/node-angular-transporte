(function () {
  'use strict';

  angular
    .module('app')
    .controller('RotaCadController', RotaCadController);

  RotaCadController.$inject = ['RotaService', '$location', '$routeParams'];
  function RotaCadController(RotaService, $location, $routeParams) {
    var vm = this;
    vm.rota = {};
    vm.salvar = salvar;

    init();

    function init() {
      if ($routeParams.id) {
        RotaService.findById($routeParams.id)
          .success(function (data) {
            vm.rota = data;
          });
      }
    }

    function salvar() {
      RotaService.save(vm.rota)
        .success(function () {
          $location.path('/rotas');
        });
    }
  }
})();