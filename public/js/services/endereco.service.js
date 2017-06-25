(function () {
  'use strict';

  angular
    .module('app')
    .factory('EnderecoService', EnderecoService);

  EnderecoService.$inject = ['$http'];
  function EnderecoService($http) {
    var service = {
      find: find,
      findById: findById,
      save: save,
      remove: remove
    };

    var URL = '/api/enderecos';

    return service;

    function find(filter) {
      return $http.get(URL, { params: { filter: JSON.stringify(filter) } });
    }

    function findById(id) {
      return $http.get(URL + '/' + id);
    }

    function save(record) {
      if (record._id) {
        return $http.put(URL + '/' + record._id, record);
      } else {
        return $http.post(URL, record);
      }
    }

    function remove(id) {
      return $http.delete(URL + '/' + id);
    }
  }
})();