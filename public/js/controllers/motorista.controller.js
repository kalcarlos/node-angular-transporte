(function () {
  'use strict';

  angular
    .module('app')
    .controller('MotoristaController', MotoristaController);

  MotoristaController.$inject = ['MotoristaService']
  function MotoristaController(MotoristaService) {
    var vm = this;
    vm.motoristas = [];
    vm.filtro = '';
    vm.remover = remover;
    vm.buscar = init;

    init();

    function init() {
      var filter = vm.filtro ? { nome: vm.filtro } : {}
      MotoristaService.find(filter)
        .success(function (data) {
          vm.motoristas = data;
        });
    }

    function remover(motorista) {
    //   confirmBox('Deseja realmente remover o cliente "' + cliente.nome + '"', function () {
    //     ClienteService.remove(cliente._id)
    //       .success(function () {
    //         init();
    //       });
    //   });

      if (!confirm('Deseja realmente remover o motorista "' + motorista.nome + '"'))
        return;
      MotoristaService.remove(motorista._id)
        .success(function () {
          init();
        });
    }
  }
})();