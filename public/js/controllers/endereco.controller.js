(function () {
  'use strict';

  angular
    .module('app')
    .controller('EnderecoController', EnderecoController);

  EnderecoController.$inject = ['EnderecoService']
  function EnderecoController(EnderecoService) {
    var vm = this;
    vm.enderecos = [];
    vm.filtro = '';
    vm.remover = remover;
    vm.buscar = init;

    init();

    function init() {
      var filter = vm.filtro ? { logradouro: vm.filtro } : {}
      EnderecoService.find(filter)
        .success(function (data) {
          vm.enderecos = data;
        });
    }

    function remover(endereco) {
    //   confirmBox('Deseja realmente remover o cliente "' + cliente.nome + '"', function () {
    //     ClienteService.remove(cliente._id)
    //       .success(function () {
    //         init();
    //       });
    //   });

      if (!confirm('Deseja realmente remover o endereço "' + endereco.logradouro + '"'))
        return;
      EnderecoService.remove(endereco._id)
        .success(function () {
          init();
        });
    }
  }
})();