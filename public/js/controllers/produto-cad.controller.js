(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProdutoCadController', ProdutoCadController);

  ProdutoCadController.$inject = ['ProdutoService', '$location', '$routeParams'];
  function ProdutoCadController(ProdutoService, $location, $routeParams) {
    var vm = this;
    vm.produto = {};
    vm.salvar = salvar;

    init();

    function init() {
      if ($routeParams.id) {
        ProdutoService.findById($routeParams.id)
          .success(function (data) {
            vm.produto = data;
          });
      }
    }

    function salvar() {
      ProdutoService.save(vm.produto)
        .success(function () {
          $location.path('/produtos');
        });
    }
  }
})();