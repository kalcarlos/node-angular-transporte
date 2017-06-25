(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProdutoController', ProdutoController);

  ProdutoController.$inject = ['ProdutoService']
  function ProdutoController(ProdutoService) {
    var vm = this;
    vm.produtos = [];
    vm.filtro = '';
    vm.remover = remover;
    vm.buscar = init;

    init();

    function init() {
      var filter = vm.filtro ? { descricao: vm.filtro } : {}
      ProdutoService.find(filter)
        .success(function (data) {
          vm.produtos = data;
        });
    }

    function remover(produto) {
    //   confirmBox('Deseja realmente remover o cliente "' + cliente.nome + '"', function () {
    //     ClienteService.remove(cliente._id)
    //       .success(function () {
    //         init();
    //       });
    //   });

      if (!confirm('Deseja realmente remover o produto "' + produto.descricao + '"'))
        return;
      ProdutoService.remove(produto._id)
        .success(function () {
          init();
        });
    }
  }
})();