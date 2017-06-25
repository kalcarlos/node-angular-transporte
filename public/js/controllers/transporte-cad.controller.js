(function () {
  'use strict';

  angular
    .module('app')
    .controller('TransporteCadController', TransporteCadController);

  TransporteCadController.$inject = ['TransporteService', '$location', '$routeParams'];
  function TransporteCadController(TransporteService, $location, $routeParams) {
    var vm = this;
    vm.transporte = {};
    vm.salvar = salvar;

    init();

    function init() {
      if ($routeParams.id) {
        TransporteService.findById($routeParams.id)
          .success(function (data) {
            vm.transporte = data;
          });
      }
    }

    function salvar() {
      TransporteService.save(vm.transporte)
        .success(function () {
          $location.path('/transportes');
        });
    }
  }
})();