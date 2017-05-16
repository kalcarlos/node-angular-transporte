var mongoose = require('mongoose');

var empresaModel = mongoose.model('empresas');

module.exports = function(app) {
  app.get('/api/empresas', function(req, resp) {
    empresaModel.find().populate('endereco', 'logradouro bairro cidade')
      .then(function(dados){
        resp.json(dados);
    }, function(erro) {
      resp.status(500).json(erro);
    });
  });

  app.post('/api/empresas', function(req, resp) {
    empresaModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.put('/api/empresas/:id', function(req, resp) {
    empresaModel.findByIdAndUpdate(req.params.id, req.body)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.delete('/api/empresas/:id', function(req, resp) {
    empresaModel.remove({_id: req.params.id})
      .then(function() {
        resp.send();
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });

  app.get('/api/empresas/:id', function(req, resp) {
    empresaModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
};