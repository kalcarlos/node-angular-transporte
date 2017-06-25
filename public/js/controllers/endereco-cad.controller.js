(function () {
  'use strict';

  angular
    .module('app')
    .controller('EnderecoCadController', EnderecoCadController);

  EnderecoCadController.$inject = ['EnderecoService', '$location', '$routeParams'];
  function EnderecoCadController(EnderecoService, $location, $routeParams) {
    var vm = this;
    vm.endereco = {};
    vm.salvar = salvar;

    init();

    function init() {
      if ($routeParams.id) {
        EnderecoService.findById($routeParams.id)
          .success(function (data) {
            vm.endereco = data;
          });
      }
    }

    function salvar() {
      EnderecoService.save(vm.endereco)
        .success(function () {
          $location.path('/enderecos');
        });
    }
  }
})();