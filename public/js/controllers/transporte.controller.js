(function () {
  'use strict';

  angular
    .module('app')
    .controller('TransporteController', TransporteController);

  TransporteController.$inject = ['TransporteService']
  function TransporteController(TransporteService) {
    var vm = this;
    vm.rotas = [];
    vm.filtro = '';
    vm.remover = remover;
    vm.buscar = init;

    init();

    function init() {
      var filter = vm.filtro ? { dataEntrega: vm.filtro } : {}
      TransporteService.find(filter)
        .success(function (data) {
          vm.transportes = data;
        });
    }

    function remover(transporte) {
    //   confirmBox('Deseja realmente remover o cliente "' + cliente.nome + '"', function () {
    //     ClienteService.remove(cliente._id)
    //       .success(function () {
    //         init();
    //       });
    //   });

      if (!confirm('Deseja realmente remover o transporte com data de entrega "' + transporte.dataEntrega + '"'))
        return;
      TransporteService.remove(transporte._id)
        .success(function () {
          init();
        });
    }
  }
})();