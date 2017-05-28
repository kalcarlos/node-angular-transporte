(function () {
  'use strict';

  angular
    .module('app')
    .controller('EmpresaController', EmpresaController);

  EmpresaController.$inject = ['EmpresaService']
  function EmpresaController(EmpresaService) {
    var vm = this;
    vm.empresas = [];
    vm.filtro = '';
    vm.remover = remover;
    vm.buscar = init;

    init();

    function init() {
      var filter = vm.filtro ? { nomeFantasia: vm.filtro } : {}
      EmpresaService.find(filter)
        .success(function (data) {
          vm.empresas = data;
        });
    }

    function remover(cliente) {
    //   confirmBox('Deseja realmente remover o cliente "' + cliente.nome + '"', function () {
    //     ClienteService.remove(cliente._id)
    //       .success(function () {
    //         init();
    //       });
    //   });

      if (!confirm('Deseja realmente remover a empresa "' + empresa.nomeFantasia + '"'))
        return;
      EmpresaService.remove(empresa._id)
        .success(function () {
          init();
        });
    }
  }
})();