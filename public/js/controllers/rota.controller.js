(function () {
  'use strict';

  angular
    .module('app')
    .controller('RotaController', RotaController);

  RotaController.$inject = ['RotaService']
  function RotaController(RotaService) {
    var vm = this;
    vm.rotas = [];
    vm.filtro = '';
    vm.remover = remover;
    vm.buscar = init;

    init();

    function init() {
      var filter = vm.filtro ? { descricao: vm.filtro } : {}
      RotaService.find(filter)
        .success(function (data) {
          vm.rotas = data;
        });
    }

    function remover(rota) {
    //   confirmBox('Deseja realmente remover o cliente "' + cliente.nome + '"', function () {
    //     ClienteService.remove(cliente._id)
    //       .success(function () {
    //         init();
    //       });
    //   });

      if (!confirm('Deseja realmente remover a rota "' + rota.descricao + '"'))
        return;
      RotaService.remove(rota._id)
        .success(function () {
          init();
        });
    }
  }
})();