(function () {
  'use strict';

  angular
    .module('app')
    .controller('VeiculoController', VeiculoController);

  VeiculoController.$inject = ['VeiculoService']
  function VeiculoController(VeiculoService) {
    var vm = this;
    vm.enderecos = [];
    vm.filtro = '';
    vm.remover = remover;
    vm.buscar = init;

    init();

    function init() {
      var filter = vm.filtro ? { placa: vm.filtro } : {}
      VeiculoService.find(filter)
        .success(function (data) {
          vm.veiculos = data;
        });
    }

    function remover(veiculo) {
    //   confirmBox('Deseja realmente remover o cliente "' + cliente.nome + '"', function () {
    //     ClienteService.remove(cliente._id)
    //       .success(function () {
    //         init();
    //       });
    //   });

      if (!confirm('Deseja realmente remover o veículo "' + veiculo.placa + '"'))
        return;
      VeiculoService.remove(veiculo._id)
        .success(function () {
          init();
        });
    }
  }
})();